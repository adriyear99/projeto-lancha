// Utilidades
import { useContext,useState } from 'react'
import { View,StyleSheet,Text } from 'react-native';

// Variáveis globais
import AppContext from '../components/AppContext'


export default function EditarPerfil({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);


    // Renderizar componente
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Editar Perfil</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        // borderWidth:2,
        // borderColor:'red'
    },

    titulo: {
        color:'red',
        fontSize:30
    }
})