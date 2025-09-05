import React, { ReactNode } from 'react';
import { styled } from 'styled-components/native';

interface IProps {
  children: ReactNode;
}

const ContainerComponent: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <Container>
      <Spacer />
      {children}
      <Spacer />
    </Container>
  );
};

export default ContainerComponent;

const Container = styled.ScrollView`
  padding: 0 16px;
`;

const Spacer = styled.View`
  height: 20px;
`;
