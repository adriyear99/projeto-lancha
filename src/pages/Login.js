// Utilidades
import { Text,TextInput,StyleSheet,TouchableOpacity,View } from 'react-native'
import { useState } from 'react'


// Componentes
import CustomButton from '../components/CustomButton'
import SocialButton from '../components/SocialButton'
import LoginComp from '../components/LoginComp';
import Logout from '../components/Logout';

// Expo Icons
import { Feather } from '@expo/vector-icons'

// API
import  api  from '../services/api'

export default function Login({navigation}) {

    // Axios    
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    const body = { user, password };

    // useEffect(() => {
    //     api.get("/api/users").then((response) => {
    //         setUsuarios(response.data)
    //     })
    // },[])

    // Erros de login
    const errors = {
        user: "Informe seu nome de usuário",
        password: "Informe sua senha"
    }

    // Set State
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")

    const [show,toggleIcon] = useState(false)

    const [invalidUser,setInvalidUser] = useState(false)
    const [invalidPassword,setInvalidPassword] = useState(false)
    

    const [usuarios,setUsuarios] = useState([])

    const showPassword = () => {
        toggleIcon(!show)
    }

    /**
     * Valida o formulário antes de enviar os dados
     * @param {*} e 
     */
    const handleSubmit = async (e) => {
        e.preventDefault()

        // if(user.length < 6){
        //     setInvalidUser(true)
        // }
        // if(password.length < 6){
        //     setInvalidPassword(true)
        // }

        // if(!invalidUser && !invalidPassword){
        //     console.log('entrou aqui')
        //     cadastrarUsuario()
        // }

        navigation.navigate("Home")
    }

    /**
     * Envia os dados do usuário para a API
     */
    const cadastrarUsuario = () => {
        // axios.post(`${baseUrl}/api/users`, body, axiosConfig)
        // .then(console.log("Usuário cadastrado com sucesso"))
        // .then(resp => console.log(resp.data))
        // .catch(error => console.log(error.resp));

        // api.post("/api/users",body).then(({data}) => console.log(data))
    }


    return <>
        <View style={styles.container}>
            <Text style={styles.title}>Fazer Login</Text>

            <TextInput
                placeholder={"Nome de usuário ou e-mail"}
                placeholderTextColor={!invalidUser ? 'black' : 'white'}
                style={[styles.input,(!invalidUser ? styles.right : styles.wrong)]}
                onChangeText={setUser}
                value={user}
            />
            {invalidUser && <Text style={styles.labelError}>{errors.user}</Text>}

            <View style={[styles.input,styles.flexContainer]}>
                <TextInput
                    placeholder={"Senha"}
                    placeholderTextColor={!invalidPassword ? 'black' : 'white'}
                    style={(!invalidPassword ? styles.right : styles.wrong)}
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity 
                    activeOpacity={0.5} 
                    style={styles.icon} 
                    onPress={showPassword}
                >
                    {show ? <Feather name="eye" size={24} color="black"/> : 
                            <Feather name="eye-off" size={24} color="black" />}
                </TouchableOpacity>
            </View>
            {invalidPassword && <Text style={styles.labelError}>{errors.password}</Text>}

            <CustomButton 
                text='Entrar' 
                onPress={handleSubmit}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text='Criar Conta' 
                onPress={() => navigation.navigate("Cadastro")}
                style={{ height:60, width:300, backgroundColor:'#BDBDBD' }}
            />

            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#fff"
                backgroundColor="#de4d41"
                onPress={()=> console.log("teste")}
            />

            <TouchableOpacity 
                activeOpacity={0.5} 
                onPress={() => navigation.navigate("Esqueci minha senha")}
                style={{marginTop:16}}>
                <Text style={styles.textLink}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <LoginComp/>
            <Logout/>
        </View>

    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },

    flexContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    icon: {
        alignSelf:'center'
    },

    title: {
        fontSize:34,
        marginBottom:20,
        color:'#121212',
        fontWeight:'bold'
    },

    input: {
        width:'90%',
        height:40,
        backgroundColor: '#fff',
        paddingHorizontal:8,
        marginBottom:8,
        borderWidth:2,
        borderRadius:6
    },  

    right: {
        backgroundColor:'white',
        borderColor:'black'
    },

    wrong: {
        backgroundColor:'#9bb9c7',
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
        fontSize:18,
        color: '#4B7E94'
    },

    extra: {
        backgroundColor:'green',
        width:100
    }
})