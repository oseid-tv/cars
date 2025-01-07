import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  const {textStyling, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyling}>Cars</Text>
    </View>
  );
};

const styles = {
  textStyling: {
    fontSize: 22,
  },
  viewStyle: {
    backgroundColor: 'grey',
  },
};

export default Header;
