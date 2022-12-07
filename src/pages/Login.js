// Utilidades
import { Text, TextInput, StyleSheet, TouchableOpacity, View, Button} from 'react-native'
import { useState, useRef,   useContext  } from 'react'

//import * as Google from 'expo-auth-session/providers/google';
//import GoogleButton from 'react-google-button'
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

// Variáveis globais
import AppContext from '../components/AppContext'

// Componentes
import CustomButton from '../components/CustomButton'
import SocialButton from '../components/SocialButton'

// Autenticacao
WebBrowser.maybeCompleteAuthSession();


export default function Login({ navigation }) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    /*
    //Autenticacao
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '192988181548-40l8e2h22lc3fsog7augfocd5mnc8c06.apps.googleusercontent.com',
        webClientId: '192988181548-40l8e2h22lc3fsog7augfocd5mnc8c06.apps.googleusercontent.com',
    });
*/
/*
    async function loadProfile(response) {
        const authentication = response?.authentication;
        const token = authentication?.accessToken;
        console.log(token);
        const data_01 = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
        const userInfo = await data_01.json();

        console.log('###User data###');
        console.log(userInfo);
        
        global.setUserName(userInfo?.given_name);
        global.setUserPicture(userInfo?.picture);
        
        navigation.navigate("Home")
    }
*/
    async function handleSignIn(){
        const CLIENT_ID = '192988181548-gf4n6icnpf32c5a3ibqdiociu15pq8qv.apps.googleusercontent.com';
        const REDIRECT_URI = 'https://auth.expo.io/@fabiotepe/projetolancha';
        const RESPONSE_TYPE = 'token';
        //const SCOPE = encondeURI(`profile email`);

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=profile%20email`;
        const response = await AuthSession.startAsync({authUrl});
        //console.log(response);

        if (response?.type === 'success') {
            console.log('response---------------');
            console.log(response);
            //const { authentication } = response;
            //console.log(authentication?.accessToken);
            const params = response?.params;
            console.log('param---------------');
            console.log(params);
            //navigation.navigate("Configurações");
            const authentication = params?.access_token;
            console.log('authentication---------------');
            console.log(authentication);
            const token = authentication;
            console.log('token---------------');
            console.log(token);
            const data_01 = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
            const userInfo = await data_01.json();
            console.log('---------------');
            console.log('###User data###');
            console.log(userInfo);
            
            global.setUserName(userInfo?.given_name);
            global.setUserPicture(userInfo?.picture);
            global.setEmail(userInfo?.email);

            //navigation.navigate("Configurações")
            navigation.navigate("Home")
        }
        else {
            console.log('Falha');
        }
    }
/*
    // Set State
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [usuarios, setUsuarios] = useState([])
*/



    return <>
        <View style={styles.container}>
            
            {/* <CustomButton
                text='Entrar com Google'
                onPress={handleSignIn}
                style={{ height: 60, width: 300, backgroundColor: '#4B7E94' }}
            /> */}

            <SocialButton
                buttonTitle="Entrar com Google"
                btnType="google"
                color="#fff"
                backgroundColor="#de4d41"
                onPress={handleSignIn}
            />

        </View>

    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4B7E94',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    icon: {
        alignSelf: 'center'
    },

    title: {
        fontSize: 34,
        marginBottom: 20,
        color: 'white',
        fontWeight: 'bold'
    },

    input: {
        width: '90%',
        height: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        marginBottom: 8,
        borderWidth: 2,
        borderRadius: 6
    },

    right: {
        backgroundColor: 'white',
        borderColor: 'black'
    },

    wrong: {
        backgroundColor: '#9bb9c7',
        borderColor: '#4B7E94'
    },

    button: {
        width: '60%',
        height: 40,
        backgroundColor: '#4B7E94',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 50
    },

    button2: {
        backgroundColor: '#BDBDBD'
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },

    labelError: {
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8
    },

    textLink: {
        fontSize: 18,
        color: '#4B7E94'
    },

    extra: {
        backgroundColor: 'green',
        width: 100
    }
})