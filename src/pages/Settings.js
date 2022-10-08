// Utilidades
import { StyleSheet,Text,View,TouchableOpacity } from 'react-native'

// Componentes
import CustomButton from '../components/CustomButton'

// Expo Icons


export default function Settings({navigation}) {

    return (
        <View style={styles.container}>
            <CustomButton 
                text='Editar Perfil' 
                onPress={console.log('teste')}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text='Privacidade e Segurança' 
                onPress={console.log('teste')}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text='Acessibilidade' 
                onPress={console.log('teste')}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text='Fazer Logout' 
                onPress={console.log('teste')}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
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
        // borderWidth:2,
        // borderColor:'red'
    },

})

