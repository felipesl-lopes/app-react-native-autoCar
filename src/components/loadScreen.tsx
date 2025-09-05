import React from 'react';
import { styled } from 'styled-components/native';
import theme from '../styles/theme';

const LoadScreen: React.FunctionComponent = () => {
  return (
    <Container>
      <Logo
        source={require('../assets/logo-autocar.png')}
        resizeMode="contain"
      />
    </Container>
  );
};

export default LoadScreen;

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.darkBlue};
`;

const Logo = styled.Image``;
