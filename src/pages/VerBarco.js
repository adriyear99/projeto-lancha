// Utilidades
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { useContext,useEffect,useState } from 'react'

// Expo Icons
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';

// Variáveis globais
import AppContext from '../components/AppContext'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


export default function VerBarco({navigation,route}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext)
    const [barco,setBarco] = useState(undefined)
    const [boatLoaded,loadBoat] = useState(false)

    useEffect(() => {
        console.log("====== BARCO =======")
        setBarco(route.params.params.item)
        if(barco != undefined){
            console.log(barco)
            loadBoat(true)
        }
    },[barco])

    function loadPicture() {
        if (global.userPicture.includes('http')){
            return (
                <TouchableOpacity onPress={() => navigation.navigate("Editar Perfil")}>
                    <Image style={styles.profilePicture} source={{uri:userPicture}}/>
                </TouchableOpacity>
            );
        } else {   
            global.userName = "Nome usuário";
            return (
                <TouchableOpacity onPress={() => navigation.navigate("Editar Perfil")}>
                    <Image 
                        style={styles.profilePicture} 
                        source={require('../../assets/img/person-circle-white.png')}
                    />
                </TouchableOpacity>
            );
        }
    }

    return (
        <View>
            {!boatLoaded ?
                <SafeAreaView style={{backgroundColor:'blue'}}>
                    <Text style={{fontSize:40,textAlign:'center'}}>Carregando Barco</Text>
                </SafeAreaView>
            :
                <SafeAreaView style={styles.container}>
                    <View style={styles.blueContainer}>
                        <View style={styles.flexContainer}>
                            <Ionicons 
                                name="arrow-back-circle-outline" 
                                size={60} 
                                color="white" 
                                style={styles.icon}
                                onPress={() => navigation.navigate("Home")}
                            />
                            <Text style={styles.text}>Detalhes</Text>
                            <View style={styles.profilePicContainer} onPress={() => navigation.navigate("Editar Perfil")}>
                                {loadPicture()}
                            </View>
                        </View>

                        <View style={styles.boatContainer}>
                            <Image 
                                style={styles.boatImage}
                                source={require('../../assets/img/Lancha.jpeg')}
                            />
                            <Text style={styles.boatName}>{barco.nome}</Text>
                        </View>

                    </View>
                    <View style={styles.whiteContainer}>
                        <View style={styles.boatInfoContainer}>
                            <Text style={styles.descricao}>Descrição</Text>

                            <View style={styles.attributeContainer}>
                                <FontAwesome 
                                    name="circle" 
                                    size={24} 
                                    color="#4B7E94" 
                                    style={styles.circle}
                                />
                                <Text style={styles.atributo}>Consumo</Text>
                                <Text style={styles.valor}>15 Km/L</Text>
                            </View>

                            <View style={styles.attributeContainer}>
                                <FontAwesome 
                                    name="circle" 
                                    size={24} 
                                    color="#4B7E94" 
                                    style={styles.circle}
                                />
                                <Text style={styles.atributo}>Idade</Text>
                                <Text style={styles.valor}>{barco.tempoUso} ano{barco.tempoUso==1 ? '' : 's'} de uso</Text>
                            </View>

                            <View style={styles.attributeContainer}>
                                <FontAwesome 
                                    name="circle" 
                                    size={24} 
                                    color="#4B7E94" 
                                    style={styles.circle}
                                />
                                <Text style={styles.atributo}>Tanque de Combustível</Text>
                                <Text style={styles.valor}>{barco.combustivel} L</Text>
                            </View>

                            <View style={styles.attributeContainer}>
                                <FontAwesome 
                                    name="circle" 
                                    size={24} 
                                    color="#4B7E94" 
                                    style={styles.circle}
                                />
                                <Text style={styles.atributo}>Capacidade</Text>
                                <Text style={styles.valor}>
                                    {barco.capacidade} pessoas/967kg</Text>
                            </View>

                            <Text style={styles.info}>
                                {barco.descrição}
                            </Text>

                        </View>
                    </View>
                </SafeAreaView>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },

    blueContainer: {
        flex:1,
        width:'100%',
        height:'40%',
        backgroundColor:'#4B7E94'
    },

    whiteContainer: {
        flex:1,
        width:'100%',
        height:'60%',
        backgroundColor:'#fff'
    },

    flexContainer: {
        flexDirection:'row',
        // borderWidth:2,
        // borderColor:'blue',
        justifyContent:'space-between',
        padding:10
    },

    boatContainer: {
        width:'100%',
        height:'70%',
        // borderWidth:2,
        // borderColor:'blue',
        alignSelf:'center',
        marginTop:10,
        borderRadius:20,
        paddingBottom:10,
        paddingHorizontal:20
    },

    boatImage: {
        flex: 1,
        height: undefined,
        width: undefined,
        borderRadius:40,
    },

    boatName: {
        fontSize:30,
        color:'#fff',
        textAlign:'center',
        marginTop:10
    },

    icon: {
        flex:1,
        alignSelf:'center',
        textAlign:'left',
        paddingLeft:10,
    },

    text: {
        flex:1,
        fontSize:24,
        color:'white',
        // borderColor:'green',
        // borderWidth:2,
        textAlign:'center',
        alignSelf:'center'
    },

    profilePicContainer: {
        flex:1,
        // borderColor:'red',
        // borderWidth:2,
        paddingRight:10,
        paddingVertical:10
    },

    profilePicture: {
        width:40,
        height:40,
        borderRadius:20,
        alignSelf:'flex-end',
    },

    boatInfoContainer: {
        width:'95%',
        // height:'60%',
        alignSelf:'center',
        // borderColor:'blue',
        // borderWidth:2,
        marginTop:10
    },

    attributeContainer: {
        flexDirection:'row',
        // borderWidth:2,
        // borderColor:'blue',
        alignItems:'center',
        textAlign:'center',
        borderBottomColor:'lightgray',
        borderBottomWidth:1,
        paddingVertical:5
    },

    descricao: {
        fontSize:24,
        paddingLeft:10,
        marginBottom:5
    },

    circle: {
        paddingLeft:10,
        alignSelf:'center'
    },

    atributo: {
        fontSize:16,
        // alignSelf:'center',
        padding:12
    },
    
    valor: {
        fontSize:16,
        padding:10,
        paddingTop:5,
        marginLeft:'auto'
    },

    info: {
        height:'20%',
        textAlign:'justify',
        fontSize:12,
        marginTop:6,
        // borderColor:'blue',
        // borderWidth:2
    }
})