import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')}>
    <Text>Solarized</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
