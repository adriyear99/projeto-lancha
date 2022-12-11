// Utilidades
import { useContext } from 'react'
import { View,StyleSheet } from 'react-native'
import CustomButton from '../components/CustomButton'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'

// Variáveis globais
import AppContext from '../components/AppContext'

// Cadastro Google
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

// Autenticacao
WebBrowser.maybeCompleteAuthSession();

// API
import axios from 'axios'


export default function PessoaEmpresa({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    const pessoa = () => {
        global.setTipoUsuario("pessoa")
        //handleSignIn()
        navigation.navigate("Home")
    }
    
    const empresa = () => {
        global.setTipoUsuario("empresa")
        //handleSignIn()
        navigation.navigate("Home")
    }

    async function handleSignIn(){
        const CLIENT_ID = '192988181548-gf4n6icnpf32c5a3ibqdiociu15pq8qv.apps.googleusercontent.com';
        const REDIRECT_URI = 'https://auth.expo.io/@fabiotepe/projetolancha';
        const RESPONSE_TYPE = 'token';
        //const SCOPE = encondeURI(`profile email`);

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=profile%20email`;
        const response = await AuthSession.startAsync({authUrl});
        //console.log(response);

        if (response?.type === 'success') {
            // console.log('response---------------');
            // console.log(response);
            //const { authentication } = response;
            //console.log(authentication?.accessToken);
            const params = response?.params;
            // console.log('param---------------');
            // console.log(params);
            //navigation.navigate("Configurações");
            const authentication = params?.access_token;
            // console.log('authentication---------------');
            // console.log(authentication);
            const token = authentication;
            // console.log('token---------------');
            // console.log(token);
            const data_01 = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
            const userInfo = await data_01.json();
            // console.log('---------------');
            // console.log('###User data###');
            // console.log(userInfo);
            
            global.setUserName(userInfo?.given_name);
            global.setUserPicture(userInfo?.picture);

            //navigation.navigate("Configurações")
            navigation.navigate("Home")
        }
        else {
            // console.log('Falha');
        }
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