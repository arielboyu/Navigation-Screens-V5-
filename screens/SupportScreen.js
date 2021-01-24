import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'


export default function SupportScreen() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Soporte</Text>
    <Button
      title='Click'
      onPress={() => alert('clickeado')}
    ></Button>
    </View>
  );
}
