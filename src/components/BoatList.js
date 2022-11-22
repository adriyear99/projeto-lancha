// Utilidades
import { FlatList,StyleSheet,View } from 'react-native'
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
    const [barcos,setBarcos] = useState([])

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
        const response = await axios.get(global.baseURL + '/barcos')
        console.log(response.data)
        global.setBarcos(response.data)
        setLoading(false)
    }


    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                data={global.barcos}
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