// Utilidades
import { StyleSheet,Text,TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function Home() {

    // Set State
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    
    const [invalidUsername,setInvalidUsername] = useState(false)
    const [invalidPassword,setInvalidPassword] = useState(false)
    
    const [usuarios,setUsuarios] = useState([])

    return <>
        <Text style={styles.title}>Rolancha</Text>

        <TouchableOpacity
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Nome de usuário ou e-mail"
        />
        {invalidUsername && <Text style={styles.labelError}>{errors.username}</Text>}
    </>
}

const styles = StyleSheet.create({

    title: {
        fontSize:34,
        marginBottom:34,
        color:'#121212',
        fontWeight:'bold'
    },

    input: {
        width:'60%',
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