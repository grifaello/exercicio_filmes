import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header';
import Search from './src/components/Search';

export default function App() {
  return (
    <View style={styles.container}>
                {/*Cabeçalho*/}

    <Header></Header>

                {/*Barra de pesquisa*/}

    <Search></Search>
      
                {/* Banner*/}
    
    <Text style = {styles.textBanner}> Em cartaz </Text>
    <Image source ={require("./imagens/cartazlogo.webp")}
    style = {styles.imageBanner}></Image>
    
    

    
    </View>
  );
}

                {/* Propriedades */}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
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