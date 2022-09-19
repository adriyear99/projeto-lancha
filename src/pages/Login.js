import { Text,TextInput,StyleSheet,TouchableOpacity,View } from 'react-native'
import { useState } from 'react'
import  api  from '../services/api'

export default function Login() {

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

    const [invalidUser,setInvalidUser] = useState(false)
    const [invalidPassword,setInvalidPassword] = useState(false)
    

    const [usuarios,setUsuarios] = useState([])

    /**
     * Valida o formulário antes de enviar os dados
     * @param {*} e 
     */
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(user.length < 6){
            setInvalidUser(true)
        }
        if(password.length < 6){
            setInvalidPassword(true)
        }

        if(!invalidUser && !invalidPassword){
            console.log('entrou aqui')
            cadastrarUsuario()
        }
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

            <TextInput
                placeholder={"Senha"}
                placeholderTextColor={!invalidPassword ? 'black' : 'white'}
                style={[styles.input,(!invalidPassword ? styles.right : styles.wrong)]}
                onChangeText={setPassword}
                value={password}
            />
            {invalidPassword && <Text style={styles.labelError}>{errors.password}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>

    </>
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
        fontSize:34,
        marginBottom:20,
        color:'#121212',
        fontWeight:'bold'
    },

    input: {
        width:'60%',
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
        width: '40%',
        height: 60,
        backgroundColor: '#4B7E94',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 50
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
    }
})