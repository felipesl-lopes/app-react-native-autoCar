import Ionicons from 'react-native-vector-icons/Ionicons';
import { styled } from 'styled-components/native';
import theme from '../../../styles/theme';

export const Main = styled.View``;

export const SliderCar = styled.Image`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  max-height: 500px;
`;

export const ContainerItem = styled.View`
  padding: 16px 0;
  border-bottom-width: 0.5px;
  border-color: gray;
`;

export const Name = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: ${theme.colors.darkText};
`;

export const Price = styled.Text`
  font-size: ${theme.fontSize.fs24};
  font-weight: 800;
`;

export const Title = styled.Text`
  margin-bottom: ${theme.pixels.px12};
  font-weight: 700;
  font-size: ${theme.fontSize.fs18};
`;

export const ContainerAlign = styled.View`
  flex-direction: row;
  margin-bottom: ${theme.pixels.px4};
`;

export const Text = styled.Text`
  color: ${theme.colors.darkText};
`;

export const Data = styled.Text`
  color: ${theme.colors.darkText};
  font-weight: 700;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${theme.pixels.px40};
  border-radius: ${theme.borderRadius.radius4};
  width: 100%;
  height: 48px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
`;

export const LogoButton = styled(Ionicons)`
  size: 40px;
  font-size: 16px;
`;

export const ButtonShared = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  padding: 8px 8px 8px 0;
`;

export const TextButtonShared = styled.Text`
  margin-left: 8px;
`;
