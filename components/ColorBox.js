import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = ({colorName, color}) => {
  const boxColor = {
    backgroundColor: color,
  };
  const textStyle = {
    color:
      parseInt(color.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textStyle]}>{colorName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  magenta: {
    backgroundColor: 'darkmagenta',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
