import React from 'react';
import ContainerComponent from '../../../components/container';
import HeaderProfileComponent from './headerProfile';
import { Container, Title } from './styled';
import { Spacer } from '../../../components/spacer';

const Profile: React.FunctionComponent = () => {
  return (
    <Container>
      <ContainerComponent>
        <Title>Perfil</Title>
        <Spacer spacing={3} />
        <HeaderProfileComponent />
      </ContainerComponent>
    </Container>
  );
};

export default Profile;
