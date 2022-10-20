// Utilidades
import { FlatList, ScrollView, StyleSheet,Text,View } from 'react-native'
import { useContext } from 'react'

// Componentes
import Boat from './Boat'

// Variáveis globais
import AppContext from '../components/AppContext'

export default function BoatList() {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    const barcos = global.barcos

    /**
     * Renderiza dinamicamente o array de barcos vindo da API com foto e nome
     * @returns Dynamic rendering of boat list
     */
    function mapBarcos(){
        return barcos.map((barco) => {
            return (
                <Boat key={barco.id} image={require('../../assets/img/Lancha.jpeg')} name={barco.nome}/>
            )   
        })
    }

    return (
        <ScrollView contentContainerStyle={styles.flexContainer}>
            <View style={styles.boatContainer}>
                {mapBarcos()}
            </View>
        </ScrollView>
        // <FlatList
        //     data={barcos}
        //     keyExtractor={(barco) => barco.id}
        //     renderItem={({barco}) => (
        //         <Boat image={require('../../assets/img/Lancha.jpeg')} name={barco.nome}/>
        //     )}
        //     // renderItem={mapBarcos}
        // />
    )
}

const styles = StyleSheet.create({

    flexContainer: {
        // flexDirection:'row'
        width:'100%',
        height:800,
        // justifyContent:'space-around',
        // alignSelf:'center',
        alignItems:'center',
        marginTop:20,
        // backgroundColor:'lightgray'
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