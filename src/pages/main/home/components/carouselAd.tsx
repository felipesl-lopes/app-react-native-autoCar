import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  FlatListProps,
  View,
  ViewToken,
} from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { styled } from 'styled-components/native';
import Pagination from '../../../../components/carouselCars/pagination';
import { ISliders_Home } from '../../../../interface/car';
import axiosService from '../../../../services/api';
import theme from '../../../../styles/theme';

const CarouselAd: React.FunctionComponent = () => {
  const [sliders, setSliders] = useState<ISliders_Home[]>([]);

  useEffect(() => {
    (async () => {
      await axiosService.get('/firestore/sliders').then(({ data }) => {
        let list = [] as ISliders_Home[];
        setSliders([]);
        data.forEach((doc: ISliders_Home) => {
          list.push({
            route: doc.route,
            url: doc.url,
            color: doc.color,
          });
        });
        setSliders(list);
      });
    })();
  }, []);

  return (
    <View>
      <Carousel data={sliders} onPress={() => {}} />
    </View>
  );
};
export default CarouselAd;

////////////////////////////////////////////////

interface IPropsCarousel {
  data: ISliders_Home[];
  onPress: () => void;
}

const Carousel: React.FunctionComponent<IPropsCarousel> = ({
  data,
  onPress,
}) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

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
        data={data}
        keyExtractor={item => item.url}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        renderItem={({ item }) => <Item data={item} onPress={onPress} />}
      />
      {data.length !== 1 && (
        <Pagination
          items={
            data.map((item, index) => ({
              id: index.toString(),
              uri: item.url,
            })) || []
          }
          scrollX={scrollX}
          paginationIndex={paginationIndex}
        />
      )}
    </View>
  );
};

const FlatListCars = styled(
  FlatList as new (
    props: FlatListProps<ISliders_Home>,
  ) => FlatList<ISliders_Home>,
)``;

////////////////////////////////////////////////

interface IPropsItem {
  data: ISliders_Home;
  onPress: () => void;
}

const Item: React.FunctionComponent<IPropsItem> = ({ data, onPress }) => {
  const { width } = Dimensions.get('screen');

  return (
    <Container
      activeOpacity={1}
      style={{ width: width }}
      id={data.url}
      onPress={onPress}
    >
      <Image source={{ uri: data.url }} resizeMode="contain" />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${theme.colors.blue};
  padding: 0 12px;
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
`;
