import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/Ionicons'


const InicioDeViaje = ({navigation}) => {
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
        {/* <Text style={styles.titleText}>Inicio de Viaje </Text> */}
        <ImageBackground
          style={{
            width: 200,
            height: 80,
            marginTop: "30px",
            marginLeft: "80px",
          }}
          source={
            "https://image.freepik.com/vector-gratis/ruta-marcadores-ubicacion-3d-mapa-carreteras-ciudad-concepto-infografia-sistema-navegacion-gps_31949-883.jpg"
          }
        />
        <View style={styles.containerBox}>
          <Text style={styles.textConfirm}>Confirmar inicio de Viaje ?</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
               onPress={() => navigation.navigate('Home')}
           style={styles.btnIniciodeViaje}>
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
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIniciodeViaje}>
            <FontAwesome
              name="close"
              size={40}
              style={{
                textAlign: "center",
                color: "red",
                alignItems: "center",
              }}
            />
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
    marginTop: "6%",
    alignItems: "center",
  },
  text: {
    justifyContent: "center",
    color: "white",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "26px",
  },
  textConfirm: {
    justifyContent: "center",
    color: "white",
    marginTop: "34px",
    marginBottom: "10px",
    fontSize: "26px",
    width:'190px'
  },
  titleText: {
    justifyContent: "center",
    color: "blue",
    fontSize: "33px",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  btnContainer: {
    marginTop: "40px",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnPerfil: {
    marginBottom: "40px",
    color: "blue",
    backgroundColor: "white",
    fontSize: "30px",
    borderRadius: "30px",
    width: "120px",
    textAlign: "center",
  },
  btnIniciodeViaje: {
    marginBottom: "40px",
    color: "blue",
    backgroundColor: "white",
    fontSize: "40px",
    borderRadius: "30px",
    width: "80px",
    marginLeft: "20px",
    height:'46px'
  },
});

export default InicioDeViaje;
/*======================Paquetes======================  */
//  npm i react-native-vector-icons
