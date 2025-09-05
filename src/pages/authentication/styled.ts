import { styled } from 'styled-components/native';
import theme from '../../styles/theme';

export const Title = styled.Text`
  margin-bottom: 12px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 15px;
`;

export const Email = styled.Text`
  font-weight: 600;
  font-size: 15px;
  color: ${theme.colors.golden};
`;

export const Authentication = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const RecoverPassword = styled.Text`
  color: ${theme.colors.darkText};
  font-size: 14px;
  text-decoration: underline;
  text-align: right;
`;

export const ContainerSwitch = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextSwitch = styled.Text`
  margin-left: 8px;
  color: ${theme.colors.darkText};
`;
