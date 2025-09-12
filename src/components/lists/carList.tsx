/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import { styled } from 'styled-components/native';
import { ICarList } from '../../interface/car';
import CarCard from './carCard';

interface IProps {
  data: ICarList[];
  message: string;
}

const CarList: React.FunctionComponent<IProps> = ({ data, message }) => {
  return (
    <FlatListCars
      data={data}
      keyExtractor={item => item.id.toString()}
      scrollEnabled={false}
      renderItem={({ item }) => <CarCard data={item} />}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      ListEmptyComponent={<TextEmptyComponent>{message}</TextEmptyComponent>}
    />
  );
};

export default CarList;

const FlatListCars = styled(
  FlatList as new (props: FlatListProps<ICarList>) => FlatList<ICarList>,
)`
  padding-top: 10px;
  background-color: white;
  border-radius: 4px;
  padding: 8px;
`;

const TextEmptyComponent = styled.Text`
  text-align: center;
  margin: 40px;
`;
