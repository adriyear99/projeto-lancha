// Utilidades
import { StyleSheet,Text,TouchableOpacity,View,ScrollView,Image,StatusBar } from 'react-native'
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
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Set State
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const userPicture = global.userPicture;
    var userName = global.userName;

    // Set State
    const [selector,setSelector] = useState(1)
    
    const [invalidUsername,setInvalidUsername] = useState(false)
    const [invalidPassword,setInvalidPassword] = useState(false)
    
    const [usuarios,setUsuarios] = useState([])

    // Switch
    const options = [
        { label: "Embarcações", value: 1 },
        { label: "Reservas", value: 2 }
    ];

    console.log(userPicture.includes('http'));

    function loadPicture() {
        if (userPicture.includes('http'))
        {
            return (<Image style={styles.profilePicture} source={{uri:userPicture}}/>);
        }
        else
        {   
            userName = "Nome usuário";
            return (<Image style={styles.profilePicture} source={require('../../assets/img/person-circle-white.png')}/>);
        }

    }

    // console.log('tela home');
    // console.log(global);
    console.log("user pic:" + global.userPicture);
    // console.log(global.userName);

    return (
        <SafeAreaView contentContainerStyle={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.blueContainer}>
                    {/* Header */}
                    <View style={styles.flexContainer}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.icon} onPress={() => navigation.navigate("Configurações")}>
                            <EvilIcons name="gear" size={60} color="white"/>
                        </TouchableOpacity>
                        <Text style={styles.title}>Meu Perfil</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.icon} onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.link}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Icones */}
                    <View style={global.tipoUsuario == "empresa" ? styles.iconContainer : styles.iconContainer2}>
                        {global.tipoUsuario == "empresa" &&
                            <TouchableOpacity activeOpacity={0.5} style={styles.calendar} onPress={() => navigation.navigate("Agendar")}>
                                <AntDesign 
                                    name="calendar" 
                                    size={80} 
                                    color="white" 
                                />
                            </TouchableOpacity>
                        }
                        
                        <TouchableOpacity 
                            activeOpacity={0.5} 
                            style={global.tipoUsuario == "empresa" ? styles.bubbleEmpresa : styles.bubble} 
                            onPress={() => navigation.navigate("Agendar")}
                        >
                            <Ionicons 
                                name="chatbubble-ellipses-outline" 
                                size={80} 
                                color="white" 
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profilePicContainer}>
                        {loadPicture()}
                    </View>
                    <View style={styles.flexContainer}>
                        <Text style={styles.nome}>
                            {userName}
                        </Text>
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

                    {selector == 1 ? 
                        // Renderiza componente de embarcações
                        <BoatList/>
                        :
                        // Renderiza componente de reservas
                        <Reservas/>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
/*
<View style={styles.boatContainer}>
<BoatList/>
</View>
 */

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },

    scrollView: {
        
    },

    blueContainer: {
        width:'100%',
        height:'60%',
        backgroundColor:'#4B7E94'
    },

    whiteContainer: {
        width:'100%',
        height:'70%',
        backgroundColor:'#fff',
    },

    profilePicContainer: {
        width:'30%',
        alignSelf:'center',
        padding:20,
        paddingTop:'20%',
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
        width:'95%',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-evenly',
        marginBottom:16,
    },

    iconContainer: {
        flexDirection:'row',
        width:'90%',
        height:100,
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
    },

    iconContainer2: {
        flex:0
    },

    bubble: {
        alignSelf:'flex-end',
        // justifyContent:'flex-start',
        flex:0,
        // borderWidth:2,
        // borderColor:'red'
    },

    bubbleEmpresa: {
        alignSelf:'center',
        flex:0,
        // borderWidth:2,
        // borderColor:'green'
    },

    calendar: {
        alignSelf:'center',
        flex:2,
        // borderWidth:2,
        // borderColor:'green'
    },

    title: {
        fontSize:34,
        marginBottom:34,
        color:'#EFF4F8',
        fontWeight:'bold',
        justifyContent:'center',
        marginBottom:0
    },

    nome: {
        fontSize:40,
        paddingTop:'25%',
        alignSelf:'center',
        color:'#EFF4F8'
    },

    link: {
        fontSize:18,
        color: 'blue',
        flex:0
    },

    icon: {
        alignItems:'center'
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

})