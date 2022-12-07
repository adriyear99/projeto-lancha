// Utilidades
import { View,Text,StyleSheet } from 'react-native'
import CustomButton from '../components/CustomButton'
import SocialButton from '../components/SocialButton'
import { useState,useRef,useEffect,useContext } from 'react'

// Componentes
import Home from './Home'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'

// Variáveis globais
import AppContext from '../components/AppContext'

// Login
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'

// Autenticacao
WebBrowser.maybeCompleteAuthSession()

// API
import axios from 'axios'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'




export default function CadastroLogin({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);
    const [sucessoCadastro, setSucessoCadastro] = useState(false);
    const [sucessoRequisicao, setSucessoRequisicao] = useState(false);
    const [sucessoGetIdPessoa, setSucessoGetIdPessoa] = useState(false);
    const [sucessoAdicionarUser, setSucessoAdicionarUser] = useState(false);
    let local_email = undefined
    let local_nome = undefined
    let local_picture = undefined


    // manda para tela diferente se a pessoa já tiver sido cadastrada
    useEffect(() => {
        // verifica se tem conta
        if(global.temConta == true){
            navigation.navigate("Home")
        } 
        
        if(global.temConta == false){
            getUserId();
            navigation.navigate("Pessoa ou Empresa")
        }
        if(sucessoRequisicao == true && global.email != undefined){
            console.log('Entrou onde nao devia @@@@@@@@@@@@@@@@');
            userExists();
        }
        if(sucessoCadastro == true && global.email != undefined && global.userName != undefined){
            console.log('Finalmente entrou aqui!!!!!!!!!!');
            cadastrarUsuario();
        }
        if(sucessoGetIdPessoa == true){
            insereDadosLogin()
        }
        if(sucessoAdicionarUser == true){
            navigation.navigate("Pessoa ou Empresa")
        }
    }, [global.temConta, global.email, global.userName, sucessoRequisicao, sucessoCadastro,  sucessoGetIdPessoa, sucessoAdicionarUser]);

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    function userExists(){
        const response = axios.get(global.baseURL + '/api/email_usuario', { 
            params: { email: global.email } 
        })
        .then(response => {
            const tamanho = response.data.length
            global.setTemConta(tamanho > 0)
            global.setUsuarioLogado(global.temConta)
        })
        .catch(error => {
            console.log(error);
        })
        
    }

    function cadastrarUsuario(){
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
        console.log(global.userName + '***' + global.userPicture);
 
        let data = JSON.stringify({ 
            nome: global.userName,
            data_nasc: '1990-01-01',
            sexo: "M",
            url_imagem_perfil: global.userPicture
        })
        data = "[" + data + "]";
        console.log(data);
        const url =global.baseURL + '/api/cadastro_pessoa' 
        console.log(url);
        axios.post(url, data,{headers:{"Content-Type" : "application/json"}})
        .then(response => {
            setSucessoRequisicao(true);
            console.log('deu certo mais ou menos !!!!!!!!!');
        })
        .catch(error => {
            console.log(error.response.data + 'deu erro no post!!!!!!!!!!!!!!!!!!!!!!!!!!!');            
        });
    }

    
    function getUserId(){
        console.log('get user id ------------------------------------------------------------------------------')
        const email_user = global.email;
        const url =global.baseURL + '/api/email_usuario'
        let data = JSON.stringify({
            email: email_user
        })
        data = "[" + data + "]";

        axios.get(url, data)
        .then(response => {
            console.log(response)
            let user_id = JSON.response(response.idPessoa);
            console.log(user_id)
            global.setUserId(user_id)
            setSucessoGetIdPessoa(true)
        })
        .catch(error => {
            console.log(error + 'deu erro no get user id!!!!!!!!!!!!!!!!!!!!!!!!!!!');            
        });
        
    }
    
    function insereDadosLogin(){
        console.log('insere dados login *************************************************************')
        const url =global.baseURL + '/api/cadastro_login'
        const username = global.userName
        const email = global.email
        const idPessoa = global.idPessoa
        let data = JSON.stringify({
            usuario: username,
            email: email,
            senha: "senha",
            idPessoa: idPessoa
        })
        data = "[" + data + "]";
        console.log('///////////////////////')
        console.log(data)
        console.log('///////////////////////')
        axios.post(url, data,{headers:{"Content-Type" : "application/json"}})
        .then(response => {
            console.log('login criado !!!!!!!!!');
            sucessoAdicionarUser(true);
        })
        .catch(error => {
            console.log(error.response.data + 'deu erro no post de criacao de login!!!!!!!!!!!!!!!!!!!!!!!!!!!');            
        });
        
    }

    async function handleSignIn(){

        console.log('aqui PRIMEIRO ----------------------------------------------')
        console.log(global.email)
        console.log('aqui ----------------------------------------------')
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
            
            local_nome = userInfo?.given_name;
            local_picture = userInfo?.picture;
            local_email = userInfo?.email;

            global.setUserName(userInfo?.given_name);
            global.setUserPicture(userInfo?.picture);
            global.setEmail(userInfo?.email);
            if(local_email != undefined && local_nome != undefined && local_picture != undefined)
            {   
                console.log('aqui ----------------------------------------------')
                console.log(local_email)
                userExists(true);
            }
            //navigation.navigate("HandleSignIn")

        } else {
            console.log('Falha');
        
        }
    }

    
    // Renderizar componente
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Boatz</Text>
            <SocialButton
                buttonTitle="Entrar com Google"
                btnType="google"
                color="#fff"
                backgroundColor="#de4d41"
                onPress={handleSignIn}
            />
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#4B7E94',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
    },

    title: {
        fontSize:40,
        color:'#121212',
        fontFamily: 'Montserrat_Bold'
    }

})