import React, { useContext } from 'react';
import ContainerComponent from '../../../components/container';
import { PrimaryButton } from '../../../components/SendButton';
import { Spacer } from '../../../components/spacer';
import { AuthContext } from '../../../contexts/auth.context';
import CarouselAd from './components/carouselAd';
import { Container, Title } from './styled';

const Home: React.FunctionComponent = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <Container>
      <CarouselAd />
      <ContainerComponent>
        <Title>Carros novos e usados em todo o Brasil</Title>
        <Spacer spacing={4} />
        <PrimaryButton onPress={handleLogout} title="Sair" />
      </ContainerComponent>
    </Container>
  );
};

export default Home;
