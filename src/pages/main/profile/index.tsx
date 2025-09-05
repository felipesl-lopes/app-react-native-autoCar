import React from 'react';
import ContainerComponent from '../../../components/container';
import { Container, Title } from './styled';

const Profile: React.FunctionComponent = () => {
  return (
    <Container>
      <ContainerComponent>
        <Title>Perfil</Title>
      </ContainerComponent>
    </Container>
  );
};

export default Profile;
