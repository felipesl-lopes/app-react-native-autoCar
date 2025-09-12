import React, { useContext } from 'react';
import { Button } from 'react-native';
import ContainerComponent from '../../../components/container';
import { AuthContext } from '../../../contexts/auth.context';
import { Container, Title } from './styled';
import CarouselAd from './components/carouselAd';

const Home: React.FunctionComponent = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <Container>
      <CarouselAd />
      <ContainerComponent>
        <Title>Carros novos e usados em todo o Brasil</Title>
        <Button onPress={handleLogout} title="Sair" />
      </ContainerComponent>
    </Container>
  );
};

export default Home;
