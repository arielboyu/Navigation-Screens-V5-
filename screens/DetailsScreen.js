import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'


export default function DetailsScreen({navigation}) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Pantalla detalles</Text>
    <View style={{marginTop:20}} >
    <Button
      title='Ir a la pantalla detalles... nuevamente'
      onPress={() => navigation.push('Details')}
    ></Button>
    </View>
    <View style={{marginTop:20}} >
    <Button
      title='Ir a la pantalla principal'
      onPress={() => navigation.navigate('Home')}
    ></Button>
    </View>
    <View style={{marginTop:20}} >
    <Button
      title='Go Back'
      onPress={() => navigation.goBack()}
    ></Button>
    </View>
    </View>
  );
}
