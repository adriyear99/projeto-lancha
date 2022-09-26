// Utilidades
import { StyleSheet,Text,View } from 'react-native'

// Componentes

// Expo Icons


export default function Settings({navigation}) {

    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#fff',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
    },

})

