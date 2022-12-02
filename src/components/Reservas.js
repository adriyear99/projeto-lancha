// Utilidades
import { FlatList, StyleSheet,View,Text } from 'react-native'
import { useState,useEffect,useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

// API
import axios from 'axios'

// Componentes
import CustomButton from '../components/CustomButton'
import Reserva from './Reserva'

// Variáveis globais
import AppContext from '../components/AppContext'


export default function Reservas() {

    // Alterar tela
    const navigation = useNavigation()

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Funcionalidades
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        getReservas()
    },[])

    /**
     * 
     * @returns Lista de barcos vindo da API
     */
    async function getReservas(){
        if(loading) return
        setLoading(true)
        const response = await axios.get(global.baseURL + '/api/reservas', { 
            params: { id_user: 1 } 
        })
        console.log(response.data)
        global.setReservas(response.data)
        setLoading(false)
    }


    // deletar quando pegar os dados do servidor
    const reservasTeste = [
        {
            id:1,
            nome:'Reserva 1'
        },
        {
            id:2,
            nome:'Reserva 2'
        },
        {
            id:3,
            nome:'Reserva 3'
        },
        {
            id:4,
            nome:'Reserva 4'
        },
        {
            id:5,
            nome:'Reserva 5'
        },
        {
            id:6,
            nome:'Reserva 6'
        },
        {
            id:7,
            nome:'Reserva 7'
        },
        {
            id:8,
            nome:'Reserva 8'
        },
    ]


    const novaReserva = () => {
        global.openModal(true)
        global.setDark(true)
        // navigation.navigate("Nova Reserva")
    }

    return (
        <View style={styles.container}>
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
        </View>
    )
    
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        paddingHorizontal:'5%',
        marginTop:20,
        marginHorizontal:20,
        marginBottom:40,
        borderWidth:2,
        borderColor:'#f6f6f6',
        borderRadius:10,
        backgroundColor:'#f6f6f6',
    }

})