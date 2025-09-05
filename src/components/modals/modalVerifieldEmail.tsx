import React from 'react';
import { Text } from 'react-native';
import Modal from 'react-native-modal';
import { styled } from 'styled-components/native';
import { Email, Title } from '../../pages/authentication/styled';
import { SecondaryButton } from '../SendButton';
import { Spacer } from '../spacer';

interface RouteParams {
  value: string;
  destinatary: string;
  onPress: () => void;
  isModalVisible: boolean;
}

const ModalVerifieldEmail: React.FunctionComponent<RouteParams> = ({
  value,
  destinatary,
  onPress,
  isModalVisible,
}) => {
  const verifieldEmail = destinatary === 'verifieldEmail';

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={onPress}>
      <ContainerModal>
        <Title>
          {verifieldEmail ? 'Verificação de e-mail' : 'Redefinição de senha'}
        </Title>

        <Spacer spacing={5} />

        <Text>Um e-mail foi enviado para:</Text>
        <Email>{value}</Email>

        <Spacer spacing={2} />

        <Text>
          {verifieldEmail
            ? 'Siga as instruções para verificar a sua conta.'
            : 'Siga as instruções para redefinir a sua senha.'}
        </Text>

        <Spacer spacing={5} />

        <SecondaryButton onPress={onPress} title="Fechar" />
      </ContainerModal>
    </Modal>
  );
};

export default ModalVerifieldEmail;

const ContainerModal = styled.View`
  background-color: white;
  align-items: center;
  border-radius: 4px;
  padding: 20px;
`;
