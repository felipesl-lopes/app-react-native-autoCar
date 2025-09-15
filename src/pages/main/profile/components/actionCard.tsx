import React from 'react';
import { styled } from 'styled-components/native';

const ActionCard: React.FunctionComponent = () => {
  return (
    <Container>
      <Card>
        <Text>Informações pessoais</Text>
        <Subtext>Anexe seus documentos e verifique sua identidade.</Subtext>
      </Card>

      <Card>
        <Text>Informações da sua conta</Text>
        <Subtext>Atualize e gerencie suas informações de perfil.</Subtext>
      </Card>

      <Card>
        <Text>Segurança e login</Text>
        <Subtext>Altere sua senha e configure a autenticação da conta.</Subtext>
      </Card>

      <Card>
        <Text>Preferências e notificações</Text>
        <Subtext>Defina alertas, idioma e outras preferências do app.</Subtext>
      </Card>

      <Card>
        <Text>Atividade do usuário</Text>
        <Subtext>Veja seus anúncios, favoritos e histórico de ações.</Subtext>
      </Card>
    </Container>
  );
};

export default ActionCard;

const Container = styled.View``;

const Card = styled.TouchableOpacity`
  background-color: #ddd;
  margin-bottom: 4px;
`;

const Text = styled.Text`
  font-size: 15px;
  margin-bottom: 4px;
`;

const Subtext = styled.Text`
  color: #444;
`;
