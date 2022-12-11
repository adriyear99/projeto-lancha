// Utilidades
import { StyleSheet,Text,TouchableOpacity,View } from 'react-native'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'


export default function Reserva({name,onPress}) {

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
                <Text style={styles.nome}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        width:'90%',
        height:60,
        alignSelf:'center',
        backgroundColor:'#E8E8E8',
        borderRadius:20,
        marginVertical:5,
        marginLeft:5,
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center'
    },

    nome: {
        width:'60%',
        fontFamily:'Montserrat_Bold',
        fontSize:20,
        textAlign:'center'
    }

})