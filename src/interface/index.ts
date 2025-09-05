export interface IScreenNavigation {
  navigate: (screen: string) => void;
}

export interface IScreenNavigationProps {
  navigate: (screen: string, params?: any) => void;
}

export interface IScreenNavigationAuthProps {
  navigate: (
    screen: string,
    params?: { value?: string; destinatary?: string },
  ) => void;
}

export interface IFormLogin {
  email: string;
  password: string;
}

export interface IFormRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IRecoverPassword {
  email: string;
}

export interface IUser {
  name: string;
  email: string;
  uid: string;
  whatsapp: string;
  city: string;
  uf: string;
  urlPhoto: string;
}

export interface ICarList {
  uidUser: string;
  id: string;
  name: string;
  model?: string;
  year: string;
  price: string;
  uf?: string;
  city: string;
  km: string;
  images: string;
}
