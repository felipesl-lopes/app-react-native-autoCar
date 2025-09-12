import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styled } from 'styled-components/native';
import theme from '../styles/theme';

interface IProps {
  title: string;
}

const MenuDrawer: React.FunctionComponent<IProps> = ({ title }) => {
  const { dispatch } = useNavigation();

  return (
    <Container>
      {title === 'Início' ? (
        <Logo source={require('../assets/menuLogo-autocar.png')} />
      ) : (
        <Title>{title}</Title>
      )}
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

const Title = styled.Text`
  font-size: 17px;
  color: white;
`;
