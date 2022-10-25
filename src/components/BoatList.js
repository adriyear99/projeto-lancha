// Utilidades
import { FlatList, ScrollView, StyleSheet,Text,View } from 'react-native'
import { useState,useEffect,useContext } from 'react'
import { withNavigation } from '@react-navigation/native'

// API
import axios from 'axios'

// Componentes
import Boat from './Boat'

// Variáveis globais
import AppContext from '../components/AppContext'

export default function BoatList() {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

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
        const response = await axios.get('/api/barcos')
        console.log(response.data.barcos)
        global.setBarcos([...global.barcos,...response.data.barcos])
        setLoading(false)
    }

    const barcos = global.barcos

    return (
        <View style={styles.container}>
            <FlatList
                data={barcos}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) => (
                    <Boat image={require('../../assets/img/Lancha.jpeg')} name={item.nome}/>
                )}
            />      
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        paddingHorizontal:'5%',
        marginTop:20
    },

})