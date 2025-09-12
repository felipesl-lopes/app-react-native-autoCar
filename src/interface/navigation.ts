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
