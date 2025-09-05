import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import * as yup from 'yup';
import ContainerComponent from '../../../components/container';
import {
  InputControl,
  InputPasswordControl,
} from '../../../components/inputComponent';
import { PrimaryButton, SecondaryButton } from '../../../components/SendButton';
import { Spacer } from '../../../components/spacer';
import { AuthContext } from '../../../contexts/auth.context';
import { IFormRegister, IScreenNavigation } from '../../../interface';
import LogoComponent from '../components/logo';
import { Title } from '../styled';
import ModalVerifieldEmail from '../../../components/modals/modalVerifieldEmail';

const Register: React.FunctionComponent = () => {
  const { navigate } = useNavigation<IScreenNavigation>();
  const { handleRegister } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const schema = yup.object({
    name: yup.string().required('Digite o seu nome'),
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('Informe seu e-mail.'),
    password: yup
      .string()
      .min(6, 'Mínimo de 6 dígitos.')
      .required('Digite a sua senha.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas não coincidem')
      .required('Confirme a sua senha.'),
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const register = async (data: IFormRegister) => {
    await handleRegister(data)
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

      <Title>Registre-se</Title>

      <Spacer spacing={5} />

      <InputControl
        control={control}
        name="name"
        placeholder="Nome completo"
        keyboardType="default"
        errors={errors.name && (errors.name?.message as string)}
      />

      <InputControl
        control={control}
        name="email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        errors={errors.email && (errors.email?.message as string)}
      />

      <InputPasswordControl
        placeholder="Senha"
        autoCapitalize="none"
        control={control}
        name="password"
        errors={errors.password && (errors.password?.message as string)}
      />

      <InputPasswordControl
        placeholder="Repita a senha"
        autoCapitalize="none"
        control={control}
        name="confirmPassword"
        errors={
          errors.confirmPassword && (errors.confirmPassword?.message as string)
        }
      />

      <Spacer spacing={6} />

      <PrimaryButton onPress={handleSubmit(register)} title="Cadastrar" />
      <SecondaryButton onPress={() => navigate('Login')} title="Fazer login" />

      {isModalVisible && (
        <ModalVerifieldEmail
          destinatary="verifieldEmail"
          value={getValues('email')}
          onPress={modalVisible}
          isModalVisible={isModalVisible}
        />
      )}
    </ContainerComponent>
  );
};

export default Register;
