import "react-native-gesture-handler";
import React from "react";

// native-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Componentes
import MainTabScreen from "./screens/MainTabScreen";
import DrawerContent from "./screens/DrawerContent";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";

// import BookmarkScreen from './screens/BookmarkScreen'
import RaizLoginScreen from "./screens/raizLoginScreens/raizLoginScreens";
import ViajeEnProceso from "./screens/inicioDeViajeMain/viajeEnProceso";
const Drawer = createDrawerNavigator();

let user = true;

export default function App() {
  return (
    <NavigationContainer>
      {user !== false ? (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="Proceso" component={ViajeEnProceso} />
          {/* <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> */}
        </Drawer.Navigator>
      ) : (
        <RaizLoginScreen />
      )}
    </NavigationContainer>
  );
}
