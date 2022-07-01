
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { Entypo } from '@expo/vector-icons';
import Home from '../components/Home';
import About from '../components/About';


const Tab=createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    
<Tab.Navigator>


  <Tab.Screen name="Home" component={Home} options={()=>{
    
  }} />
  <Tab.Screen name="About" component={About} />
</Tab.Navigator>


  )
}

export default TabsNavigation