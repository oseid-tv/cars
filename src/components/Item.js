import React from 'react';
import {View, Text} from 'react-native';

const Item = () => {
  return <View styles={styles.viewStyle} />;
};

const styles = {
  viewStyle: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    opacity: 0.1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export default Item;
