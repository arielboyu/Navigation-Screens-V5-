import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'


export default function ProfileScreen() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text> Mi Perfil</Text>
    <Button
      title='click'
      onPress={() => alert('clickk')}
    ></Button>
    </View>
  );
}
