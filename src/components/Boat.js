// Utilidades
import { StyleSheet,Text,View } from 'react-native'

// Componentes

// Expo Icons


export default function Boat({navigation}) {

    const barcosTeste = [
        {
            foto:'foto 1',
            nome:'barco 1'
        },
        {
            foto:'foto 2',
            nome:'barco 2'
        },
        {
            foto:'foto 3',
            nome:'barco 3'
        }
    ]

    return (
        <View style={styles.container}>
            {barcosTeste.map((barco) => {
                <View style={styles.boatContainer}>
                    <Text style={styles.foto}>{barco.foto}</Text>
                    <Text style={styles.nome}>{barco.nome}</Text>
                </View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection:'column'
    },

    boatContainer: {
        flexDirection:'row',
        marginVertical:10
    },

    foto: {
        width:'20%'
    },

    nome: {
        width:'80%'
    }

})