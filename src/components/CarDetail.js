import React from 'react';
import {View, Text} from 'react-native';
import Item from './Item';
import ItemSection from './ItemSection';

const CarDetail = ({brand}) => {
  return (
    <Item>
      <ItemSection>
        <Text>{brand.model[0].name}</Text>
      </ItemSection>
    </Item>
  );
};

export default CarDetail;
