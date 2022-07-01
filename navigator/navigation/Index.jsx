import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import TabsNavigation from './TabsNavigation';
import Books from '../components/Books'
import Contact from '../components/Contact';
import Home from '../components/Home';

const Stack= createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="TabsNavigation">
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Books" component={Books} options={{headerShown:false}}/>
      <Stack.Screen name="Contact" component={Contact} options={{headerShown:false}} />
      <Stack.Screen name="TabsNavigation" component={TabsNavigation} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation