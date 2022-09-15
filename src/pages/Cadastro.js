// Utilidades
import { StyleSheet,Text,TextInput,TouchableOpacity,View } from 'react-native';
import { useState } from 'react';


export default function Cadastro() {

    // Erros de login
    const errors = {
        name: "Informe seu primeiro nome",
        surname: "Informe seu sobrenome",
        username: "Informe seu nome de usuário",
        email: "Informe seu e-mail",
        password: "Informe sua senha",
        confirmPassword: "Confirme sua senha"
    }

    // Set State
    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    
    const [invalidName,setInvalidName] = useState(false)
    const [invalidSurname,setInvalidSurname] = useState(false)
    const [invalidUsername,setInvalidUsername] = useState(false)
    const [invalidEmail,setInvalidEmail] = useState(false)
    const [invalidPassword,setInvalidPassword] = useState(false)
    const [invalidConfirmPassword,setInvalidConfirmPassword] = useState(false)
    const [differentPassword,setDifferentPassword] = useState(false)
    
    const [usuarios,setUsuarios] = useState([])

    /**
     * Valida o formulário antes de enviar os dados
     * @param {*} e 
     */
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(name.length < 6){
            setInvalidName(true)
        }

        if(surname.length < 6){
            setInvalidSurname(true)
        }

        if(username.length < 6){
            setInvalidUsername(true)
        }

        if(email.length < 6){
            setInvalidEmail(true)
        }

        if(password.length < 6){
            setInvalidPassword(true)
        }

        if(confirmPassword.length < 6){
            setInvalidConfirmPassword(true)
        }

        if(password != confirmPassword){
            setDifferentPassword(true)
        }

    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>

            <TextInput
                placeholder={"Nome"}
                placeholderTextColor={!invalidName ? 'black' : 'white'}
                style={[styles.input,(!invalidName ? styles.right : styles.wrong)]}
                onChangeText={setName}
                value={name}
            />
            {invalidName && <Text style={styles.labelError}>{errors.name}</Text>}

            <TextInput
                placeholder={"Sobrenome"}
                placeholderTextColor={!invalidSurname ? 'black' : 'white'}
                style={[styles.input,(!invalidSurname ? styles.right : styles.wrong)]}                
                onChangeText={setSurname}
                value={surname}
            />
            {invalidSurname && <Text style={styles.labelError}>{errors.surname}</Text>}

            <TextInput
                placeholder={"Nome de usuário ou apelido"}
                placeholderTextColor={!invalidUsername ? 'black' : 'white'}
                style={[styles.input,(!invalidUsername ? styles.right : styles.wrong)]}                
                onChangeText={setUsername}
                value={username}
            />
            {invalidUsername && <Text style={styles.labelError}>{errors.username}</Text>}

            <TextInput
                placeholder={"E-mail"}
                placeholderTextColor={!invalidEmail ? 'black' : 'white'}
                style={[styles.input,(!invalidEmail ? styles.right : styles.wrong)]}                
                onChangeText={setEmail}
                value={email}
            />
            {invalidEmail && <Text style={styles.labelError}>{errors.email}</Text>}

            <TextInput
                placeholder={"Senha"}
                placeholderTextColor={!invalidPassword ? 'black' : 'white'}
                style={[styles.input,(!invalidPassword ? styles.right : styles.wrong)]}                
                onChangeText={setPassword}
                value={password}
            />
            {invalidPassword && <Text style={styles.labelError}>{errors.password}</Text>}

            <TextInput
                placeholder={"Confirmar Senha"}
                placeholderTextColor={!invalidConfirmPassword ? 'black' : 'white'}
                style={[styles.input,(!invalidConfirmPassword ? styles.right : styles.wrong)]}                
                onChangeText={setConfirmPassword}
                value={confirmPassword}
            />
            {invalidConfirmPassword && <Text style={styles.labelError}>{errors.confirmPassword}</Text>}
            {differentPassword && <Text style={styles.labelError}>{errors.differentPassword}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
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
        marginBottom:8,
        color:'#121212',
        fontWeight:'bold'
    },

    input: {
        width:'60%',
        height:30,
        backgroundColor: '#fff',
        paddingHorizontal:8,
        marginBottom:4,
        borderWidth:2,
        borderRadius:4
    },  

    right: {
        backgroundColor:'white',
        borderColor:'black'
    },

    wrong: {
        backgroundColor:'red',
        borderColor: 'white'
    },

    button: {
        width: '40%',
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
        alignSelf: 'center',
        color: '#ff375b',
        fontFamily:'Montserrat_700Bold',
        marginBottom: 8,
    }
})