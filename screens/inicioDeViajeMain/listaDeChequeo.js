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

const ListaDeChequeo = ({navigation}) => {
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
        {/* <Text style={styles.titleText}>Lista de Chequeo</Text> */}
        <ImageBackground
          style={{
            width: 200,
            height: 180,
            marginTop: "30px",
            marginLeft: "80px",
  
          }}
          source={
            "https://st2.depositphotos.com/1000236/6980/v/600/depositphotos_69806987-stock-illustration-road-infographic.jpg"
          }
        />
        <View style={styles.arrowContainer} >
            <TouchableOpacity style={styles.btnIniciodeViaje}>
            <FontAwesome
              name="arrow-left"
              size={20}
              style={{
                textAlign: "center",
                color: "yellow",
                alignItems: "center",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIniciodeViaje}>
            {" "}
            <FontAwesome
              name="arrow-right"
              size={20}
              style={{
                textAlign: "center",
                color: "yellow",
                alignItems: "center",
              }}
            />
        
          </TouchableOpacity>
          
          </View>
          <Text style={styles.textConfirm}>Elegir Destino</Text>
      
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnIniciodeViaje}>
            {" "}
            <FontAwesome
              name="flag"
              size={40}
              style={{
                textAlign: "center",
                color: "white",
                alignItems: "center",
              }}
            />
          <Text style={styles.btnDestino}>primer destino</Text>
          </TouchableOpacity>
         
          <TouchableOpacity 
            onPress={() => navigation.navigate('Proceso')}
          style={styles.btnIniciodeViaje}>
            {" "}
            <FontAwesome
              name="flag-checkered"
              size={40}
              style={{
                textAlign: "center",
                color: "green",
                alignItems: "center",
              }}
            />
                <Text style={styles.btnDestino} >destino final</Text>
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
  arrowContainer: {
  flexDirection:'row',
marginLeft:'4%',
marginTop:'10px'
      },
  btnDestino: {
color:'white',
width:'60px',
fontSize:'18px'
  },
  text: {
    justifyContent: "center",
    color: "white",

    fontSize: "26px",
  },
  textConfirm: {
    marginTop:'-35px',
    color: "white",
    display:'flex',
marginLeft:'100px',
    fontSize: "26px",
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
    backgroundColor: "transparent",
    fontSize: "30px",
    borderRadius: "30px",
    width: "40px",
    marginLeft: "80px",
    textAlign:'center'
  },
});

export default ListaDeChequeo;
