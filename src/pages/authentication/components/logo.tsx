import React from 'react';
import { styled } from 'styled-components/native';
import theme from '../../../styles/theme';

const LogoComponent: React.FunctionComponent = () => {
  return (
    <ContainerLogo>
      <Logo
        source={require('../../../assets/logo-autocar.png')}
        resizeMode="contain"
      />
    </ContainerLogo>
  );
};

export default LogoComponent;

const ContainerLogo = styled.View`
  background-color: ${theme.colors.darkBlue};
  align-self: flex-start;
  padding: 0px 10px;
  border-radius: 20px;
`;

const Logo = styled.Image`
  width: 80px;
  height: 40px;
`;
