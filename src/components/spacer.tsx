import React from 'react';
import { View } from 'react-native';

interface IProps {
  spacing: number;
}

export const Spacer: React.FunctionComponent<IProps> = ({ spacing }) => {
  return <View style={{ marginBottom: spacing * 4 }} />;
};
