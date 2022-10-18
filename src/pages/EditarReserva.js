// Utilidades
import { View,StyleSheet } from 'react-native';

export default function EditarReserva({navigation}) {

    return (
        <View style={styles.container}>
            <Text>Editar Reserva</Text>
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
    }
})