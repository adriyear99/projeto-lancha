// Utilidades
import { View,Text,StyleSheet,BackHandler } from 'react-native'
import { useContext,useEffect } from 'react'


// Variáveis globais
import AppContext from '../components/AppContext'


export default function VerReservas({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Hardware
    useEffect(() => {
        const backAction = () => {
            navigation.navigate("Configurações")
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);

    // Renderizar componente
    return (
        <View style={styles.container}>
            <Text>Ver Reservas</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    }

})