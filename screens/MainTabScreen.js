import React from 'react'
//Material Bottom
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { createStackNavigator } from '@react-navigation/stack'
//native icons
import Icon from 'react-native-vector-icons/Ionicons'
//Componentes
// import HomeScreen from './HomeScreen'
import DetailScreen from './DetailsScreen'
import ExploreScreen from './ExploreScreen'
import ProfileScreen from './ProfileScreen'
// import InicioDeViaje from "./inicioDeViajeMain/inicioDeViaje"
import ListaDeChequeo from "./inicioDeViajeMain/listaDeChequeo"
import ViajeEnProceso from './inicioDeViajeMain/viajeEnProceso'
import InicioDeViaje from './inicioDeViajeMain/inicioDeViaje'



const DetailsStack = createStackNavigator()
const HomeStack = createStackNavigator()


const Tab = createMaterialBottomTabNavigator()

export default function MainTableScreen(){
   return (
     <Tab.Navigator
      initialRouteName="Home"
      activeColor="blue"
      // style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioDeViaje}
        options={{
          tabBarLabel: 'Inicio',
          tabBarColor: 'white',
          tabBarIcon: ({ color }) => (
           <Icon name="home" color={'black'} size={26} />
          ),
        }}
      />
      <Tab.Screen
       name="Home"
        component={ListaDeChequeo}

        options={{
          tabBarLabel: 'destinos',
          tabBarColor: 'white',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-list" color={'black'} size={26} />
          ),
        }}
      />
            <Tab.Screen
        name="Proceso"
        component={ViajeEnProceso}
        options={{
          tabBarLabel: 'Viaje en Curso',
          tabBarColor: 'white',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="truck-check-outline" color={'black'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
   
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Maps',
          tabBarColor: 'white',
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-maps" color={'black'} size={26} />
          ),
          
        }}
      />
    </Tab.Navigator>
  )
}


 function HomeStackScreen({navigation}) {
   return (
   <HomeStack.Navigator screenOptions={{
       headerStyle:{
       backgroundColor:'#009387',
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
       backgroundColor:'#141414',
     },
     headerTintColor:'blue',
     headerTitleStyle: {
       fontWeight: 'bold'
     }
     }} >
       <DetailsStack.Screen name="Inicio de Viaje" component={DetailScreen}
       options={{
         headerLeft: () => (
           <Icon.Button
           name='menu'
           size={22}
           backgroundColor='#141414'
           onPress={() => navigation.openDrawer()}>
           </Icon.Button>
          )

       }} />
     </DetailsStack.Navigator>
   )
 }





 function DestinosStackScreen({navigation}) {
  return (
  <DestinosStack.Navigator screenOptions={{
      headerStyle:{
      backgroundColor:'#141414',
    },
    headerTintColor:'blue',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
    }} >
      <DestinosStack.Screen name="Destinos" component={ListaDeChequeo}
      options={{
        headerLeft: () => (
          <Icon.Button
          name='menu'
          size={22}
          backgroundColor='#141414'
          onPress={() => navigation.openDrawer()}>
          </Icon.Button>
         )

      }} />
    </DestinosStack.Navigator>
  )
}



 //Material-Bottom
 // la función MainTab retorna una serie de bottones envueltos en la etuiqueta </Tab.Navigator>
 // que hacen referencia a los componentes con los screens correspondientes
//paquetes instalados
// npm install @react-navigation/material-bottom-tabs react-native-paper
