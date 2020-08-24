import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ListEx from '../components/ListEx';

const ColorPalette = ({}) => (
  <SafeAreaView>
    <View style={styles.container}>
      <ListEx />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  container: {
    paddingTop: 40,
    paddingHorizontal: 18,
  },

  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  blue: {
    backgroundColor: 'blue',
  },

  cyan: {
    backgroundColor: 'darkcyan',
  },

  orange: {
    backgroundColor: 'darkorange',
  },

  magenta: {
    backgroundColor: 'darkmagenta',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorPalette;
