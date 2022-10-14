// Utilidades
import { ScrollView, StyleSheet,Text,View } from 'react-native'

// Componentes
import Boat from './Boat'

// Expo Icons


export default function BoatList() {

    const barcosTeste = [
        {
            id:1,
            foto:'foto 1',
            nome:'Barco 1'
        },
        {
            id:2,
            foto:'foto 2',
            nome:'Barco 2'
        },
        {
            id:3,
            foto:'foto 3',
            nome:'Barco 3'
        },
        {
            id:4,
            foto:'foto 4',
            nome:'Barco 4'
        },
        {
            id:5,
            foto:'foto 5',
            nome:'Barco 5'
        }
    ]

    /**
     * Renderiza dinamicamente o array de barcos vindo da API com foto e nome
     * @returns Dynamic rendering of boat list
     */
    function mapBarcos(){
        return barcosTeste.map((barco) => {
            return (
                <Boat key={barco.id} image={require('../../assets/img/Lancha.jpeg')} name={barco.nome}/>
            )   
        })
    }

    return (
        <View style={styles.flexContainer}>
            <View style={styles.boatContainer}>
                {mapBarcos()}
            </View>
            <View style={styles.scrollContainer}>
                <Text>Scroll</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    flexContainer: {
        flexDirection:'row',
        width:'80%',
        height:800,
        justifyContent:'space-around',
        alignSelf:'center',
        marginTop:20,
        backgroundColor:'lightgray'
    },

    boatContainer: {
        width:'80%',
        textAlign:'center',
        // borderWidth:2,
        // borderColor:'green'
    },

    scrollContainer: {
        width:'10%',   
        textAlign:'right',
        borderWidth:2,
        borderColor:'blue',
        padding:20
    }

})