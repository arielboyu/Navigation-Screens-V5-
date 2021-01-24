import React from 'react'
//Material Bottom
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { createStackNavigator } from '@react-navigation/stack'
//native icons
import Icon from 'react-native-vector-icons/Ionicons'
//Componentes
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailsScreen'
import ExploreScreen from './ExploreScreen'
import ProfileScreen from './ProfileScreen'


const DetailsStack = createStackNavigator()
const HomeStack = createStackNavigator()


const Tab = createMaterialBottomTabNavigator()

export default function MainTableScreen(){
   return (
     <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
           <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'notificaciones',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Mi perfil',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explorar',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="aperture" color={color} size={26} />
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
       backgroundColor:'#009387',
     },
     headerTintColor:'white',
     headerTitleStyle: {
       fontWeight: 'bold'
     }
     }} >
       <DetailsStack.Screen name="Details" component={DetailScreen}
       options={{
         headerLeft: () => (
           <Icon.Button
           name='menu'
           size={22}
           backgroundColor='#009387'
           onPress={() => navigation.openDrawer()}>
           </Icon.Button>
          )

       }} />
     </DetailsStack.Navigator>
   )
 }


 //Material-Bottom
 // la función MainTab retorna una serie de bottones envueltos en la etuiqueta </Tab.Navigator>
 // que hacen referencia a los componentes con los screens correspondientes
//paquetes instalados
// npm install @react-navigation/material-bottom-tabs react-native-paper
