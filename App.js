import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Banner from './src/components/Banner';
import { FlatList } from 'react-native-web';
import Filmes from './data/filmes'

export default function App() {
  return (
    <View style={styles.container}>
                {/*Cabeçalho*/}

    <Header></Header>

                {/*Barra de pesquisa*/}

    <Search></Search>
      
                {/* Banner*/}
    
    <Banner></Banner>
    <View style = {{width: '90%'}}>
    <FlatList
    horizontal = {True}
    data={Filmes}
    keyExtractor={(item)=> item.id}
    renderItem={({item}) =>(


      <TouchableOpacity>
        <Image style ={{width:80,height: 100}} source={{uri:item.imagem}}></Image>
        <Text> {item.nome} </Text>

      </TouchableOpacity>
    )
    
    }
    />
    </View>
    
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

}
)