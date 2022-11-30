// Utilidades
import { useContext, useState } from "react"
import { View,StyleSheet,Text,TextInput,SafeAreaView,FlatList,TouchableOpacity } from "react-native"

// Componentes
import CustomButton from "../components/CustomButton"

// API
import axios from 'axios'

// Expo Icons
import { Ionicons } from '@expo/vector-icons'

// Variáveis globais
import AppContext from "../components/AppContext"

export default function EditarPerfil({ navigation }) {
    // Variáveis e métodos globais
    const global = useContext(AppContext)

    // States
    const [nomeUsuario, setNomeUsuario] = useState("")
    const [senhaUsuario, setSenhaUsuario] = useState("")

    // Flags
    const [mostrarOpcoes, setMostrarOpcoes] = useState(true)
    const [mostrarAlterarNome, setAlterarNome] = useState(false)
    const [mostrarAlterarSenha, setAlterarSenha] = useState(false)
    const [verReservas, setVerReservas] = useState(false)

    // Renderizacao condicional
    function showAlterarNome(){
        setAlterarNome(true)
        setMostrarOpcoes(false)
    }

    function showAlterarSenha(){
        setAlterarSenha(true)
        setMostrarOpcoes(false)
    }

    function showVerReservas(){
        setVerReservas(true)
        setMostrarOpcoes(false)
    }

    function voltar(){
        setMostrarOpcoes(true)
        setAlterarNome(false)
        setAlterarSenha(false)
        setVerReservas(false)
    }

    // Chamadas de API
    async function alterarNome(){
        const response = await axios.get(global.baseURL + '/barcos')
        console.log(response.data)
        console.log('teste')
    }

    async function alterarSenha(){
        const response = await axios.get(global.baseURL + '/barcos')
        console.log(response.data)
        console.log('teste')
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
                        text="Alterar senha"
                        onPress={showAlterarSenha}
                        style={{ height: 60, width: 300, backgroundColor: "#4B7E94" }}
                    />
                    <CustomButton
                        text="Ver Reservas"
                        onPress={showVerReservas}
                        style={{ height: 60, width: 300, backgroundColor: "#4B7E94" }}
                    />
                    <CustomButton
                        text="Fazer Logout"
                        onPress={() => navigation.navigate("Tela Inicial")}
                        style={{ height: 60, width: 300, backgroundColor: "#4B7E94" }}
                    />
                </View>
        
                :

                <View style={styles.flexContainer}>
                    <TouchableOpacity onPress={voltar}>
                        <Ionicons 
                            name="arrow-back-circle-sharp" 
                            size={60} 
                            color="black" 
                            style={{paddingLeft:10}}
                        />
                    </TouchableOpacity>

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

                    {/* Mostrar tela de alterar senha */}
                    {mostrarAlterarSenha && 
                    <View style={styles.alignInput}>
                        <TextInput
                            onChangeText={setSenhaUsuario}
                            value={senhaUsuario}
                            style={styles.input}
                            placeholder="Senha atual"
                        />
                        <TextInput
                            onChangeText={setSenhaUsuario}
                            value={senhaUsuario}
                            style={styles.input}
                            placeholder="Nova senha"
                        />
                        <TextInput
                            onChangeText={setSenhaUsuario}
                            value={senhaUsuario}
                            style={styles.input}
                            placeholder="Confirme a nova senha"
                        />
                        <CustomButton
                            text="Confirmar Alteração"
                            onPress={alterarSenha}
                            style={{ 
                                height:60, 
                                width:300, 
                                backgroundColor:"#4B7E94",
                                alignSelf:'center'
                            }}
                        />
                    </View>
                    }

                    {/* Mostrar tela de ver reservas */}
                    {verReservas && 
                    <FlatList
                    horizontal={false}
                    data={global.reservas}
                    keyExtractor={(item) => item.idAgendamento}
                    renderItem={ ({item}) => (
                        <Reserva 
                            key={item.idAgendamento} 
                            name={item.tipo} 
                            onPress={()=> navigation.navigate("Editar Reserva")}
                        />
                    )}
                    ListFooterComponent={
                        <CustomButton 
                            text="Nova Reserva"
                            onPress={novaReserva}
                            style={{ 
                                height:60, 
                                width:200, 
                                backgroundColor:'#4B7E94',
                                marginBottom:10
                            }}
                        />
                    }
                    ListFooterComponentStyle={{alignSelf:'center'}}
                    />
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

    flexContainer: {
        width:'100%',
        height:'90%',
        alignSelf:'center',
        backgroundColor: "#fff",
        // borderWidth:2,
        // borderColor:'red'
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
        backgroundColor:'lightgray'
    }
});
