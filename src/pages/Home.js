// Utilidades
import { 
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    StatusBar,
    TouchableWithoutFeedback,
    BackHandler,
    Alert
} from 'react-native'
import { useState,useContext,useEffect } from 'react'
import SwitchSelector from "react-native-switch-selector"

// Expo Icons
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

// Variáveis globais
import AppContext from '../components/AppContext'

// API
import axios from 'axios'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'

// Componentes Customizados
import BoatList from '../components/BoatList'
import Reservas from '../components/Reservas'
import CustomButton from '../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);
    const userPicture = global.userPicture;
    var userName = global.userName;

    // Switch
    const options = [
        { label: "Embarcações", value: 1 },
        { label: "Reservas", value: 2 }
    ];

    // Set State
    const [selector,setSelector] = useState(1)

    // Hardware
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Espere um pouco!", "Tem certeza que deseja sair?", [
            {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
            },
            { text: "SIM", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    // User
    function loadPicture() {
        if (userPicture.includes('http')){
            return (<Image style={styles.profilePicture} source={{uri:userPicture}}/>);
        } else {   
            userName = "Nome usuário";
            return (<Image style={styles.profilePicture} source={require('../../assets/img/person-circle-white.png')}/>);
        }
    }

    function logout() {
        Alert.alert("Espere um pouco!", "Tem certeza que deseja sair?", [
            {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
            },
            { text: "SIM", onPress: resetValores }
        ]);
    }

    function resetValores(){
        console.log('saiu')
        global.setTemConta(null)
        navigation.navigate("Tela Inicial")
    }

    // Modal
    function fecharModal(){
        if(global.modalOpen){
            global.setDark(false)
            global.openModal(false)
            console.log('naoooo')
        }
    }

    return (
        <SafeAreaView contentContainerStyle={styles.container}>
            <View 
                showsVerticalScrollIndicator={false} 
                style={[
                    styles.scrollView, 
                    global.modalOpen ? {opacity:0.3} : {opacity:1} 
                ]}
            >
                <TouchableWithoutFeedback onPress={fecharModal}>
                    <View style={styles.blueContainer}>
                        {/* Header */}
                        <View style={styles.flexContainer}>
                            <TouchableOpacity activeOpacity={0.5} style={styles.icon} onPress={() => navigation.navigate("Configurações")}>
                                <EvilIcons name="gear" size={60} color="white"/>
                            </TouchableOpacity>
                            <Text style={styles.title}>Meu Perfil</Text>
                            <TouchableOpacity activeOpacity={0.5} style={styles.icon} onPress={logout}>
                                <Text style={styles.link}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Icones */}
                        <View style={global.tipoUsuario == "empresa" ? styles.iconContainer : styles.iconContainer2}>
                            {global.tipoUsuario == "empresa" &&
                                <TouchableOpacity activeOpacity={0.5} style={styles.calendar} onPress={() => navigation.navigate("Agendar")}>
                                    <AntDesign 
                                        name="calendar" 
                                        size={60} 
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
                                    size={60} 
                                    color="white" 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.profilePicContainer}>
                            {loadPicture()}
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nome}>{userName}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

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
            </View>
            {global.modalOpen &&
                <View style={styles.modal}>
                    <Text style={styles.texto}>Tipo de Busca</Text>
                    <CustomButton 
                        text="Por Data"
                        onPress={()=> console.log('teste')}
                        style={{ height:60, width:200, backgroundColor:'#4B7E94' }}
                    />
                    <CustomButton 
                        text="Por Embarcação"
                        onPress={()=> console.log('teste')}
                        style={{ height:60, width:200, backgroundColor:'#4B7E94' }}
                    />
                </View>
            }
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        borderWidth:4,
        borderColor:'blue'
    },

    scrollView: {
        width:'100%',
        height:'100%',
        alignSelf:'center',
        // borderColor:'green',
        // borderWidth:2
    },

    blueContainer: {
        flex:1,
        width:'100%',
        height:'50%',
        backgroundColor:'#4B7E94',
        // borderWidth:2,
        // borderColor:'yellow'
    },

    whiteContainer: {
        width:'100%',
        height:'50%',
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
        // borderColor:'green',
        // borderWidth:4,
        bottom:'20%'
    },

    profilePicture: {
        width:150,
        height:150,
        borderRadius:75,
        // textAlign:'center',
        // margin:'auto'
        margin:'auto',
    },

    flexContainer: {
        flex:1,
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-between',
        marginBottom:16,
        // borderColor:'blue',
        // borderWidth:4,
        paddingHorizontal:10
    },

    nameContainer: {
        flex:1,
        // borderColor:'yellow',
        // borderWidth:4,
        justifyContent:'center',
        alignItems:'center',
        bottom:'5%'
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
        color:'#EFF4F8',
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

    modal: {
        position:'absolute',
        bottom:0,
        alignSelf:'center',
        width:'90%',
        height:'30%',
        backgroundColor:'#fff',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },

    texto: {
        fontFamily:'Montserrat_Bold'
    }

})