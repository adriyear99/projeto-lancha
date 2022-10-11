// Utilidades
import { StyleSheet,Text,View } from 'react-native'

// Componentes

// Expo Icons


export default function BoatList({navigation}) {

    return (
        <View style={styles.flexContainer}>
            <View style={styles.boatContainer}>
                <Text>Lista de Barcos</Text>
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
        width:'100%',
        justifyContent:'space-around',
    },

    boatContainer: {
        width:'80%',
        textAlign:'center'
    },

    scrollContainer: {
        width:'20%',   
        textAlign:'right',
        // borderWidth:2,
        // borderColor:'green',
        padding:20
    }

})