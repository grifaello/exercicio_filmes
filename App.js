import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
export default function App() {
  return (
    <View style={styles.container}>

      {/* inicio da header*/}
      <View style = {styles.viewHeader}>
      <Feather name="menu" size ={24} color="black" />
      <Text style = {styles.textHeader}> TECFILMES </Text>
      <TouchableOpacity>
      
      </TouchableOpacity>
      </View>

  {/* inicio da barra de pesquisa*/}
  <View style = {styles.containerSearch}>
    <TextInput
    placeholder='digite o filme que deseja buscar'
      
    ></TextInput>



</View>

    


      
      {/* inicio do banner*/}
    
    
    
    

    
    </View>
  );
}

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
},



}
)
