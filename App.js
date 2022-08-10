import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView, Image } from 'react-native';

export default function App() {
  return (
  <ScrollView style={styles.container}>
    <View style={{flexDirection:"row",flexWrap:"wrap", justifyContent:"space-between", paddingTop:"30px"}}>
      <Image style={{height:20, width:20, marginLeft:"20px"}} source={require("./assets/gback.png")}/>
      <Image style={{height:20, width:20, marginRight:"20px"}} source={require("./assets/gmenu.png")}/>
    </View>
    <View style={{flexDirection:"row", paddingTop:"40px"}}>
        <View style={{flexDirection:"column"}}>
            <Text style={{color:"#B4B4B4", fontSize:18, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"20px"}}>Your Cards</Text>
                <Text style={{ color:"#B4B4B4", fontSize:12, fontFamily:"Montserrat", marginLeft:"20px"}}>You have 1 active card</Text>
        </View>
            <View>
            <Image style={{height:50, width:50, margin:"right", marginLeft:"155px"}} source={require("./assets/add.png")}/>
            </View>
    </View>
    <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", paddingTop:"30px", align:"center"}}>
    <Image style={{height:200, width:290, margin:"auto"}} source={require("./assets/card.png")}/>
    </View>

     <View style={{flexDirection:"row"}}>
         <Text style={{color:"#B4B4B4", fontSize:14, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"20px"}}>Recent transactions</Text>
     </View>

      <View style={styles.section}>
        <View>
             <Image style={{height:30, width:30, margin:"left", marginLeft:"20px"}} source={require("./assets/burger.png")}/>
        </View>
            <View style={{flexDirection:"column"}}>
              <Text style={{color:"#B4B4B4", fontSize:14, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"20px"}}>KFC</Text>
              <Text style={{color:"#B4B4B4", fontSize:12, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"20px"}}>June 28</Text>
            </View>
              <View>
                <Text style={{color:"#B4B4B4", fontSize:10, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"160px"}}>-$2.00</Text>
              </View>
      </View>

    <View style={styles.section}>
            <View>
                 <Image style={{height:30, width:30, margin:"left", marginLeft:"20px"}} source={require("./assets/paypal.png")}/>
            </View>
                <View style={{flexDirection:"column"}}>
                  <Text style={{color:"#B4B4B4", fontSize:14, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"20px"}}>Paypal</Text>
                  <Text style={{color:"#B4B4B4", fontSize:12, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"20px"}}>June 28</Text>
                </View>
                  <View>
                    <Text style={{color:"#B4B4B4", fontSize:10, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"160px"}}>-$120.00</Text>
                  </View>
          </View>
       <View style={styles.section}>
               <View>
                    <Image style={{height:30, width:30, margin:"left", marginLeft:"20px"}} source={require("./assets/tire.png")}/>
               </View>
                   <View style={{flexDirection:"column"}}>
                     <Text style={{color:"#B4B4B4", fontSize:14, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"20px"}}>Car Repair</Text>
                     <Text style={{color:"#B4B4B4", fontSize:12, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"20px"}}>Aug 12</Text>
                   </View>
                     <View>
                       <Text style={{color:"#B4B4B4", fontSize:10, fontFamily:"Montserrat", fontWeight:"bold", marginLeft:"130px"}}>-$250.00</Text>
                     </View>
             </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12171a",
    padding: 30
  },
  section:{
  flexDirection:"row",
  backgroundColor:"#333333",
  paddingTop:"30px",
  shadowColor:"black",
  marginTop:"20px",
  width:350,
  height:80,
  borderRadius:30,

  }

});
