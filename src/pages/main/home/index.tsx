import React, { useContext } from 'react';
import ContainerComponent from '../../../components/container';
import MenuDrawer from '../../../components/menuDrawer';
import { Container, Title } from './styled';
import { Button } from 'react-native';
import { AuthContext } from '../../../contexts/auth.context';

const Home: React.FunctionComponent = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <Container>
      <MenuDrawer />
      <ContainerComponent>
        <Title>Carros novos e usados em todo o Brasil</Title>
        <Button onPress={handleLogout} title="Sair" />
      </ContainerComponent>
    </Container>
  );
};

export default Home;
