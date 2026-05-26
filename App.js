import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>

                {/* Cabeçalho*/}
      <View style = {styles.viewHeader}>
      <Feather name="menu" size ={24} color="black" />
      <Text style = {styles.textHeader}> TECFILMES </Text>
      <TouchableOpacity>
      
      </TouchableOpacity>
      </View>


                {/*Barra de pesquisa*/}

  <View style = {styles.containerSearch}>
    <TextInput
    placeholder='Digite o filme que deseja buscar...'
    style = {styles.inputSearch} 
    ></TextInput>
   
   <TouchableOpacity>
    <Feather name="search" size ={24} color="black" />
   </TouchableOpacity>
</View>

    


      
                {/* Banner*/}
    
    <Text style = {styles.textBanner}> Em cartaz </Text>
    <Image source ={require("./imagens/filme_1.jpg")}
    style = {styles.imageBanner}></Image>
    
    

    
    </View>
  );
}

                {/* Propriedades */}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFDD',
    alignItems: "center",
  },

  viewHeader: {
  flexDirection: 'row',
  width: "90%",
  alignItems: 'center',
  marginTop: 10,
  justifyContent:'space-between'
},

textHeader: {
fontSize:25,
color: 'black',
fontWeight: 'bold',
},

containerSearch: {
  marginTop:20,
  width: "90%",
  backgroundColor: 'white',
  boderRadius:5,
  padding:8,
  flexDirection:'row',
  justifyContent: 'space-between'
},

  inputSearch: {
    height:40,
    padding:8,
    width:'100%'

  },

  imageBanner: {

    width: '90%',
    height: 200,
    marginTop:15,
    borderRadius:10
  },

  textBanner: {
    color: 'black',
    width: '90%',
    fontSize: 30,
    marginTop:15,
    fontWeight: 'bold'
  }
}
)