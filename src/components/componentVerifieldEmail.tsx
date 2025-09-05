/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Alert, View } from 'react-native';
import { styled } from 'styled-components/native';
import { AuthContext } from '../contexts/auth.context';
import ContainerComponent from './container';
import ModalVerifieldEmail from './modals/modalVerifieldEmail';
import { PrimaryButton } from './SendButton';
import { Spacer } from './spacer';

interface IProps {
  email: string;
  title: string;
  text: string;
}

const ComponentVerifielEmail: React.FunctionComponent<IProps> = ({
  email,
  title,
  text,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { handleVerifieldEmail } = useContext(AuthContext);

  const verifieldEmail = async () => {
    await handleVerifieldEmail()
      .then(() => setIsModalVisible(!isModalVisible))
      .catch(() => Alert.alert('Tente novamente em alguns instantes'));
  };

  const modalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ContainerComponent>
      <TitleDashboard>{title}</TitleDashboard>
      <Spacer spacing={4} />
      <Title style={{ textAlign: 'center' }}>{text}</Title>
      <Spacer spacing={15} />
      <View style={{ width: '50%', margin: 'auto' }}>
        <PrimaryButton onPress={verifieldEmail} title="Verificar e-mail" />
      </View>

      {isModalVisible && (
        <ModalVerifieldEmail
          destinatary="verifieldEmail"
          value={email}
          onPress={modalVisible}
          isModalVisible={isModalVisible}
        />
      )}
    </ContainerComponent>
  );
};

export default ComponentVerifielEmail;

const TitleDashboard = styled.Text`
  margin: 24px 0;
  text-align: center;
`;

const Title = styled.Text`
  text-align: center;
`;
