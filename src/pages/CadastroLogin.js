// Utilidades
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

// Fontes
import {
    useFonts, 
    Montserrat_400Regular, 
    Montserrat_700Bold, 
    Montserrat_400Regular_Italic
} from '@expo-google-fonts/montserrat'


export default function CadastroLogin({navigation}) {

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    // Renderizar componente
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rolancha</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pessoa ou Empresa")}>
                <Text style={styles.text}>Novo usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.text}>Já tenho conta</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#fff',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
    },

    button: {
        width: '50%',
        height: 60,
        backgroundColor: '#4B7E94',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        padding:40,
        border:'solid',
        borderRadius: 50
    },

    title: {
        fontSize:40,
        color:'#121212',
        fontFamily: 'Montserrat_Bold'
    },

    text: {
        fontSize:34,
        color:'#fff',
        fontFamily: 'Montserrat_Regular'
    }

})