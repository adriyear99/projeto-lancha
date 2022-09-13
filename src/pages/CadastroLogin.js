import { View,Text,Button,StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function CadastroLogin({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Novo usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Já tenho conta</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        backgroundColor:'#7191c7',
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },

    button: {
        width: '100%',
        height: 60,
        backgroundColor: '#45d800',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        padding:40
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }

})