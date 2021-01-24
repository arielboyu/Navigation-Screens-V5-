import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'


export default function HomeScreen({navigation}) {
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
