import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import ColorBox from './components/ColorBox';
import ListEx from './components/ListEx';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
