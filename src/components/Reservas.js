// Utilidades
import { FlatList, StyleSheet,View } from 'react-native'
import { withNavigation } from '@react-navigation/native'

// Componentes
import CustomButton from '../components/CustomButton'
import Reserva from './Reserva'


export default function Reservas({navigation}) {

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

    /**
     * Renderiza dinamicamente o array de reservas vindo da API com foto e nome
     * @returns Dynamic rendering of reservation list
     */
    function mapReservas(){
        return reservasTeste.map((reserva) => {
            return (
                <Reserva 
                    key={reserva.id} 
                    name={reserva.nome} 
                    onPress={()=> navigation.navigate("Editar Reserva")}
                />
            )   
        })
    }

    const novaReserva = () => {
        navigation.navigate("Nova Reserva")
    }

    return (
        <View style={styles.container}>
            <FlatList
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
                        style={{ height:60, width:200, backgroundColor:'#4B7E94' }}
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
        marginTop:20
    },

    flexContainer: {
        width:'80%',
        height:800,
        alignItems:'center',
        alignSelf:'center',
        marginTop:20,
        // backgroundColor:'lightgray'
    },

    
    reservaContainer: {
        width:'80%',
        textAlign:'center',
        // borderWidth:2,
        // borderColor:'green'
    },

})