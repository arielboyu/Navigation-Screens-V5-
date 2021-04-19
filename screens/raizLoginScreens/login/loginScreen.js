import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LoginScreen = () => {
  return (
      <>
    <View style={styles.container}>
      <ImageBackground
        style={{ width: 360, height: 120, marginTop: "30px" }}
        source={"https://i.ibb.co/Gd5rmBK/vosLogo.png"}
      />
      <View style={styles.containerBox}>
        <Text style={styles.titleText}>Iniciar Sesión</Text>
        <TextInput
		 placeholder="Usuario"
		 autoCapitalize="none"
		 style={{
		 height:48,
		 paddingLeft:5,
		 width:210,
		 backgroundColor:"white",
         borderRadius:'200px',
         fontSize:'20px'
		 }}
		 />
                 <TextInput
		 placeholder="Contraseña"
		 autoCapitalize="none"
		 style={{
		 height:48,
		 paddingLeft:5,
		 width:210,
		 backgroundColor:"white",
         borderRadius:'200px',marginTop:'30px',
         fontSize:'20px'
		 }}
		 />
        <View style={styles.btnContainer}>

       
        <TouchableOpacity style={styles.btnOK}>
          {" "}
          <FontAwesome
            name="check"
            size={20}
            style={{
              textAlign: "center",
              color: "green",
              alignItems: "center",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOK}>
          {" "}
          <FontAwesome
            name="google"
            size={20}
            style={{
              textAlign: "center",
              color: "black",
              alignItems: "center",
            }}
          />
        </TouchableOpacity>
      
        </View>
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
    marginTop: "20%",
    alignItems: "center",
  },
  text: {
    backgroundColor: "#141414",
    justifyContent: "center",
    color: "white",
    marginTop: "20px",
  },
  titleText: {
    justifyContent: "center",
    color: "blue",
    fontSize: "30px",
    marginBottom:'20px'
  },
  btnContainer: {
    marginTop: "40px",
  },

  btnOK: {
    marginBottom: "40px",
    color: "blue",
    backgroundColor: "white",
    fontSize: "30px",
    borderRadius: "30px",
    width: "40px",
  },
});

export default LoginScreen;
/*======================Paquetes======================  */
//  npm i react-native-vector-icons
