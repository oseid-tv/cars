import React from 'react';
import {Text, View} from 'react-native';

const Header = ({title}) => {
  const {textStyling, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyling}>{title}</Text>
    </View>
  );
};

const styles = {
  textStyling: {
    fontSize: 22,
  },
  viewStyle: {
    backgroundColor: 'gainsboro',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
};

export default Header;
