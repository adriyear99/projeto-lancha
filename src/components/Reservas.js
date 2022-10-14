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
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
    }

})