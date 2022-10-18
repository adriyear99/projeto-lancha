// Utilidades
import { StyleSheet,Text,View } from 'react-native'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'


export default function Reserva({name}) {

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }


    return (
        <View style={styles.container}>
            <Text style={styles.nome}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width:'90%',
        height:80,
        alignSelf:'center',
        backgroundColor:'#E8E8E8',
        borderRadius:20,
        marginTop:10,
        marginBottom:10,
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