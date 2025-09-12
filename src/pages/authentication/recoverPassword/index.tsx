import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import * as yup from 'yup';
import ContainerComponent from '../../../components/container';
import { InputControl } from '../../../components/inputComponent';
import ModalVerifieldEmail from '../../../components/modals/modalVerifieldEmail';
import { PrimaryButton, SecondaryButton } from '../../../components/SendButton';
import { Spacer } from '../../../components/spacer';
import { AuthContext } from '../../../contexts/auth.context';
import { IRecoverPassword } from '../../../interface/auth';
import { IScreenNavigation } from '../../../interface/navigation';
import LogoComponent from '../components/logo';
import { Title } from '../styled';

const RecoverPassword: React.FunctionComponent = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('Informe seu e-mail.'),
  });

  const { navigate } = useNavigation<IScreenNavigation>();
  const { handleRecoverPassword } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const recoverPassword = async (data: IRecoverPassword) => {
    await handleRecoverPassword(data)
      .then(() => modalVisible())
      .catch(() => Alert.alert('Tente novamente em alguns instantes'));
  };

  const modalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ContainerComponent>
      <LogoComponent />

      <Spacer spacing={6} />

      <Title>Redefinição de senha</Title>

      <Spacer spacing={5} />

      <InputControl
        control={control}
        name="email"
        placeholder="E-mail cadastrado"
        keyboardType="email-address"
        autoCapitalize="none"
        errors={errors.email && (errors.email?.message as string)}
      />

      <Spacer spacing={6} />

      <PrimaryButton
        onPress={handleSubmit(recoverPassword)}
        title="Enviar e-mail"
      />
      <SecondaryButton onPress={() => navigate('Login')} title="Voltar" />

      {isModalVisible && (
        <ModalVerifieldEmail
          destinatary="recoverpassword"
          value={getValues('email')}
          onPress={modalVisible}
          isModalVisible={isModalVisible}
        />
      )}
    </ContainerComponent>
  );
};

export default RecoverPassword;
