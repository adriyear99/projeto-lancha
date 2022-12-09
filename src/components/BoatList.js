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

    // Alterar tela
    const navigation = useNavigation()

    useEffect(() => {
        getBoats()
    },[global.barcos])

    /**
     * 
     * @returns Lista de barcos vindo da API
     */
    async function getBoats(){
        const response = await axios.get(global.baseURL + '/embarcacoes')
        // console.log(response.data)
        global.setBarcos(response.data)
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
                        // image={item.idModelo < 5 ?
                        //     require(`../../assets/img/barcos/barco${item.idModelo}.jpg`)
                        //     :
                        //     require('../../assets/img/Lancha.jpeg')
                        // } 
                        // image={require('../../assets/img/Lancha.jpeg')}
                        // image={item.url_imagem} 
                        // image={
                        //     (item.idModelo == 1 ? require('../../assets/img/barcos/barco1.jpg')
                        //     : item.idModelo == 2 ? require('../../assets/img/barcos/barco2.jpg')
                        //     : item.idModelo == 3 ? require('../../assets/img/barcos/barco3.jpg')
                        //     : item.idModelo == 4 ? require('../../assets/img/barcos/barco4.jpg')
                        //     : item.idModelo == 5 ? require('../../assets/img/barcos/barco5.jpg')
                        //     )
                        // }
                        image={imagemBarco(item.idModelo)} 
                        name={item.nome}
                        onPress={() => navigation.navigate("Ver Barco",{
                            screen:'Var Barco',
                            params:{item}
                        })}
                        // onPress={() => console.log(route.params)}

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