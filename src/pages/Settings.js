// Utilidades
import { StyleSheet,View,Platform } from 'react-native'
import { useContext } from 'react'

// Componentes
import CustomButton from '../components/CustomButton'

// Variáveis globais
import AppContext from '../components/AppContext'


export default function Settings({navigation}) {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    function logout() {
        if(Platform.OS === 'web'){
            resetValores()
        } else {
            Alert.alert("Espere um pouco!", "Tem certeza que deseja sair?", [
                {
                    text: "Cancelar",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "SIM", onPress: resetValores }
            ]);
        }
    }

    function resetValores(){
        global.setTemConta(null)
        global.setTipoUsuario(undefined)
        global.setUserName(null)
        global.setEmail('lulinha@gmail.com')
        global.setUserPicture('')
        global.setBarcos([])
        global.setReservas([])
        global.openModal(false)
        global.setDark(false)
        navigation.navigate("Tela Inicial")
    }

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
                onPress={logout}
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

