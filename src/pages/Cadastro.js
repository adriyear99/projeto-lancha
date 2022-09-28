// Utilidades
import { StyleSheet,Text,TextInput,TouchableOpacity,View } from 'react-native'
import { useState,useContext } from 'react'
import { CheckBox } from 'react-native-elements'

// Componentes
import CustomButton from '../components/CustomButton'
import SocialButton from '../components/SocialButton'

// Expo Icons
import { AntDesign } from '@expo/vector-icons'

// Variáveis globais
import AppContext from '../components/AppContext'


export default function Cadastro({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

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

    const [receiveNewsletter,setReceiveNewsletter] = useState(false);
    
    const [usuarios,setUsuarios] = useState([])

    /**
     * Valida o formulário antes de enviar os dados
     * @param {*} e 
     */
    const handleSubmit = async (e) => {
        e.preventDefault()

        // if(name.length < 6){
        //     setInvalidName(true)
        // }

        // if(email.length < 6){
        //     setInvalidEmail(true)
        // }

        // if(password.length < 6){
        //     setInvalidPassword(true)
        // }

        // if(password != confirmPassword){
        //     setDifferentPassword(true)
        // }

        navigation.navigate("Home")
    }

    return (

        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Tela Inicial")}>
                    <AntDesign name="close" size={24} color="black"/>
                </TouchableOpacity>
                <Text style={styles.title}>Criar Conta</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.link}>Login</Text>                
                </TouchableOpacity>
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

            <CustomButton 
                text='Cadastrar' 
                onPress={handleSubmit}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />

            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#fff"
                backgroundColor="#de4d41"
                onPress={()=> console.log("teste")}
            />

            <View style={styles.novidadesContainer}>
                <CheckBox
                    title="Eu gostaria de receber as novidades via E-mail"
                    style={styles.checkbox}
                    checked={receiveNewsletter}
                    onPress={() => setReceiveNewsletter(!receiveNewsletter)}
                />
            </View>

        </View>
    )
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
        marginBottom:8,
        color:'#121212',
        fontWeight:'bold'
    },

    link: {
        color: 'blue',
    },

    input: {
        width:'90%',
        height:40,
        paddingHorizontal:8,
        marginBottom:8,
        borderWidth:2,
        borderRadius:6
    },

    flexContainer: {
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10
        // borderWidth:2,
        // borderColor:'blue'
    },

    novidadesContainer: {
        flexDirection:'row',
        marginTop:10,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
    },

    checkbox: {
        backgroundColor:'green',
        color:'red'
    },

    right: {
        backgroundColor:'#efeff5',
        borderColor:'black'
    },

    wrong: {
        backgroundColor:'#9bb9c7',
        borderColor: '#4B7E94'
    },

    button: {
        width: '60%',
        height: 50,
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

    labelError: {
        alignSelf: 'center',
        color: '#ff375b',
        fontFamily:'Montserrat_700Bold',
        marginBottom: 8,
    }
})