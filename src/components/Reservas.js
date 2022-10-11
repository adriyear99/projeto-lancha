// Utilidades
import { StyleSheet,Text,View } from 'react-native'

// Componentes

// Expo Icons


export default function Reservas() {

    return (
        <View style={styles.container}>
            <Text>Reservas</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width:'80%',
        alignSelf:'center',
        marginTop:10,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: 'lightgray',
        alignItems:'center',
        justifyContent:'center'
    }

})

