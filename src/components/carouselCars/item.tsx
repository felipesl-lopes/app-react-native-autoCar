import React from 'react';
import { Dimensions } from 'react-native';
import { styled } from 'styled-components/native';

interface IProps {
  data: { id: string; uri: string };
  onPress: () => void;
}

const Item: React.FunctionComponent<IProps> = ({ data, onPress }) => {
  const { width } = Dimensions.get('screen');

  return (
    <Container
      activeOpacity={1}
      style={{ width: width }}
      id={data.id}
      onPress={onPress}
    >
      <Image source={{ uri: data.uri }} resizeMode="cover" />
    </Container>
  );
};

export default Item;

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Image = styled.Image`
  width: 100%;
  height: 260px;
`;
