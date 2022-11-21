// Utilidades
import { StyleSheet,View } from 'react-native'

// Componentes
import CustomButton from '../components/CustomButton'


export default function Settings({navigation}) {

    return (
        <View style={styles.container}>
            <CustomButton 
                text='Editar Perfil' 
                onPress={() => navigation.navigate("Editar Perfil")}
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
    },
    
    profilePicContainer: {
        width:'30%',
        alignSelf:'center',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0,
        borderColor:'white',
        height:'30%',
        opacity: 1,
    },

    profilePicture: {
        width:200,
        height:200,
        borderRadius:100,
        margin:'auto',
    }

})

