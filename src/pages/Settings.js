// Utilidades
import { StyleSheet,Text,View,TouchableOpacity,  Image } from 'react-native'
import { useState,useContext } from 'react'
// Componentes
import CustomButton from '../components/CustomButton'


import AppContext from '../components/AppContext'

export default function Settings({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Set State
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const userPicture = global.userPicture;
    const userName = global.userName;


    return (
        <View style={styles.container}>
            <CustomButton 
                text={userPicture}
                onPress={console.log('teste')}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text={userName}
                onPress={console.log('teste')}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text='Acessibilidade' 
                onPress={console.log('teste')}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text='Fazer Logout' 
                onPress={console.log('teste')}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <View style={styles.profilePicContainer}>
                    <Image style={styles.profilePicture} source={{uri:userPicture}}/>
                    
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
        // borderWidth:2,
        // borderColor:'red'
    },

})

