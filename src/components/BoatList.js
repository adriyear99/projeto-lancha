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

    // states
    const [barcosLoaded,loadBarcos] = useState(false)

    // Alterar tela
    const navigation = useNavigation()

    useEffect(() => {
        if(!barcosLoaded){
            getBoats()
        }
    })

    /**
     * 
     * @returns Lista de barcos vindo da API
     */
    function getBoats(){
        axios.get(global.baseURL + '/embarcacoes')
        .then((response)=>{
            global.setBarcos(response.data)
            loadBarcos(true)
        })
        .catch(() => {
            console.log('Erro ao carregar barcos')
        })
    }

    function imagemBarco(modeloBarco){ 
        if(modeloBarco == 1){
            return require('../../assets/img/barcos/barco1.jpg')
        }else if(modeloBarco == 2){
            return require('../../assets/img/barcos/barco2.jpg')
        } else if(modeloBarco == 3){
            return require('../../assets/img/barcos/barco3.jpg')
        } else if(modeloBarco == 4){
            return require('../../assets/img/barcos/barco4.jpg')
        } else {
            return require('../../assets/img/Lancha.jpeg')
        }
    }


    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                data={global.barcos}
                keyExtractor={(item) => item.idEmbarcacao}
                renderItem={ ({item}) => (
                    <Boat 
                        image={imagemBarco(item.idModelo)} 
                        name={item.nome}
                        onPress={() => navigation.navigate("Ver Barco",{
                            screen:'Ver Barco',
                            params:{item}
                        })}
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