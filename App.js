import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  } from 'react-native'
// native-navigation
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
//Componentes
import MainTabScreen from './screens/MainTabScreen'
import  DrawerContent  from './screens/DrawerContent'
import  SupportScreen  from './screens/SupportScreen'
import SettingsScreen from './screens/SettingsScreen'
import BookmarkScreen from './screens/BookmarkScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
       <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
       <Drawer.Screen name="SupportScreen" component={SupportScreen} />
       <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
       <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
     </Drawer.Navigator>
    </NavigationContainer>
  )
}
