import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from 'react-native-vector-icons/Ionicons'


const ViajeEnProceso = () => {
  return (
    <>
      <View style={styles.container}>
      <Icon.Button
          name='menu'
          size={22}
          backgroundColor='#141414'
          onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        <ImageBackground
          style={{ width: 360, height: 120, marginTop: "30px" }}
          source={"https://i.ibb.co/Gd5rmBK/vosLogo.png"}
        />

        {/* <Text style={styles.titleText}>Viaje en Proceso</Text> */}
        <View style={styles.btnMenuChofer}></View>
        <ImageBackground
          style={{
            width: 340,
            height: 140,
            marginTop: "10px",
            marginLeft: "10px",
          }}
          source={"https://i.ibb.co/wWtrcfQ/asdddd.jpg"
          }
        />
        <View style={styles.btnMenuChofer}>
          <TouchableOpacity style={styles.btnIniciodeViaje}>
            {" "}
            <MaterialCommunityIcons
              name="car-3-plus"
              size={50}
              style={{
                marginTop: "40px",

                marginLeft: "-10px",
                color: "white",
              }}
            />
            <Text style={styles.btnMenuText}>km</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIniciodeViaje}>
            {" "}
            <MaterialCommunityIcons
              name="routes"
              size={50}
              style={{
                marginTop: "40px",
                marginLeft: "10px",
                marginLeft: "-80px",
                color: "white",
              }}
            />
            <Text
              style={{
                marginLeft: "-70px",
                color: "white",
              }}
            >
              rutas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnIniciodeViaje}>
            {" "}
            <MaterialCommunityIcons
              name="alert-octagon-outline"
              size={50}
              style={{
                marginTop: "40px",
                marginLeft: "10px",
                marginLeft: "-140px",
                color: "white",
              }}
            />
            <Text
              style={{
                marginLeft: "10px",
                marginLeft: "-128px",
                color: "white",
              }}
            >
              Sos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIniciodeViaje}>
            {" "}
            <MaterialCommunityIcons
              name="car-connected"
              size={50}
              style={{
                marginTop: "40px",
                marginLeft: "-210px",
                color: "white",
              }}
            />
            <Text
              style={{
                marginLeft: "-210px",
                color: "white",
              }}
            >
              eventos
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnIniciodeViaje}>
            {" "}
            <FontAwesome
              name="check"
              size={40}
              style={{
                textAlign: "center",
                color: "green",
                alignItems: "center",
              }}
            />
            <Text style={styles.btnDestino}>Registro de Entrega </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnIniciodeViaje}>
            {" "}
            <AntDesign
              name="close"
              size={40}
              style={{
                textAlign: "center",
                color: "red",
                alignItems: "center",
              }}
            />
            <Text style={styles.btnDestino}>Fin De Viaje</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
  },
  containerBox: {
    backgroundColor: "#141414",

    alignItems: "center",
  },
  btnMenuChofer: {
    flexDirection: "row",
  },
  btnMenuText: {
    color: "white",
  },
  arrowContainer: {
    flexDirection: "row",
    marginLeft: "4%",
    marginTop: "10px",
  },
  btnDestino: {
    color: "white",
    width: "90px",
    fontSize: "20px",
    textAlign: "center",
  },
  text: {
    justifyContent: "center",
    color: "white",

    fontSize: "26px",
  },
  textConfirm: {
    marginTop: "-35px",
    color: "white",
    display: "flex",
    marginLeft: "100px",
    fontSize: "26px",
  },
  titleText: {
    justifyContent: "center",
    color: "blue",
    fontSize: "33px",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  btnContainer: {
    marginTop: "40px",
    flexDirection: "row",
  },
  btnPerfil: {
    marginBottom: "0px",
    color: "blue",
    backgroundColor: "white",
    fontSize: "30px",
    borderRadius: "30px",
    width: "120px",
    textAlign: "center",
  },
  btnIniciodeViaje: {
    marginTop: "-10px",
    color: "blue",
    backgroundColor: "transparent",
    fontSize: "30px",
    borderRadius: "30px",
    width: "80px",
    marginLeft: "60px",
  },
});

export default ViajeEnProceso;
