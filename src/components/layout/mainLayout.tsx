import React, { ReactNode } from 'react';
import { styled } from 'styled-components/native';
import MenuDrawer from '../menuDrawer';

interface IProps {
  children: ReactNode;
  title: string;
}

const MainLayout: React.FunctionComponent<IProps> = ({ children, title }) => {
  return (
    <Container>
      <MenuDrawer title={title} />
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
