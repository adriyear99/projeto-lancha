// Utilidades
import { ScrollView, StyleSheet,Text,View } from 'react-native'

// Componentes
import CustomButton from '../components/CustomButton'
import Reserva from './Reserva'


export default function Reservas() {

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
        // {
        //     id:5,
        //     nome:'Reserva 5'
        // },
        // {
        //     id:6,
        //     nome:'Reserva 6'
        // },
        // {
        //     id:7,
        //     nome:'Reserva 7'
        // },
        // {
        //     id:8,
        //     nome:'Reserva 8'
        // },
    ]

    /**
     * Renderiza dinamicamente o array de reservas vindo da API com foto e nome
     * @returns Dynamic rendering of reservation list
     */
    function mapReservas(){
        return reservasTeste.map((reserva) => {
            return (
                <Reserva key={reserva.id} name={reserva.nome}/>
            )   
        })
    }

    return (
        <ScrollView contentContainerStyle={styles.flexContainer}>
            {/* <Reserva nome="Reserva 1"/> */}
            <View style={styles.reservaContainer}>
                {mapReservas()}
            </View>
            <CustomButton 
                text="Nova Reserva"
                onPress={console.log('testando')}
                style={{ height:60, width:200, backgroundColor:'#4B7E94' }}
            />
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({

    flexContainer: {
        width:'80%',
        height:800,
        alignItems:'center',
        alignSelf:'center',
        marginTop:20,
        backgroundColor:'lightgray'
    },

    
    reservaContainer: {
        width:'80%',
        textAlign:'center',
        // borderWidth:2,
        // borderColor:'green'
    },

})