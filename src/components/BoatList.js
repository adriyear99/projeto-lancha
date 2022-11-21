// Utilidades
import { FlatList, ScrollView, StyleSheet,Text,View } from 'react-native'
import { useState,useEffect,useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

// API
import axios from 'axios'

// Componentes
import Boat from './Boat'

// Variáveis globais
import AppContext from '../components/AppContext'

export default function BoatList() {

    // Variáveis e métodos globais
    const global = useContext(AppContext)

    // Alterar tela
    const navigation = useNavigation()

    // Funcionalidades
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        getBoats()
    },[])

    /**
     * 
     * @returns Lista de barcos vindo da API
     */
    async function getBoats(){
        if(loading) return
        setLoading(true)
        // const response = await axios.get(global.baseURL + '/barcos')
        // const response = await axiosClient.get('https://pokeapi.co/api/v2/pokemon/electivire')

        const response = await axios.get('http://54.84.178.96:3000/barcos', { 
            withCredentials: false,
            auth: {
                username: 'adriano',
                password: 'rolancha'
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Headers": "Authorization", 
                "Access-Control-Allow-Methods": "GET" ,
                'Access-Control-Allow-Credentials': 'true',
                "Content-Type": "application/json;charset=UTF-8"  
            } 
        })

        console.log(response.data)
        // console.log(response.data.barcos)
        // global.setBarcos([...global.barcos,...response.data.barcos])
        // global.setBarcos(response.data.barcos)

        setLoading(false)
    }

    // dados de teste (jogar fora quando servidor funcionar)
    const barcos = [
        {
            "id": 1,
            "nome": "Barco 1",
            "foto": "teste",
            "consumo": 15,
            "idade": 36,
            "cooler": 1,
            "tanque": 300,
            "pessoas": 8,
            "peso": 967
        },
        {
            "id": 2,
            "nome": "Barco 2",
            "foto": "teste",
            "consumo": 20,
            "idade": 48,
            "cooler": 2,
            "tanque": 200,
            "pessoas": 4,
            "peso": 480
        },
        {
            "id": 3,
            "nome": "Barco 3",
            "foto": "teste",
            "consumo": 15,
            "idade": 3,
            "cooler": 1,
            "tanque": 300,
            "pessoas": 8,
            "peso": 967
        },
        {
            "id": 4,
            "nome": "Barco 4",
            "foto": "teste",
            "consumo": 15,
            "idade": 3,
            "cooler": 1,
            "tanque": 300,
            "pessoas": 8,
            "peso": 967
        },
        {
            "id": 5,
            "nome": "Barco 5",
            "foto": "teste",
            "consumo": 15,
            "idade": 3,
            "cooler": 1,
            "tanque": 300,
            "pessoas": 8,
            "peso": 967
        },
        {
            "id": 6,
            "nome": "Barco 6",
            "foto": "teste",
            "consumo": 15,
            "idade": 3,
            "cooler": 1,
            "tanque": 300,
            "pessoas": 8,
            "peso": 967
        },
        {
            "id": 7,
            "nome": "Barco 7",
            "foto": "teste",
            "consumo": 15,
            "idade": 3,
            "cooler": 1,
            "tanque": 300,
            "pessoas": 8,
            "peso": 967
        },
        {
            "id": 8,
            "nome": "Barco 8",
            "foto": "teste",
            "consumo": 15,
            "idade": 3,
            "cooler": 1,
            "tanque": 300,
            "pessoas": 8,
            "peso": 967
        }
    ]

    // const barcos = global.barcos

    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                data={barcos}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) => (
                    <Boat 
                        image={require('../../assets/img/Lancha.jpeg')} 
                        name={item.nome}
                        onPress={() => navigation.navigate("Ver Barco")}
                    />
                )}
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
        backgroundColor:'#f6f6f6'
    },

})