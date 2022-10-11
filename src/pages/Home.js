// Utilidades
import { StyleSheet,Text,TouchableOpacity,View,Image } from 'react-native'
import { useState,useContext } from 'react'
import SwitchSelector from "react-native-switch-selector"

// Expo Icons
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

// Variáveis globais
import AppContext from '../components/AppContext'

// Componentes Customizados
import BoatList from '../components/BoatList'
import Reservas from '../components/Reservas'
import Box from '../components/Box'

export default function Home({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Set State
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [selector,setSelector] = useState(1)
    
    const [invalidUsername,setInvalidUsername] = useState(false)
    const [invalidPassword,setInvalidPassword] = useState(false)
    
    const [usuarios,setUsuarios] = useState([])

    // Switch
    const options = [
        { label: "Embarcações", value: 1 },
        { label: "Reservas", value: 2 }
    ];

    // console.log('tela home');
    // console.log(global);
    // console.log(global.userPicture);
    // console.log(global.userName);

    return (
        <View style={styles.container}>
            <View style={styles.blueContainer}>

                {/* Header */}
                <View style={styles.flexContainer}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.icon} onPress={() => navigation.navigate("Configurações")}>
                        <EvilIcons name="gear" size={60} color="white"/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Meu Perfil</Text>
                    <TouchableOpacity activeOpacity={0.5} style={styles.icon} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.link}>logout</Text>
                    </TouchableOpacity>
                </View>
                {/* Icones */}
                <View style={styles.iconContainer}>
                    {/* {global.tipoUsuario == "empresa" && */}
                        <TouchableOpacity activeOpacity={0.5} style={styles.calendar} onPress={() => navigation.navigate("Agendar")}>
                            <AntDesign 
                                name="calendar" 
                                size={100} 
                                color="white" 
                            />
                        </TouchableOpacity>
                    {/* } */}
                    {/* Foto */}
                    <View style={styles.profilePicContainer}>
                        {/* <Image style={styles.profilePicture} source={{uri:global.userPicture}}/>  */}
                        <Image style={styles.profilePicture} source={require('../../assets/img/sad-cat.jpg')}/>      
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.bubble} onPress={() => navigation.navigate("Agendar")}>
                        <Ionicons 
                            name="chatbubble-ellipses-outline" 
                            style={styles.bubble} 
                            size={100} 
                            color="white" 
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.whiteContainer}>
                <SwitchSelector
                    options={options}
                    initial={0}
                    textColor={'#4B7E94'}
                    selectedColor={'#4B7E94'}
                    buttonColor={'lightgray'}
                    borderColor={'lightgray'}
                    hasPadding
                    style={styles.switch}
                    onPress={value => setSelector(value)}
                />

                {/* <View style={styles.boxContainer}>
                    <Box/>
                </View>
                
                <View style={styles.boxContainer}>
                    <Box/>
                </View>

                <View style={styles.boxContainer}>
                    <Box/>
                </View>

                <View style={styles.boxContainer}>
                    <Box/>
                </View> */}

                <View style={styles.switchContainer}>  
                    {selector == 1 ? 
                        // Renderiza componente de embarcações
                        <BoatList/>
                        :
                        // Renderiza componente de reservas
                        <Reservas/>
                    }
                </View>
                
            </View>
        </View>

    )
}
/*
<View style={styles.boatContainer}>
<BoatList/>
</View>
 */

const styles = StyleSheet.create({

    blueContainer: {
        width:'100%',
        height:'60%',
        backgroundColor:'#4B7E94'
    },

    whiteContainer: {
        width:'100%',
        height:'70%',
        backgroundColor:'#fff'
    },

    container: {
        flex: 1,
        backgroundColor:'#4B7E94',
        height:'30%',
        alignItems:'center',
    },

    profilePicContainer: {
        width:'30%',
        alignSelf:'center',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0,
        borderColor:'white',
        height:'30%',
        opacity: 1,
    },

    profilePicture: {
        width:200,
        height:200,
        borderRadius:100,
        // textAlign:'center',
        // margin:'auto'
        margin:'auto',
    },

    flexContainer: {
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-between',
        marginBottom:10,
        // borderWidth:2,
        // borderColor:'red',
    },

    iconContainer: {
        flexDirection:'row',
        width:'80%',
        height:120,
        alignSelf:'center',
        justifyContent:'space-between',
        marginBottom:10,
        borderWidth:0,
        borderColor:'white',
        opacity: 1,
    },

    bubble: {
        alignSelf:'flex-start',

    },

    calendar: {
        alignSelf:'flex-start',

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
        alignItems:'center'
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
    },

    switch: {
        width:'80%',
        alignSelf:'center',
        marginTop:10
    },

    boatContainer: {
        flexDirection:'row',
        width:'50%',
        height:'40%',
        alignSelf:'center',
        backgroundColor:'lightgray',
        marginTop:10,
        borderWidth:0,
        borderColor:'white',
        opacity: 1,
    },

    boxContainer: {
        borderWidth: 4,
        borderRadius: 4,
        borderColor: 'lightgray',
        width: '50%',
        height: '10%',
        alignSelf: 'center'
    },

    switchContainer: {
        flex: 1,
        width:'80%',
        alignSelf:'center',
        marginTop:10,
        marginBottom:40,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: 'lightgray',
        alignItems:'center',
        justifyContent:'center'
    }
})