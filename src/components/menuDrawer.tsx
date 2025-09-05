import React from 'react';
import { styled } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../styles/theme';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const MenuDrawer: React.FunctionComponent = () => {
  const { dispatch } = useNavigation();

  return (
    <Container>
      <Logo source={require('../assets/menuLogo-autocar.png')} />
      <Icon
        onPress={() => dispatch(DrawerActions.toggleDrawer())}
        name="menu-outline"
      />
    </Container>
  );
};

export default MenuDrawer;

const Container = styled.View`
  background-color: ${theme.colors.darkBlue};
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.Image``;

const Icon = styled(Ionicons)`
  color: white;
  font-size: 30px;
`;
