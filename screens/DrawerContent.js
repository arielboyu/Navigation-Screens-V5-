import React, {useState} from 'react'
import {View,StyleSheet } from 'react-native'
// Paper
import  {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
 } from 'react-native-paper'
 // Drawer
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function DrawerContent(props){

  const [isDarkTheme,setIsDarkTheme] = useState(false)

  function tooggleTheme(){
    setIsDarkTheme(!isDarkTheme)
  }

    return (
      <View style={{flex:1}} >
        <DrawerContentScrollView {...props} >
          <View style={styles.drawerContent} >
            <View style={styles.userInfoSection} >
                <View style={{flexDirection:'row',marginTop: 15}}>
                    <Avatar.Image
                    source={{
                      uri:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
                    }}
                    size={50}
                    />
                </View>
                <View style={{marginLeft:15, flexDirection:'column'}}>
                  <Title style={styles.title} >
                    Usuario
                  </Title>
                  <Caption style={styles.caption} > @Mail</Caption>
                </View>
                <View style={styles.row} >
                  <View style={styles.section} >
                    <Paragraph style={styles.paragraph} >80</Paragraph>
                    <Paragraph>Seguidores</Paragraph>
                  </View>
                  <View style={styles.section} >
                    <Paragraph style={styles.paragraph} >100</Paragraph>
                    <Paragraph>Siguiendo</Paragraph>
                  </View>
                </View>
            </View>
            <Drawer.Section style={styles.drawerSection} >
            <DrawerItem
              icon={({color,size}) => (
                <Icon
                  name='home-outline'
                  color={color}
                  size={size}
                />
              )}
              label='Inicio'
              onPress={() => {props.navigation.navigate('Home')}}
            />
            <DrawerItem
              icon={({color,size}) => (
                <Icon
                  name='account-outline'
                  color={color}
                  size={size}
                />
              )}
              label='Perfil'
              onPress={() => {props.navigation.navigate('Profile')}}
            />
            <DrawerItem
              icon={({color,size}) => (
                <Icon
                  name='bookmark-outline'
                  color={color}
                  size={size}
                />
              )}
              label='Archivo'
              onPress={() => {props.navigation.navigate('BookmarkScreen')}}
            />
            <DrawerItem
              icon={({color,size}) => (
                <Icon
                  name='account-settings'
                  color={color}
                  size={size}
                />
              )}
              label='Ajustes'
              onPress={() => {props.navigation.navigate('SettingsScreen')}}
            />
            <DrawerItem
              icon={({color,size}) => (
                <Icon
                  name='account-check-outline'
                  color={color}
                  size={size}
                />
              )}
              label='Soporte'
              onPress={() => {props.navigation.navigate('SupportScreen')}}
            />
            </Drawer.Section>
            <Drawer.Section title='Preferencias' >
              <TouchableRipple onPress={() => {tooggleTheme()}} >
                <View style={styles.preference} >
                  <Text> Modo Oscuro</Text>
                  <View pointerEvents='none' >
                  <Switch value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bootomDrawerSection} >
          <DrawerItem
            icon={({color,size}) => (
              <Icon
                name='exit-to-app'
                color={color}
                size={size}
              />
            )}
            label='Cerrar Sesión'
            onPress={() => {}}
          />
        </Drawer.Section>
      </View>

    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });





// Este componente renderiza todos los elementos del drawer
//utilizamos la libreria , instalacion --> npm install react-native-paper
