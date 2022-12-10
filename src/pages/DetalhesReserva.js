// Utilidades
import { Text,StyleSheet,View} from 'react-native'
import { useState, useRef,   useContext  } from 'react'

// Variáveis globais
import AppContext from '../components/AppContext'



export default function DetalhesReserva({ navigation }) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    return <>
        <View style={styles.container}>
            <Text>Detalhes Reserva</Text>
        </View>

    </>
}

const styles = StyleSheet.create({

})