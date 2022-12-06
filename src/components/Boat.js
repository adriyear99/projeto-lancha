// Utilidades
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'


export default function Boat({image,name,onPress}) {

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }


    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.foto} source={image}/>
                <Text style={styles.nome}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        width:'100%',
        height:70,
        alignSelf:'flex-start',
        flexDirection:'row',
        backgroundColor:'#E8E8E8',
        borderRadius:20,
        marginVertical:5,
        marginLeft:5,
        alignItems:'center',
        // borderRadius:4,
        // borderColor:'green'
    },

    foto: {
        width:'40%',
        height:'100%',
        borderRadius:20,
        resizeMode:'stretch'
    },

    nome: {
        width:'60%',
        fontFamily:'Montserrat_Bold',
        fontSize:20,
        textAlign:'center'
    }

})