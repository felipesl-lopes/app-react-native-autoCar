import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styled } from 'styled-components/native';
import { AuthContext } from '../../../../contexts/auth.context';
import theme from '../../../../styles/theme';

const HeaderProfileComponent: React.FunctionComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <ComponentImage>
        {!user?.urlPhoto ? (
          <Ionicons name="person-outline" size={40} />
        ) : (
          <Image src={user.urlPhoto} />
        )}
      </ComponentImage>

      <Name>{user?.name}</Name>

      <TextUser>{user?.email}</TextUser>

      {user?.whatsapp ? (
        <TextUser>
          {`(${user.whatsapp.slice(0, 2)}) ${user.whatsapp.slice(
            2,
            7,
          )}-${user.whatsapp.slice(7, 12)}`}{' '}
        </TextUser>
      ) : (
        <TextUser>Adicione seu telefone</TextUser>
      )}

      {user?.city ? (
        <TextUser>
          {user.uf}, {user.city}
        </TextUser>
      ) : (
        <TextUser>Adicione seu endereço</TextUser>
      )}
    </Container>
  );
};

export default HeaderProfileComponent;

const Container = styled.View`
  padding: 12px;
  align-items: center;
  background-color: ${theme.colors.blue};
`;

const ComponentImage = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 100px;
  width: 90px;
  height: 90px;
  align-items: center;
  justify-content: center;
  margin: 8px 16px 16px;
`;

const Image = styled.Image`
  object-fit: cover;
  border-radius: 100px;
  width: 90px;
  height: 90px;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 8px;
`;

const TextUser = styled.Text`
  margin-bottom: 4px;
  text-align: center;
`;
