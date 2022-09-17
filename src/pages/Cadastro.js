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

            {/* Inputs de nome e sobrenome em linha */}
            <View style={styles.flexContainer}>
                <TextInput
                    placeholder={"Nome"}
                    placeholderTextColor={!invalidName ? 'black' : 'white'}
                    style={[styles.input,styles.inputSmaller,(!invalidName ? styles.right : styles.wrong)]}
                    onChangeText={setName}
                    value={name}
                />
                <TextInput
                    placeholder={"Sobrenome"}
                    placeholderTextColor={!invalidSurname ? 'black' : 'white'}
                    style={[styles.input,styles.inputBigger,(!invalidSurname ? styles.right : styles.wrong)]}                
                    onChangeText={setSurname}
                    value={surname}
                />
            </View>
            <View style={styles.errorContainer}>
                <View style={styles.errorSmallerWidth}>
                    {invalidName && <Text style={styles.inlineError}>{errors.name}</Text>}
                </View>
                <View style={styles.errorBiggerWidth}>
                    {invalidSurname && <Text style={styles.inlineError}>{errors.surname}</Text>}
                </View>
            </View>

            {/* Input de nome de usuário */}
            <TextInput
                placeholder={"Nome de usuário ou apelido"}
                placeholderTextColor={!invalidUsername ? 'black' : 'white'}
                style={[styles.input,(!invalidUsername ? styles.right : styles.wrong)]}                
                onChangeText={setUsername}
                value={username}
            />
            {invalidUsername && <Text style={styles.labelError}>{errors.username}</Text>}

            {/* Input de e-mail */}
            <TextInput
                placeholder={"E-mail"}
                placeholderTextColor={!invalidEmail ? 'black' : 'white'}
                style={[styles.input,(!invalidEmail ? styles.right : styles.wrong)]}                
                onChangeText={setEmail}
                value={email}
            />
            {invalidEmail && <Text style={styles.labelError}>{errors.email}</Text>}

            {/* Inputs de senha e confirmar senha em linha */}
            <View style={styles.flexContainer}>
                <TextInput
                    placeholder={"Senha"}
                    placeholderTextColor={!invalidPassword ? 'black' : 'white'}
                    style={[styles.input,styles.inputEqual,(!invalidPassword ? styles.right : styles.wrong)]}                
                    onChangeText={setPassword}
                    value={password}
                />
                <TextInput
                    placeholder={"Confirmar Senha"}
                    placeholderTextColor={!invalidConfirmPassword ? 'black' : 'white'}
                    style={[styles.input,styles.inputEqual,(!invalidConfirmPassword ? styles.right : styles.wrong)]}                
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                />
            </View>
            <View style={styles.errorContainer}>
                <View style={styles.errorEqualWidth}>
                    {invalidPassword && <Text style={styles.inlineError}>{errors.password}</Text>}
                </View>
                <View style={styles.errorEqualWidth}>
                    {invalidConfirmPassword && <Text style={styles.inlineError}>{errors.confirmPassword}</Text>}
                </View>
            </View>
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
        borderWidth:'2px',
        borderColor:'#000',
        width:'100%'
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

    flexContainer: {
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
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