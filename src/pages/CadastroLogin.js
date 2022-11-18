// Utilidades
import { View,Text,StyleSheet } from 'react-native'
import CustomButton from '../components/CustomButton'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'


export default function CadastroLogin({navigation}) {

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }
    
    // Renderizar componente
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Boatz</Text>
            <CustomButton 
                text='Novo usuário' 
                onPress={()=> navigation.navigate("Pessoa ou Empresa")}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text='Já tenho conta' 
                onPress={()=> navigation.navigate("Login")}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
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

    title: {
        fontSize:40,
        color:'#121212',
        fontFamily: 'Montserrat_Bold'
    },

    extra: {
        backgroundColor:'green',
        width:100
    }

})