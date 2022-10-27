// Utilidades
import { FlatList, StyleSheet,View,Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState,useContext } from 'react'

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
        global.setShowModal(true)
        global.setDark(true)
        // navigation.navigate("Nova Reserva")
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                data={reservasTeste}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) => (
                    <Reserva 
                        key={item.id} 
                        name={item.nome} 
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