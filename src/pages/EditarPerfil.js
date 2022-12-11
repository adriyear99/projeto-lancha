// Utilidades
import { useContext,useState,useEffect } from "react"
import { View,StyleSheet,Text,TextInput,SafeAreaView,FlatList,TouchableOpacity,BackHandler,Alert,Platform } from "react-native"

// Componentes
import CustomButton from "../components/CustomButton"
import Reserva from "../components/Reserva"

// API
import axios from 'axios'

// Expo Icons
import { Ionicons } from '@expo/vector-icons'

// Variáveis globais
import AppContext from "../components/AppContext"

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'

export default function EditarPerfil({ navigation }) {
    // Variáveis e métodos globais
    const global = useContext(AppContext)

    // States
    const [mostrarOpcoes, setMostrarOpcoes] = useState(true)
    const [mostrarAlterarNome, setAlterarNome] = useState(false)
    const [nomeUsuario, setNomeUsuario] = useState("")

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
        getReservas()
    },[])

    // Renderizacao condicional
    function showAlterarNome(){
        setAlterarNome(true)
        setMostrarOpcoes(false)
    }

    function voltar(){
        setMostrarOpcoes(true)
        setAlterarNome(false)
    }

    // Chamadas de API
    function alterarNome(){
        // console.log(nomeUsuario)
        // console.log(global.userId)
        let data = JSON.stringify({ 
            nome: nomeUsuario,
            id_pessoa: global.userId
        })
        data = "[" + data + "]";
        // console.log(data)
        // console.log(global.baseURL + '/api/nome')
        axios.put(global.baseURL + '/api/nome', data, {headers:{"Content-Type" : "application/json"}})
        .then((response) => {
            global.setUserName(nomeUsuario)
            Alert.alert("Sucesso!", "Seu nome foi atualizado para: " + nomeUsuario, [
                {
                    text: "OK",
                    onPress: () => null,
                    style: "cancel"
                }
            ]);
        })
        .catch(() => {
            Alert.alert("Erro!", "Falha ao atualizar nome", [
                {
                    text: "OK",
                    onPress: () => null,
                    style: "cancel"
                }
            ]);
        })

        
    }

        /**
     * 
     * @returns Lista de barcos vindo da API
     */
    async function getReservas(){
        const response = await axios.get(global.baseURL + '/api/reservas', { 
            params: { id_pessoa: global.userId } 
        })
        // console.log(response.data)
        global.setReservas(response.data)
    }

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    // Conta
    function logout() {
        if(Platform.OS === 'web'){
            resetValores()
        } else {
            Alert.alert("Espere um pouco!", "Tem certeza que deseja sair?", [
                {
                    text: "Cancelar",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "SIM", onPress: resetValores }
            ]);
        }
    }

    function resetValores(){
        global.setTemConta(undefined)
        global.setTipoUsuario(undefined)
        global.setUserName(undefined)
        global.setEmail(undefined)
        global.setUserPicture(undefined)
        global.setBarcos([])
        global.setReservas([])
        global.setBarcoSelecionado(undefined)
        global.openModal(false)
        global.setDark(false)
        global.setUsuarioLogado(false)
        global.setBarcoSelecionado(undefined)
        global.setHorarioSelecionado(undefined)
        global.setDataSelecionada(undefined)
        navigation.navigate("Tela Inicial")
    }

    // Renderizar componente
    return (
        <SafeAreaView style={styles.container}>
            {mostrarOpcoes ? 
                <View>
                    <CustomButton
                        text="Alterar nome de exibição"
                        onPress={showAlterarNome}
                        style={{ height: 60, width: 300, backgroundColor: "#4B7E94" }}
                    />
                    <CustomButton
                        text="Ver Reservas"
                        onPress={()=>navigation.navigate("Ver Reservas")}
                        style={{ height: 60, width: 300, backgroundColor: "#4B7E94" }}
                    />
                    <CustomButton
                        text="Fazer Logout"
                        onPress={logout}
                        style={{ height: 60, width: 300, backgroundColor: "#4B7E94" }}
                    />
                </View>
        
                :

                <View style={styles.optionContainer}>
                    <View style={styles.flexContainer}>
                        <TouchableOpacity onPress={voltar}>
                            <Ionicons 
                                name="arrow-back-circle-sharp" 
                                size={60} 
                                color="black" 
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                        <Text style={styles.texto}>
                            {mostrarAlterarNome && "Alterar nome de exibição"}
                        </Text>
                    </View>

                    {/* Mostrar tela de alterar nome */}
                    {mostrarAlterarNome && 
                    <View style={styles.alignInput}>
                        <Text style={[styles.nome,styles.input]}>
                            {global.userName}
                        </Text>
                        <TextInput
                            onChangeText={setNomeUsuario}
                            value={nomeUsuario}
                            style={styles.input}
                            placeholder="Novo Nome"
                        />
                        <CustomButton
                            text="Confirmar Alteração"
                            onPress={alterarNome}
                            style={{ 
                                height:60, 
                                width:300, 
                                backgroundColor:"#4B7E94",
                                alignSelf:'center'
                            }}
                        />
                    </View>
                    }
                </View>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:2,
        // borderColor:'red'
    },

    optionContainer: {
        width:'100%',
        height:'90%',
        alignSelf:'center',
        backgroundColor: "#fff",
        // borderWidth:2,
        // borderColor:'red'
    },

    flexContainer: {
        flexDirection:'row',
        alignItems:'center'
    },

    seta: {
        flex:0,
        alignSelf:'center',
        textAlign:'center',
        paddingHorizontal:10
    },

    texto: {
        flex:2,
        fontSize:24,
        fontFamily:'Montserrat_Bold',
        textAlign:'center',
        paddingRight:'20%'
    },

    titulo: {
        color: "red",
        fontSize: 30,
        // borderWidth:2,
        // borderColor:'red',
        padding: 100,
        marginTop: 20,
        width: "60%",
    },

    opcaoContainer: {
        flex: 1,
        flexDirection: "row",
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius:10
    },

    alignInput: {
        flex:1,
        width:'90%',
        alignSelf:'center',
        // borderColor:'red',
        // borderWidth:2,
        // justifyContent:'center'

    },

    nome: {
        backgroundColor:'lightgray',
        color:'white',
        fontWeight:'bold'
    }
});
