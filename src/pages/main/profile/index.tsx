import React from 'react';
import ActionCard from './components/actionCard';
import HeaderProfileComponent from './components/headerProfile';
import { Container } from './styled';
import ContainerComponent from '../../../components/container';

const Profile: React.FunctionComponent = () => {
  return (
    <Container>
      <HeaderProfileComponent />
      <ContainerComponent>
        <ActionCard />
      </ContainerComponent>
    </Container>
  );
};

export default Profile;
