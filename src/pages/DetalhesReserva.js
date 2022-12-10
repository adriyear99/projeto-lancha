// Utilidades
import { View,SafeAreaView,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert } from 'react-native'
import { useState,useContext,useEffect } from 'react'
import SwitchSelector from "react-native-switch-selector"

// Expo Icons
import { Entypo } from '@expo/vector-icons'

// API
import axios from 'axios'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'

// Variáveis globais
import AppContext from '../components/AppContext'
import CustomButton from '../components/CustomButton'
import TimeList from '../components/TimeList'

export default function DetalhesReserva({navigation,route}) {

    // Switch
    const condutor = [
        { label: "SIM", value: 1 },
        { label: "NÃO", value: 2 }
    ]
    const comidas = [
        { label: "SIM", value: 1 },
        { label: "NÃO", value: 2 }
    ]
    const bebidas = [
        { label: "SIM", value: 1 },
        { label: "NÃO", value: 2 }
    ]
    const concierge = [
        { label: "SIM", value: 1 },
        { label: "NÃO", value: 2 }
    ]
    const outraMarina = [
        { label: "SIM", value: 1 },
        { label: "NÃO", value: 2 }
    ]

    // Set State
    const [estadoCondutor,setEstadoCondutor] = useState(1)
    const [estadoComidas,setEstadoComidas] = useState(1)
    const [estadoBebidas,setEstadoBebidas] = useState(1)
    const [estadoConcierge,setEstadoConcierge] = useState(1)
    const [estadoOutraMarina,setEstadoOutraMarina] = useState(1)
    const [numeroPessoas,setNumeroPessoas] = useState(0)

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Ativado toda vez que um estado mudar
    // useEffect(() => {
    //     console.log("DADOS ATUALIZADOS")
    //     console.log("Condutor? ", estadoCondutor==1 ? "Sim" : "Não")
    //     console.log("Comidas? ", estadoComidas==1 ? "Sim" : "Não")
    //     console.log("Bebidas? ", estadoBebidas==1 ? "Sim" : "Não")
    //     console.log("Concierge? ", estadoConcierge==1 ? "Sim" : "Não")
    //     console.log("Outra Marina? ", estadoOutraMarina==1 ? "Sim" : "Não")
    //     console.log("Pessoas: ", numeroPessoas)
    //     console.log("========================")
    // },[estadoCondutor,estadoComidas,estadoBebidas,estadoConcierge,estadoOutraMarina,numeroPessoas])

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
        return (
            <View style={{flex:1}}>
                {global.userPicture == undefined ?
                    <Image 
                        style={styles.profilePicture} 
                        source={require('../../assets/img/person-circle-white.png')}
                    />
                :
                    <Image 
                        style={styles.profilePicture} 
                        source={{uri:global.userPicture}}
                    />
                }
            </View>
        )
    }

    /**
     * Atualiza os dados da reserva
     */
    function fazerReserva(){
        console.log("DADOS DO PEDIDO")
        console.log("Condutor? ", estadoCondutor==1 ? "Sim" : "Não")
        console.log("Comidas? ", estadoComidas==1 ? "Sim" : "Não")
        console.log("Bebidas? ", estadoBebidas==1 ? "Sim" : "Não")
        console.log("Concierge? ", estadoConcierge==1 ? "Sim" : "Não")
        console.log("Outra Marina? ", estadoOutraMarina==1 ? "Sim" : "Não")
        console.log("Pessoas: ", numeroPessoas)

        let numeroEditado
        // Formatar numero
        if(numeroPessoas===undefined){
            numeroEditado = '0'
        }else{
            numeroEditado = numeroPessoas.toString()
        }
        if(numeroEditado[0] == '0'){
            numeroEditado = numeroEditado.replace('0','')
            console.log(numeroEditado)
            console.log(numeroEditado)
            setNumeroPessoas(+numeroEditado)
            // console.log("Pessoas: ", numeroPessoas)
        } else {
            setNumeroPessoas(+numeroEditado)
            // console.log("Pessoas: ", numeroPessoas)
        }
        console.log("========================")

        Alert.alert("Finalizar Reserva", "Tem certeza que deseja confirmar?", [
            {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
            },
            { text: "SIM", onPress: () => requestReserva() }
        ]);
        return true;
    }

    function requestReserva(){
        console.log('deu certo')
        console.log('Id Pessoa:', global.userId)
        console.log('Id Modelo:', route.params.params.idModelo)
        console.log("Data: ", `2022-12-10 ${global.horarioSelecionado}:00`)

        // axios.post(global.baseURL + '/api/cadastro_reserva',{
        //     id_pessoa: global.userId,
        //     data_agendamento:`${global.dataSelecionada} ${global.horarioSelecionado}:00`,
        //     horario_inicial:`${global.dataSelecionada} ${global.horarioSelecionado}:00`,
        //     tipo_reserva:'Locador',
        //     detalhes:'',
        //     horario_final:`${global.dataSelecionada} ${global.horarioSelecionado}:00`,
        //     id_embarcacao: global.barcoSelecionado.idModelo
        // })
        axios.post(global.baseURL + '/api/cadastro_reserva',[{
            id_pessoa: 1,
            data_agendamento:`$2022-12-10 ${global.horarioSelecionado}:00`,
            horario_inicial:`$2022-12-10 ${global.horarioSelecionado}:00`,
            tipo_reserva:'Locador',
            detalhes:'',
            horario_final:`$2022-12-10 ${global.horarioSelecionado}:00`,
            id_embarcacao: route.params.params.idModelo
        }])
        .then(()=>{
            console.log("Reserva cadastrada com sucesso!")
        })
        .catch(()=>{
            Alert.alert("Erro!", "Dados inválidos ao cadastrar reserva", [
                {
                    text: "OK",
                    onPress: () => null,
                    style: "cancel"
                }
            ]);
            return true;
        })
    }

    function verifyNumber(value){
        if(value > 100){
            setNumeroPessoas(100)
        } else {
            setNumeroPessoas(value)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ flex: 0.5 }}>
                    <Entypo name="arrow-with-circle-left" size={40} color="white" style={styles.voltar}/>
                </TouchableOpacity>
                <Text style={styles.titulo}>Reserva</Text>
                <TouchableOpacity style={styles.profilePicContainer} onPress={() => navigation.navigate("Editar Perfil")}>
                    <View style={{ flex: 1 }}>{loadPicture()}</View>
                </TouchableOpacity>
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.textoOpcao}>Necessita condutor?</Text>
                <SwitchSelector
                    options={condutor}
                    initial={0}
                    textColor={"#4B7E94"}
                    selectedColor={"#4B7E94"}
                    buttonColor={"lightgray"}
                    borderColor={"lightgray"}
                    hasPadding
                    style={styles.switch}
                    onPress={(value) => setEstadoCondutor(value)}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.textoOpcao}>Comidas</Text>
                <SwitchSelector
                    options={comidas}
                    initial={0}
                    textColor={"#4B7E94"}
                    selectedColor={"#4B7E94"}
                    buttonColor={"lightgray"}
                    borderColor={"lightgray"}
                    hasPadding
                    style={styles.switch}
                    onPress={(value) => setEstadoComidas(value)}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.textoOpcao}>Bebidas</Text>
                <SwitchSelector
                    options={bebidas}
                    initial={0}
                    textColor={"#4B7E94"}
                    selectedColor={"#4B7E94"}
                    buttonColor={"lightgray"}
                    borderColor={"lightgray"}
                    hasPadding
                    style={styles.switch}
                    onPress={(value) => setEstadoBebidas(value)}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.textoOpcao}>Concierge</Text>
                <SwitchSelector
                    options={concierge}
                    initial={0}
                    textColor={"#4B7E94"}
                    selectedColor={"#4B7E94"}
                    buttonColor={"lightgray"}
                    borderColor={"lightgray"}
                    hasPadding
                    style={styles.switch}
                    onPress={(value) => setEstadoConcierge(value)}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.textoOpcao}>Outra marina?</Text>
                <SwitchSelector
                    options={outraMarina}
                    initial={0}
                    textColor={"#4B7E94"}
                    selectedColor={"#4B7E94"}
                    buttonColor={"lightgray"}
                    borderColor={"lightgray"}
                    hasPadding
                    style={styles.switch}
                    onPress={(value) => setEstadoOutraMarina(value)}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.textoOpcao}>Número de pessoas</Text>
                <TextInput
                    keyboardType="numeric"
                    editable
                    maxLength={3}
                    placeholder={
                    numeroPessoas == 0 ||
                    numeroPessoas == null ||
                    numeroPessoas == undefined
                        ? "Qtd Pessoas"
                        : numeroPessoas.toString()
                    }
                    placeholderTextColor="white"
                    style={styles.input}
                    onChangeText={(value) => verifyNumber(value)}
                    value={numeroPessoas}
                />
            </View>

            {/* Lista de horarios disponiveis */}
            <View style={styles.timeContainer}>
                <Text style={styles.textoHorario}>Horario da Reserva</Text>
                <TimeList />
            </View>

            <CustomButton
                text="Fazer Reserva"
                onPress={fazerReserva}
                style={{
                    height: 60,
                    width: 200,
                    backgroundColor: "#4B7E94",
                    marginTop: 0,
                    marginBottom: 10,
                }}
            />
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'120%',
        backgroundColor:'#fff',
        alignItems:'center',
    },

    header: {
        flex:1,
        width:'100%',
        flexDirection:'row',
        // borderWidth:2,
        // borderColor:'green',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:20,
        borderBottomColor:'lightgray',
        borderBottomWidth:2,
        backgroundColor:'#4B7E94'
    },

    voltar: {
        flex:1,
        // borderWidth:2,
        // borderColor:'green',
        alignSelf:'center'
    },

    titulo: {
        flex:1,
        width:'30%',
        fontSize:24,
        color:'white',
        fontFamily:'Montserrat_Bold',
        textAlign:'center',
        // borderWidth:2,
        // borderColor:'green',
    },

    profilePicContainer: {
        flex:0.5,
        width:'20%',
        height:'100%',
        alignSelf:'center',
        justifyContent:'center',
        // borderWidth:2,
        // borderColor:'green',
    },

    profilePicture: {
        flex:1,
        width:40,
        height:40,
        borderRadius:20,
        alignSelf:'center',
        padding:10
    },

    switchContainer: {
        flex:1,
        flexDirection:'row',
        width:'100%',
        height:40,
        paddingLeft:10,
        // borderWidth:2,
        // borderColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'lightgray',
        borderBottomWidth:2
    },

    textoOpcao: {
        flex:1,
        fontFamily:'Montserrat_Bold',
        fontSize:14,
        color:'gray',
        textAlign:'left',
        alignSelf:'center',
        // borderWidth:2,
        // borderColor:'blue',
    },

    switch: {
        flex:1,
        width:'50%',
        alignSelf:'center',
        transform: [{ scaleX: .8 }, { scaleY: .7 }],
        // borderColor:'green',
        // borderWidth:2
    },

    input: {
        flex:1,
        width:'40%',
        height:30,
        textAlign:'center',
        alignSelf:'flex-end',
        marginBottom:8,
        marginRight:10,
        borderWidth:2,
        borderRadius:20,
        backgroundColor:'#D9D9D9',
        borderColor:'lightgray'
    },

    timeContainer: {
        flex:5,
        width:'100%',
        paddingHorizontal:'5%',
        marginTop:10,
        marginHorizontal:20,
    },

    textoHorario: {
        fontSize:20,
        fontFamily:'Montserrat_Bold',
        color:'gray',
        alignSelf:'center'
    },

})