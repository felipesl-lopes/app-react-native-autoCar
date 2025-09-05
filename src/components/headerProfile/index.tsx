import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styled } from 'styled-components/native';
import { AuthContext } from '../../contexts/auth.context';
import { IScreenNavigation } from '../../interface';
import theme from '../../styles/theme';
import ContainerComponent from '../container';
import { Spacer } from '../spacer';

interface IProps {
  title: string;
  onPress: () => void;
}

const ButtonLinkComponent: React.FunctionComponent<IProps> = ({
  title,
  onPress,
}) => {
  return (
    <ButtonLink activeOpacity={0.8} onPress={onPress}>
      <TextLink>{title}</TextLink>
    </ButtonLink>
  );
};

const HeaderProfileComponent: React.FunctionComponent = () => {
  const { navigate } = useNavigation<IScreenNavigation>();
  const { user, emailVerified } = useContext(AuthContext);

  return (
    <Container>
      <ContainerComponent>
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

        <Spacer spacing={5} />

        <DivSection>
          <DivUser>
            <TitleSection>Atividade</TitleSection>
            <ButtonLinkComponent onPress={() => {}} title="Meus anúncios" />
            <ButtonLinkComponent onPress={() => {}} title="Meus favoritos" />
            <ButtonLinkComponent onPress={() => {}} title="Vender" />
          </DivUser>

          <DivUser>
            <TitleSection>Configurações</TitleSection>
            <ButtonLinkComponent
              onPress={() => {}}
              title="Preferências de notificação"
            />
            <ButtonLinkComponent onPress={() => {}} title="Privacidade" />
            <ButtonLinkComponent onPress={() => {}} title="Alterar senha" />
          </DivUser>
        </DivSection>
      </ContainerComponent>
    </Container>
  );
};

export default HeaderProfileComponent;

const Container = styled.View`
  background-color: ${theme.colors.backgroundPrimary};
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

const TitleSection = styled.Text`
  margin: ${theme.padding.p4} 0 ${theme.padding.p8};
  font-size: ${theme.fontSize.fs16};
`;

const ButtonLink = styled.TouchableOpacity`
  margin-bottom: ${theme.pixels.px4};
  opacity: 1;
`;

const TextLink = styled.Text`
  color: ${theme.colors.blue};
`;
