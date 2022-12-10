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

    // Data
    const [idSelecionado,setIdSelecionado] = useState(undefined)

    // Variáveis e métodos globais
    const global = useContext(AppContext)

    useEffect(() => {
        if(horarios==undefined){
            preencherHorarios()
        }

        if(idSelecionado!=undefined && horarios!=undefined){
            global.setHorarioSelecionado(horarios[idSelecionado-1].horario)
        }

    },[idSelecionado])

    useEffect(() => {
        if(global.horarioSelecionado != undefined){
            console.log("Horario selecionado: ",global.horarioSelecionado)
        }

    },[global.horarioSelecionado])

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
                    <TouchableOpacity onPress={() => setIdSelecionado(item.id)}>
                        <View style={[styles.horarioContainer, {backgroundColor:(idSelecionado == item.id ? 'green' : '#E8E8E8')} ]}>
                            {(Number(item.horario.substring(0,2)) < 10 && item.horario.substring(2,5) == ":00") &&
                                <Text style={[styles.textoHorario,{color:(idSelecionado == item.id ? 'white' : 'black')}]}>
                                    {item.horario} - {item.horario.replace(":00",":30")}
                                </Text>
                            }

                            {(Number(item.horario.substring(0,2)) >= 10 && item.horario.substring(2,5) == ":00") &&
                                <Text style={[styles.textoHorario,{color:(idSelecionado == item.id ? 'white' : 'black')}]}>
                                    {item.horario} - {item.horario.replace(":00",":30")}
                                </Text>
                            }

                            {(Number(item.horario.substring(0,2)) < 9 && item.horario.substring(2,5) == ":30") &&
                                    <Text style={[styles.textoHorario,{color:(idSelecionado == item.id ? 'white' : 'black')}]}>
                                        {`0${Number(item.horario.substring(1,2))}:30`} - {`0${Number(item.horario.substring(0,2))+1}:00`}
                                    </Text>
                            }

                            {(Number(item.horario.substring(0,2)) == 9 && item.horario.substring(2,5) == ":30") &&
                                    <Text style={[styles.textoHorario,{color:(idSelecionado == item.id ? 'white' : 'black')}]}>
                                        {`0${Number(item.horario.substring(1,2))}:30`} - {`${Number(item.horario.substring(0,2))+1}:00`}
                                    </Text>
                            }

                            {(Number(item.horario.substring(0,2)) >= 10 && Number(item.horario.substring(0,2)) < 23 && item.horario.substring(2,5) == ":30") &&
                                    <Text style={[styles.textoHorario,{color:(idSelecionado == item.id ? 'white' : 'black')}]}>
                                        {item.horario} - {`${Number(item.horario.substring(0,2))+1}:00`}
                                    </Text>
                            }

                            {item.horario == '23:30' &&
                                    <Text style={[styles.textoHorario,{color:(horarioSelecionado == item.id ? 'white' : 'black')}]}>
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

    textoHorario: {
        fontSize:18,
        fontFamily:'Montserrat_Bold',
        alignSelf:'center'
    },

})