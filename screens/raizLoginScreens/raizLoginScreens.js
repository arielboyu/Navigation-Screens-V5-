import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../raizLoginScreens/login/loginScreen";

import ViajeEnProceso from '../inicioDeViajeMain/viajeEnProceso';


const RootStack = createStackNavigator();

const RaizLoginScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="Proceso" component={ViajeEnProceso}/>
    </RootStack.Navigator>
);

export default RaizLoginScreen;