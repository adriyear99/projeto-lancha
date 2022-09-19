// Utilidades
import { StyleSheet,Text,TextInput,TouchableOpacity,View } from 'react-native';
import { useState } from 'react';

// Expo Icons
import { AntDesign } from '@expo/vector-icons';


export default function Cadastro({navigation}) {

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
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    
    const [invalidName,setInvalidName] = useState(false)
    const [invalidEmail,setInvalidEmail] = useState(false)
    const [invalidPassword,setInvalidPassword] = useState(false)
    
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
            <View style={styles.flexContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Pessoa ou Empresa")}>
                    <AntDesign name="close" size={24} color="black"/>
                </TouchableOpacity>
                <Text style={styles.title}>Criar Conta</Text>
                <Text style={styles.link}>Login</Text>
            </View>

            <TextInput
                    placeholder={"Nome"}
                    placeholderTextColor={!invalidName ? 'black' : 'white'}
                    style={[styles.input,(!invalidName ? styles.right : styles.wrong)]}
                    onChangeText={setName}
                    value={name}
                />
            {invalidName && <Text style={styles.labelError}>{errors.name}</Text>}

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

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor:'#7191c7',
        backgroundColor:'#fff',
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

    link: {
        color: 'blue',
    },

    input: {
        width:'60%',
        height:40,
        backgroundColor: '#fff',
        paddingHorizontal:8,
        marginBottom:4,
        borderWidth:2,
        borderRadius:6
    },

    flexContainer: {
        flexDirection:'row',
        width:'60%',
        alignItems:'center',
        justifyContent:'space-between'
    },

    inputSmaller: {
        width:'20%',
        marginHorizontal:4
    },

    inputBigger: {
        width:'40%',
    },

    inputEqual: {
        width:'30%',
        marginHorizontal:3
    },

    right: {
        backgroundColor:'white',
        borderColor:'black'
    },

    wrong: {
        backgroundColor:'#ed5c5c',
        borderColor: 'white'
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

    errorContainer: {
        display:'flex',
        flexDirection:'row',
        width:'60%',
        alignItems:'left',
        justifyContent:'left',
    },

    errorSmallerWidth: {
        width:'35%'
    },

    errorEqualWidth: {
        width:'50%'
    },

    errorBiggerWidth: {
        width:'65%'
    },

    labelError: {
        alignSelf: 'center',
        color: '#ff375b',
        fontFamily:'Montserrat_700Bold',
        marginBottom: 8,
    },

    inlineError: {
        alignSelf: 'flex-start',
        color: '#ff375b',
        fontFamily:'Montserrat_700Bold',
        marginBottom: 8,
    }
})