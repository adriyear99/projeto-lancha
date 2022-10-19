// Utilidades
import { FlatList, ScrollView, StyleSheet,Text,View } from 'react-native'

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
        },
        {
            id:6,
            foto:'foto 6',
            nome:'Barco 6'
        },
        {
            id:7,
            foto:'foto 7',
            nome:'Barco 7'
        },
        {
            id:8,
            foto:'foto 8',
            nome:'Barco 8'
        },
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

    const mapBarcos2 = (barco) => {
        return (
            <Boat key={barco.id} image={require('../../assets/img/Lancha.jpeg')} name={barco.nome}/>
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.flexContainer}>
            <View style={styles.boatContainer}>
                {mapBarcos()}
            </View>
        </ScrollView>
        // <FlatList
        //     data={barcosTeste}
        //     keyExtractor={(barco) => barco.id}
        //     renderItem={({barco}) => (
        //         <Boat image={require('../../assets/img/Lancha.jpeg')} name={barco.nome}/>
        //     )}
        //     // renderItem={mapBarcos2}
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