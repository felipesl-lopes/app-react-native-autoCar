import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from 'react-native';
import { styled } from 'styled-components/native';
import * as yup from 'yup';
import ContainerComponent from '../../../components/container';
import {
  InputControl,
  InputPasswordControl,
} from '../../../components/inputComponent';
import LoadScreen from '../../../components/loadScreen';
import { PrimaryButton, SecondaryButton } from '../../../components/SendButton';
import { Spacer } from '../../../components/spacer';
import { AuthContext } from '../../../contexts/auth.context';
import { IFormLogin, IScreenNavigation } from '../../../interface';
import { getCredentials } from '../../../services/keychain';
import theme from '../../../styles/theme';
import { ContainerSwitch, RecoverPassword, TextSwitch, Title } from '../styled';

const Login: React.FunctionComponent = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('Informe seu e-mail.'),
    password: yup
      .string()
      .min(6, 'Mínimo de 6 dígitos.')
      .required('Digite a sua senha.'),
  });

  const { navigate } = useNavigation<IScreenNavigation>();
  const { handleLogin } = useContext(AuthContext);
  const [rememberLogin, setRememberLogin] = useState<boolean>(false);
  const [finallyLoad, setFinallyLoad] = useState(false);

  useEffect(() => {
    (async () => {
      let value = await getCredentials();
      if (!value) {
        return;
      }
      const val = {
        email: value.username,
        password: value.password,
      };
      await handleLogin(val);
    })().finally(() => setFinallyLoad(true));
  }, [handleLogin]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  if (!finallyLoad) {
    return <LoadScreen />;
  }

  const login = async (data: IFormLogin) => {
    await handleLogin(data, rememberLogin);
  };

  return (
    <ContainerComponent>
      <ContainerLogo>
        <Logo
          source={require('../../../assets/logo-autocar.png')}
          resizeMode="contain"
        />
      </ContainerLogo>

      <Spacer spacing={6} />

      <Title>Faça o Login</Title>

      <Spacer spacing={5} />

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

      <ContainerSwitch>
        <Switch
          onValueChange={() => setRememberLogin(!rememberLogin)}
          value={rememberLogin}
          thumbColor={rememberLogin ? theme.colors.blue : '#777'}
        />
        <TextSwitch>Permanecer conectado</TextSwitch>
      </ContainerSwitch>

      <Spacer spacing={2} />

      <RecoverPassword onPress={() => navigate('Recuperar senha')}>
        Esqueci minha senha
      </RecoverPassword>

      <Spacer spacing={8} />

      <PrimaryButton onPress={handleSubmit(login)} title="Entrar" />
      <SecondaryButton
        onPress={() => navigate('Cadastro')}
        title="Criar conta"
      />
    </ContainerComponent>
  );
};

export default Login;

const ContainerLogo = styled.View`
  background-color: ${theme.colors.darkBlue};
  align-self: center;
  padding: 4px 16px;
  border-radius: 20px;
`;

const Logo = styled.Image`
  width: 100px;
  height: 40px;
`;
