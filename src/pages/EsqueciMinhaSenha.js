// Utilidades
import { StyleSheet,Text,View,TextInput } from 'react-native'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'

export default function EsqueciMinhaSenha() {

    // Erros de login
    const errors = {
        email: "Não foi encontrada conta associada a este e-mail"
    }

    // Set State
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const [invalidEmail,setInvalidEmail] = useState(false)
    const [invalidPassword,setInvalidPassword] = useState(false)

    /**
     * Valida o formulário antes de enviar os dados
     * @param {*} e 
     */
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(email.length < 6){
            setInvalidEmail(true)
        }

        if(password.length < 6){
            setInvalidPassword(true)
        }

    }

    return (

        <View style={styles.container}>
            <TextInput
                placeholder={"Digite seu e-mail"}
                placeholderTextColor={!invalidEmail ? 'black' : 'white'}
                style={[styles.input,(!invalidEmail ? styles.right : styles.wrong)]}
                onChangeText={setEmail}
                value={email}
            />
            {invalidEmail && <Text style={styles.labelError}>{errors.email}</Text>}

            <CustomButton text='Recuperar senha' onPress={()=> navigation.navigate("Login")}/>
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

    input: {
        width:'90%',
        height:50,
        backgroundColor: '#fff',
        paddingHorizontal:8,
        marginBottom:2,
        borderWidth:2,
        borderRadius:10
    },

    right: {
        backgroundColor:'white',
        borderColor:'black'
    },

    wrong: {
        backgroundColor:'#9bb9c7',
        borderColor: '#4B7E94'
    }

})