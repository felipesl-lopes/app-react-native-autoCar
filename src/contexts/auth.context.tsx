import { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import {
  IFormLogin,
  IFormRegister,
  IRecoverPassword,
  IUser,
} from '../interface';
import axiosService from '../services/api';
import { removeCredentials, saveCredentials } from '../services/keychain';

interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  handleLogin: (data: IFormLogin, rememberLogin?: boolean) => Promise<void>;
  signed: boolean;
  handleLogout: () => Promise<void>;
  handleRegister: (data: IFormRegister) => Promise<void>;
  handleRecoverPassword: (data: IRecoverPassword) => Promise<void>;
  emailVerified: boolean | undefined;
  handleVerifieldEmail: () => Promise<void>;
  loadingButton: boolean;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [emailVerified, setEmailVerified] = useState<boolean | undefined>(
    undefined,
  );

  /**
   * Verifica se o e-mail do usuário está verificado.
   */
  useEffect(() => {
    axiosService('/auth/validation')
      .then(({ data }) => {
        setEmailVerified(data);
      })
      .catch(error => {
        console.log(error);
        setEmailVerified(false);
        //   getErrorMessage(error);
      });
  }, [user]);

  const handleLogin = async (data: IFormLogin, rememberLogin?: boolean) => {
    setLoadingButton(true);
    await axiosService
      .post('/auth/login', data)
      .then(async ({ data: dataUser }) => {
        setUser(await dataUser);

        if (rememberLogin) {
          await saveCredentials(data.email, data.password);
        }
      })
      .catch(async error => {
        console.log(error);
        Alert.alert('Erro');
      })
      .finally(() => setLoadingButton(false));
  };

  const handleRegister = async (data: IFormRegister) => {
    setLoadingButton(true);
    await axiosService
      .post('/auth/register', data)
      .then(async ({ data: userData }) => {
        setUser(await userData);
      })
      .catch(async error =>
        // toast.error(getErrorMessage(await error.response.data.code))
        console.log(error),
      )
      .finally(() => setLoadingButton(false));
  };

  const handleRecoverPassword = async (data: IRecoverPassword) => {
    setLoadingButton(true);
    await axiosService
      .post('/auth/recoverPassword', { email: data.email })
      .finally(() => setLoadingButton(false));
  };

  const handleVerifieldEmail = async () => {
    await axiosService.post('/auth/verifieldEmail');
  };

  const handleLogout = async () => {
    await axiosService('/auth/logout').then(async () => {
      await removeCredentials();
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        signed: !!user,
        handleLogout,
        handleRegister,
        handleRecoverPassword,
        emailVerified,
        handleVerifieldEmail,
        loadingButton,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
