import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'


export default function BookmarkScreen() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Archivos</Text>
    <Button
      title='Click'
      onPress={() => alert('clickeado')}
    ></Button>
    </View>
  );
}
