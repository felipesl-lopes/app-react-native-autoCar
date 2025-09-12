/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SharedValue } from 'react-native-reanimated';
import { styled } from 'styled-components/native';

interface IProps {
  items: { id: string; uri: string }[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
}

const Pagination: React.FunctionComponent<IProps> = ({
  items,
  paginationIndex,
  scrollX,
}) => {
  return (
    <Container>
      {items.map((_, index) => {
        return (
          <Dot
            key={index}
            style={{
              backgroundColor: paginationIndex === index ? '#555' : '#bbb',
            }}
          />
        );
      })}
    </Container>
  );
};

export default Pagination;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const Dot = styled.View`
  height: 8px;
  width: 12px;
  border-radius: 4px;
  margin: 0 4px;
`;
