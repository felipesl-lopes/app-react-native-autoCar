import React, { useRef, useState } from 'react';
import { FlatList, FlatListProps, View, ViewToken } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { styled } from 'styled-components/native';
import Item from './item';
import Pagination from './pagination';

interface IProps {
  data: { id: string; uri: string }[];
  onPress: () => void;
}

const CarouselCars: React.FunctionComponent<IProps> = ({
  data,
  onPress,
  ...otherProps
}) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  // const onScrollHandler = useAnimatedScrollHandler({
  //   onScroll: e => {
  //     scrollX.value = e.contentOffset.x;
  //   },
  // });

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <View>
      <FlatListCars
        {...otherProps}
        data={data}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        renderItem={({ item }) => <Item data={item} onPress={onPress} />}
      />
      {data.length !== 1 && (
        <Pagination
          items={data}
          scrollX={scrollX}
          paginationIndex={paginationIndex}
        />
      )}
    </View>
  );
};

export default CarouselCars;

const FlatListCars = styled(
  FlatList as new (
    props: FlatListProps<{ id: string; uri: string }>,
  ) => FlatList<{ id: string; uri: string }>,
)``;
