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

    // Horarios (apagar quando pegar do servidor)
    const horarios = [
        {
            id:1,
            horario:'9:00'
        },
        {
            id:2,
            horario:'9:30'   
        },
        {
            id:3,
            horario:'10:00'   
        },
        {
            id:4,
            horario:'10:30'   
        },
        {
            id:5,
            horario:'11:00'   
        },
    ]

    // Variáveis e métodos globais
    const global = useContext(AppContext)

    // Alterar tela
    const navigation = useNavigation()

    // Funcionalidades
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        getTime()
    },[])

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    /**
     * 
     * @returns Lista de barcos vindo da API
     */
    async function getTime(){
        if(loading) return
        setLoading(true)
        const response = await axios.get(global.baseURL + '/barcos')
        console.log(response.data)
        global.setBarcos(response.data)
        setLoading(false)
    }


    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                data={horarios}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) => (
                    <TouchableOpacity>
                        <View style={styles.horarioContainer}>
                            <Text style={styles.textoHorario}>{item.horario}</Text>
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
        backgroundColor:'#E8E8E8',
        borderRadius:25,
        marginVertical:5,
        marginLeft:5,
        alignItems:'center',
    },

    textoHorario: {
        fontSize:18,
        fontFamily:'Montserrat_Bold',
        color:'gray',
        alignSelf:'center'
    },

})