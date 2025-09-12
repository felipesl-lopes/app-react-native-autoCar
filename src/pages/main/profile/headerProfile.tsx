import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styled } from 'styled-components/native';
import { Spacer } from '../../../components/spacer';
import { AuthContext } from '../../../contexts/auth.context';
import { IScreenNavigation } from '../../../interface/navigation';
import theme from '../../../styles/theme';

const HeaderProfileComponent: React.FunctionComponent = () => {
  const { navigate } = useNavigation<IScreenNavigation>();
  const { user, emailVerified } = useContext(AuthContext);

  return (
    <Container>
      <DivSection>
        <ComponentImage>
          {!user?.urlPhoto ? (
            <Ionicons name="person-outline" size={40} />
          ) : (
            <Image src={user.urlPhoto} />
          )}
        </ComponentImage>

        <DivUser>
          <Name>{user?.name}</Name>

          <Spacer spacing={1} />

          <View>
            <TextUser>
              {user?.email}

              <Ionicons
                name="checkmark-circle-outline"
                color={emailVerified ? 'green' : 'red'}
                size={16}
              />
            </TextUser>

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
          </View>

          <ButtonEditInfo onPress={() => navigate('/dashboard')}>
            Editar informações
          </ButtonEditInfo>
        </DivUser>
      </DivSection>
    </Container>
  );
};

export default HeaderProfileComponent;

const Container = styled.View`
  /* background-color: ${theme.colors.backgroundPrimary}; */

border-top-width: 0.5px;
border-bottom-width: 0.5px;
border-color: gray;

  padding: 12px;
`;

const DivSection = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const ComponentImage = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 100px;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
`;

const Image = styled.Image`
  object-fit: cover;
  border-radius: 100px;
  width: 80px;
  height: 80px;
`;

const DivUser = styled.View`
  margin: 0 ${theme.padding.p16};
  flex: 1;
`;

const TextUser = styled.Text`
  margin-bottom: 2px;
`;

const Name = styled.Text`
  font-size: 15px;
  font-weight: 500;
`;

const ButtonEditInfo = styled.Text`
  font-size: ${theme.fontSize.fs14};
  color: ${theme.colors.blue};
`;
