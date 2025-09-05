import React, { useContext } from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import theme from '../styles/theme';
import { AuthContext } from '../contexts/auth.context';

interface IPropsButton extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const PrimaryButton: React.FunctionComponent<IPropsButton> = ({
  title,
  onPress,
  ...otherProps
}) => {
  const { loadingButton } = useContext(AuthContext);

  return (
    <ButtonPrimary onPress={onPress} activeOpacity={0.9} {...otherProps}>
      {loadingButton ? (
        <ActivityIndicator size={30} color={theme.colors.white} />
      ) : (
        <TextButton style={{ color: theme.colors.white }}>{title}</TextButton>
      )}
    </ButtonPrimary>
  );
};

export const SecondaryButton: React.FunctionComponent<IPropsButton> = ({
  title,
  onPress,
  ...otherProps
}) => {
  return (
    <ButtonSecundary onPress={onPress} activeOpacity={0.7} {...otherProps}>
      <TextButton style={{ color: theme.colors.buttonFixed }}>
        {title}
      </TextButton>
    </ButtonSecundary>
  );
};

const ButtonPrimary = styled.TouchableOpacity`
  border-radius: ${theme.pixels.px8};
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  background-color: ${theme.colors.buttonFixed};
`;

const ButtonSecundary = styled.TouchableOpacity`
  height: 32px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  align-self: center;
`;

const TextButton = styled.Text`
  font-weight: 600;
  text-align: center;
  font-size: 16px;
`;
