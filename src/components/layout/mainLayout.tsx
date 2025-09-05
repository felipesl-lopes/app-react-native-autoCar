import React, { ReactNode } from 'react';
import { styled } from 'styled-components/native';
import HeaderProfileComponent from '../headerProfile';
import MenuDrawer from '../menuDrawer';

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <Container>
      <MenuDrawer />
      <HeaderProfileComponent />
      <Containt>{children}</Containt>
    </Container>
  );
};

export default MainLayout;

const Container = styled.View`
  flex: 1;
`;

const Containt = styled.View`
  flex: 1;
`;
