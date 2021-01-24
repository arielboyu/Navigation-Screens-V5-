import 'react-native-gesture-handler' //  1° importamos gesture handler
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
   } from 'react-native'
import { NavigationContainer } from '@react-navigation/native' //importamos e instalamos navigation NavigationContainer
import { createStackNavigator } from '@react-navigation/stack'//importamos e instalamos navigationStack


// este es el componente de pantalla principal,(recibe como parametro navigation)
// renderiza un boton que nos dirigira a la pantalla indicada con el comando navigation.navigate('Pantalla')
function HomeScreen({navigation}) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Pantalla de Inicio</Text>
    <Button
      title='Ir a la pantalla detalles'
      onPress={() => navigation.navigate('Details')}
    ></Button>
    </View>
  );
}

function DetailScreen({navigation}) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Pantalla detalles</Text>
    <Button
    // metodo push redirige a misma pantalla
      title='Ir a la pantalla detalles... nuevamente'
      onPress={() => navigation.push('Details')}
    ></Button>
    <Button
      title='Ir a la pantalla principal'
      onPress={() => navigation.navigate('Home')}
    ></Button>
    <Button
    // vuelve a la pantalla anterior
      title='Go Back'
      onPress={() => navigation.goBack()}
    ></Button>
    <Button
    // ir a pantalla principal
      title='ir a la primer pantalla'
      onPress={() => navigation.popToTop()}
    ></Button>
    </View>
  );
}


// para poder utilizar  createStackNavigator lo guardamos en stack
const Stack = createStackNavigator();


// Este es nuestro componente principal lo envolvemos en <NavigationContainer>
// Luego utilizamos el <Stack.Navigator> para declarar las pantallas
// usamos <Stack.Screen> donde declaramos el nombre de la pantalla y el componente a renderizar
// podemos agregar estilos con el comando "screenOptions"
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle:{
      backgroundColor:'green',
    },
    headerTintColor:'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
    }} >
      <Stack.Screen name="Home" component={HomeScreen}
      options={{title:'Inicio'}}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


// comandos para instalacion de paquetes necesarios -->
// navigation V5 :
// 1° npm install @react-navigation/native
// 2° expo install react-native-gesture-handler
// react-native-reanimated
// react-native-screens
// react-native-safe-area-context
// @react-native-community/masked-view
// 3° npm install @react-navigation/stack
// !! importante si se traba el npm utilizar el comando npm cache clean --force
// documentacion https://reactnavigation.org/docs/
