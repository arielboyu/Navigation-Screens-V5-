import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'


export default function ExploreScreen() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Explore Screen</Text>
    <Button
      title='Click'
      onPress={() => alert('clickeado')}
    ></Button>
    </View>
  );
}
