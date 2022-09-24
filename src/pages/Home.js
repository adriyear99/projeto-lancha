// Utilidades
import { StyleSheet,Text,TouchableOpacity,View,Image } from 'react-native'
import { useState } from 'react'

// Expo Icons
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'


export default function Home() {

    // Set State
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    
    const [invalidUsername,setInvalidUsername] = useState(false)
    const [invalidPassword,setInvalidPassword] = useState(false)
    
    const [usuarios,setUsuarios] = useState([])

    return <>
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <TouchableOpacity activeOpacity={0.5} style={styles.icon} onPress={() => navigation.navigate("Configurações")}>
                    <EvilIcons name="gear" size={60} color="white"/>
                </TouchableOpacity>
                <Text style={styles.title}>Perfil</Text>
                <Text style={styles.link}>Logout</Text>
            </View>
            <View style={styles.iconContainer}>
                <AntDesign 
                    name="calendar" 
                    style={styles.calendar}
                    size={100} 
                    color="white" 
                />
                <Ionicons 
                    name="chatbubble-ellipses-outline" 
                    style={styles.bubble} 
                    size={100} 
                    color="white" 
                />
            </View>
        </View>
        <View style={styles.profilePicContainer}>
            <Image style={styles.profilePicture} source={require('../../assets/img/sad-cat.jpg')}/>
        </View>
    </>
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#4B7E94',
        height:'30%',
        alignItems:'center',
    },

    profilePicContainer: {
        flex: 1,
        backgroundColor:'#fff',
        height:'70%',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
    },

    profilePicture: {
        width:300,
        height:300,
        borderRadius:150,
        // textAlign:'center',
        // margin:'auto'
        position:'absolute',
        margin:'auto',
        bottom:'60%'
    },

    flexContainer: {
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
        // borderWidth:2,
        // borderColor:'red',
        position:'relative'
    },

    iconContainer: {
        flexDirection:'row',
        width:'40%',
        height:120,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom:10,
        // borderWidth:2,
        // borderColor:'red'
    },

    bubble: {
        alignSelf:'flex-start',
        flex:0
    },

    calendar: {
        alignSelf:'flex-start',
        flex:1
    },

    title: {
        fontSize:40,
        marginBottom:34,
        color:'#121212',
        fontWeight:'bold',
        justifyContent:'center',
        marginBottom:0
    },

    link: {
        fontSize:18,
        color: 'blue',
        alignSelf:'center'
    },

    icon: {
        // alignSelf:'center',
        // textAlign:'left'
        alignItems:'left'
    },

    // center: {
    //     textAlign:'center',
    //     margin:'auto'
    // },

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