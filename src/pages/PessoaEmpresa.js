// Utilidades
import { View,StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'


export default function PessoaEmpresa({navigation}) {

    global.tipoUsuario = undefined

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    const pessoa = () => {
        global.tipoUsuario = "pessoa"
        console.log(global.tipoUsuario)
        navigation.navigate("Cadastro")
    }
    
    const empresa = () => {
        global.tipoUsuario = "empresa"
        console.log(global.tipoUsuario)
        navigation.navigate("Cadastro")
    }


    // Renderizar componente
    return (
        <View style={styles.container}>
            <CustomButton 
                text='Pessoa' 
                onPress={pessoa}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text='Empresa' 
                onPress={empresa}
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
    }
})