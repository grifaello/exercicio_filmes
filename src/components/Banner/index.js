import { Text, View, Image } from 'react-native';
import styles from './styles';


export default function Banner(){
    return(
        <View>
        <Text style = {styles.textBanner}> Em cartaz </Text>
        <Image source ={require("../../../imagens/logo.webp")}
        style = {styles.imageBanner}></Image>
        </View>
    );
}