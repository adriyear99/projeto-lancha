// Utilidades
import { Text,FlatList,StyleSheet,View,TouchableOpacity } from 'react-native'
import { useState,useEffect,useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

// API
import axios from 'axios'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'

// Variáveis globais
import AppContext from './AppContext'

export default function TimeList() {

    // Estados
    const [horarios,setHorarios] = useState(undefined)
    const [horarioSelecionado,setHorarioSelecionado] = useState(undefined)

    // Horarios (apagar quando pegar do servidor)
    // const horarios = [
    //     {
    //         id:1,
    //         horario:'9:00'
    //     },
    //     {
    //         id:2,
    //         horario:'9:30'   
    //     },
    //     {
    //         id:3,
    //         horario:'10:00'   
    //     },
    //     {
    //         id:4,
    //         horario:'10:30'   
    //     },
    //     {
    //         id:5,
    //         horario:'11:00'   
    //     },
    // ]

    // Variáveis e métodos globais
    const global = useContext(AppContext)

    // Alterar tela
    const navigation = useNavigation()

    useEffect(() => {
        if(horarios==undefined){
            preencherHorarios()
        }

        if(horarioSelecionado!=undefined && horarios!=undefined){
            console.log("Horario selecionado: ", horarios[horarioSelecionado-1].horario)
        }

    },[horarioSelecionado])

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }


    /**
     * Preenche horarios de reserva
     */
    function preencherHorarios(){
        let horarios = []
        let id = 1
        for(let i=0; i<24; i++){
            for(let j=0; j<=30; j+=30){
                if(i<10){
                    if(j==0){
                        horarios.push({id:id,horario:`0${i}:00`})
                    } else{
                        horarios.push({id:id,horario:`0${i}:${j}`})
                    }
                } else {
                    if(j==0){
                        horarios.push({id:id,horario:`${i}:00`})
                    } else{
                        horarios.push({id:id,horario:`${i}:${j}`})
                    }
                }
                id++
            }
        }
        setHorarios(horarios)
    }


    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                data={horarios}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) => (
                    <TouchableOpacity onPress={() => setHorarioSelecionado(item.id)}>
                        <View style={[styles.horarioContainer, (horarioSelecionado == item.id ? styles.selecionado : styles.naoSelecionado) ]}>
                            {(Number(item.horario.substring(0,2)) < 10 && item.horario.substring(2,5) == ":00") &&
                                <Text style={styles.textoHorario}>
                                    {item.horario} - {item.horario.replace(":00",":30")}
                                </Text>
                            }

                            {(Number(item.horario.substring(0,2)) >= 10 && item.horario.substring(2,5) == ":00") &&
                                <Text style={styles.textoHorario}>
                                    {item.horario} - {item.horario.replace(":00",":30")}
                                </Text>
                            }

                            {(Number(item.horario.substring(0,2)) < 9 && item.horario.substring(2,5) == ":30") &&
                                    <Text style={styles.textoHorario}>
                                        {`0${Number(item.horario.substring(1,2))}:30`} - {`0${Number(item.horario.substring(0,2))+1}:00`}
                                    </Text>
                            }

                            {(Number(item.horario.substring(0,2)) == 9 && item.horario.substring(2,5) == ":30") &&
                                    <Text style={styles.textoHorario}>
                                        {`0${Number(item.horario.substring(1,2))}:30`} - {`${Number(item.horario.substring(0,2))+1}:00`}
                                    </Text>
                            }

                            {(Number(item.horario.substring(0,2)) >= 10 && Number(item.horario.substring(0,2)) < 23 && item.horario.substring(2,5) == ":30") &&
                                    <Text style={styles.textoHorario}>
                                        {item.horario} - {`${Number(item.horario.substring(0,2))+1}:00`}
                                    </Text>
                            }

                            {item.horario == '23:30' &&
                                    <Text style={styles.textoHorario}>
                                        {item.horario} - {'00:00'}
                                    </Text>
                            }

                        </View>
                    </TouchableOpacity>
                )}
            />      
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        width:'100%',
        alignSelf:'center',
        paddingHorizontal:'5%',
        marginTop:5,
        marginHorizontal:20,
        marginBottom:10,
        borderWidth:2,
        borderColor:'#f6f6f6',
        borderRadius:10,
        backgroundColor:'#f6f6f6'
    },

    horarioContainer: {
        width:'80%',
        height:40,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:25,
        marginVertical:5,
        marginLeft:5,
        alignItems:'center',
    },

    selecionado: {
        backgroundColor:'green',
    },

    naoSelecionado: {
        backgroundColor:'#E8E8E8',
    },

    textoHorario: {
        fontSize:18,
        fontFamily:'Montserrat_Bold',
        color:'gray',
        alignSelf:'center'
    },

})