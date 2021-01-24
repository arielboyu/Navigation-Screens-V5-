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
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer' //instalamos e importamos el drawer

//Componentes
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailsScreen'

//native icons
import Icon from 'react-native-vector-icons/Ionicons'


const DetailsStack = createStackNavigator()
const HomeStack = createStackNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
//implementamos el Drawer

function HomeStackScreen({navigation}) {
  return (
  <HomeStack.Navigator screenOptions={{
      headerStyle:{
      backgroundColor:'green',
    },
    headerTintColor:'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
    }} >
      <HomeStack.Screen name="Home" component={HomeScreen}
      options={{
        title:'Inicio',
        headerLeft: () => (
          <Icon.Button
          name='menu'
          size={22}
          backgroundColor='#009387'
          // agregamos el boton de menu en el encabezado que permite abrir el menu
          onPress={() => navigation.openDrawer()}>
          </Icon.Button>
         )
       }} />
    </HomeStack.Navigator>
  )
}


function DetailsStackScreen({navigation}) {
  return (
  <DetailsStack.Navigator screenOptions={{
      headerStyle:{
      backgroundColor:'green',
    },
    headerTintColor:'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
    }} >
      <DetailsStack.Screen name="Details" component={DetailScreen}
      options={{}}
      />
    </DetailsStack.Navigator>
  )
}

//reemplazamos el navegador de pila por el drawer.navigator
export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
       <Drawer.Screen name="Home" component={HomeStackScreen} />
       <Drawer.Screen name="Details" component={DetailsStackScreen} />
     </Drawer.Navigator>
    </NavigationContainer>
  );
}


//separando componentes instalado el native-drawer cajon de bottones desplegable
// paquetes instalados
// npm install --save react-native-vector-icons
// npm install @react-navigation/drawer
