/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import { ICarList } from '../../interface';
import theme from '../../styles/theme';

interface IPropsList {
  data: ICarList;
}

const CarCard: React.FunctionComponent<IPropsList> = ({ data }) => {
  const [loadImg, setLoadImg] = useState<boolean>(true);

  const handleLoadImg = () => {
    setLoadImg(false);
  };

  return (
    <Container>
      <ImageCar
        source={{ uri: data.images }}
        resizeMode="cover"
        onLoad={handleLoadImg}
        // style={{ display: loadImg ? 'none' : 'flex' }}
      />

      {loadImg && <LoadingImg size={'large'} color={theme.colors.golden} />}

      <ContainerText>
        <NameCar>
          {data.name} {data.model}
        </NameCar>
        <Info>
          Ano {data.year} | {data.km} km
        </Info>
        <Price>R${data.price}</Price>
        <Separator />
        <Address>
          {data.city}, {data.uf}
        </Address>
      </ContainerText>
    </Container>
  );
};

export default CarCard;

const Container = styled.View`
  width: 100%;
  border-radius: 2px;
  background-color: ${theme.colors.backgroundSecondary};
`;

const ImageCar = styled.Image`
  width: 100%;
  aspect-ratio: 4/2;
  border-radius: 2px;
`;

const ContainerText = styled.View`
  padding: 8px 12px;
`;

const NameCar = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Info = styled.Text`
  font-size: 13px;
  margin-bottom: 8px;
`;

const Separator = styled.View`
  background-color: #ddd;
  height: 1px;
  width: 100%;
  margin-bottom: 8px;
`;

const Price = styled.Text`
  font-size: 18px;
  color: ${theme.colors.golden};
  font-weight: 800;
  margin-bottom: 8px;
`;

const Address = styled.Text``;

const LoadingImg = styled.ActivityIndicator`
  width: 100%;
  aspect-ratio: 4/2;
`;
