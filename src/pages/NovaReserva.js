// Utilidades
import { View,Text,StyleSheet,BackHandler,TouchableOpacity,Image,FlatList } from 'react-native'
import { useEffect,useContext } from 'react'

// Variáveis globais
import AppContext from '../components/AppContext'

// Componentes
import Boat from '../components/Boat'

// Expo Icons
import { Ionicons } from '@expo/vector-icons'

// API
import axios from 'axios'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'

export default function NovaReserva({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Hardware
    useEffect(() => {
        const backAction = () => {
            navigation.navigate("Home")
            return true
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove()
    },[])

    useEffect(() => {
        getBoats()
    },[global.barcos])

        /**
     * 
     * @returns Lista de barcos vindo da API
     */
    async function getBoats(){
        const response = await axios.get(global.baseURL + '/embarcacoes')
        // console.log(response.data)
        global.setBarcos(response.data)
    }

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
        if (global.userPicture.includes('http')){
            return (<Image style={styles.profilePicture} source={{uri:global.userPicture}}/>);
        } else {   
            global.userName = "Nome usuário";
            return (<Image style={styles.profilePicture} source={require('../../assets/img/person-circle-white.png')}/>);
        }
    }

    return (
        <View style={styles.container}>
            {true &&
            <View style={{flex:1}}>
                <View style={styles.flexContainer}>
                    <Ionicons 
                        name="arrow-back-circle-outline" 
                        size={50} 
                        color="white" 
                        style={styles.icon}
                        onPress={() => navigation.navigate("Home")}
                    />
                    <Text style={styles.title}>Embarcacões</Text>
                    <View style={styles.profilePicContainer}>
                        {loadPicture()}
                    </View>
                </View>
                <View style={styles.flatListContainer}>
                    <FlatList
                        horizontal={false}
                        data={global.barcos}
                        keyExtractor={(item) => item.idEmbarcacao}
                        renderItem={ ({item}) => (
                            <TouchableOpacity>
                                <View style={styles.boatContainer}>
                                    <Image style={styles.foto} source={require('../../assets/img/Lancha.jpeg')}/>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.nome}>{item.nome}</Text>
                                        <Text style={styles.desc}>
                                            {item.descricao.substring(0,50) + '...'}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    /> 
                </View>
            </View>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
    },

    flexContainer: {
        flexDirection:'row',
        backgroundColor:'#4B7E94',
        width:'100%',
        height:'15%',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-between'
    },

    icon: {
        flex:0.5,
        paddingLeft:10

    },

    title: {
        flex:1,
        color:'white',
        textAlign:'center',
        fontSize:24,
        color:'#EFF4F8',
        fontWeight:'bold',
        justifyContent:'center'
    },

    profilePicContainer: {
        flex:0.5,
        paddingRight:10
    },

    profilePicture: {
        height:50,
        width:50,
        alignSelf:'flex-end'
    },

    flatListContainer: {
        flex:1,
        borderWidth:2,
        borderColor:'#f6f6f6',
        borderRadius:10,
        backgroundColor:'#f6f6f6'
    },

    boatContainer: {
        width:'100%',
        height:70,
        alignSelf:'flex-start',
        flexDirection:'row',
        backgroundColor:'#E8E8E8',
        borderBottomColor:'gray',
        borderBottomWidth:1,
        alignItems:'center'
    },

    textContainer: {
        flex:1,
        justifyContent:'center',
        padding:5
    },

    foto: {
        width:'30%',
        height:'100%',
        resizeMode:'stretch'
    },

    nome: {
        flex:1,
        width:'70%',
        fontFamily:'Montserrat_Bold',
        fontSize:16,
        textAlign:'left',
        paddingLeft:10
    },

    desc: {
        flex:2,
        paddingLeft:10,
        width:'95%'
    }

})