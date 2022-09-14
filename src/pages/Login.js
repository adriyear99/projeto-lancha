import { Text,TextInput,StyleSheet,TouchableOpacity,View } from 'react-native'
import { useState,useEffect } from 'react'
import  api  from '../services/api'

export default function Login() {

    // Axios    
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    const body = { username, password };

    // useEffect(() => {
    //     api.get("/api/users").then((response) => {
    //         setUsuarios(response.data)
    //     })
    // },[])

    // Erros de login
    const errors = {
        username: "Informe seu nome de usuário",
        password: "Informe sua senha"
    }

    // Set State
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const [invalidUsername,setInvalidUsername] = useState(false)
    const [invalidPassword,setInvalidPassword] = useState(false)

    const [usuarios,setUsuarios] = useState([])

    /**
     * Valida o formulário antes de enviar os dados
     * @param {*} e 
     */
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(username.length < 6){
            setInvalidUsername(true)
        }
        if(password.length < 6){
            setInvalidPassword(true)
        }

        if(!invalidUsername && !invalidPassword){
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
                placeholderTextColor={"#000"}
                style={styles.input}
                onChangeText={setUsername}
                value={username}
            />
            {invalidUsername && <Text style={styles.labelError}>{errors.username}</Text>}

            <TextInput
                placeholder={"Senha"}
                placeholderTextColor={"#000"}
                style={styles.input}
                onChangeText={setPassword}
                value={password}
            />
            {invalidPassword && <Text style={styles.labelError}>{errors.password}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Fazer Login</Text>
            </TouchableOpacity>
        </View>

    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#7191c7',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
    },

    title: {
        fontSize:34,
        marginBottom:34,
        color:'#121212',
        fontWeight:'bold'
    },

    input: {
        width:'100%',
        height:40,
        backgroundColor: '#fff',
        paddingHorizontal:8,
        marginBottom:8,
        borderRadius:4,
        color:'#121212'
    },  

    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#45d800',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
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