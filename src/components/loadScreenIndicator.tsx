import React from 'react';
import { ActivityIndicator } from 'react-native';
import { styled } from 'styled-components/native';
import theme from '../styles/theme';

const LoadScreenIndicator: React.FunctionComponent = () => {
  return (
    <Container>
      <ActivityIndicator color={theme.colors.darkBlue} size={'large'} />
    </Container>
  );
};

export default LoadScreenIndicator;

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
