// Utilidades
import { View,Text,StyleSheet } from 'react-native'
import { useState,useRef,useEffect,useContext } from 'react'


// Variáveis globais
import AppContext from '../components/AppContext'


// API
import CadastroLogin from './CadastroLogin'
import Home from './Home'


export default function TelaInicial({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Renderizar componente
    return (
        <View style={styles.container}>
            {global.usuarioLogado ? 
                <Home navigation={navigation}/> 
                : 
                <CadastroLogin navigation={navigation}/> 
            }
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    }

})