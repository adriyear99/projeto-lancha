// Utilidades
import { StyleSheet,View,Platform,Alert,BackHandler } from 'react-native'
import { useContext,useEffect } from 'react'

// Componentes
import CustomButton from '../components/CustomButton'

// Variáveis globais
import AppContext from '../components/AppContext'

// API
import axios from 'axios'


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

    // Hardware
    useEffect(() => {
        const backAction = () => {
            navigation.navigate("Home")
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);

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

    /**
     * Envia a request para deletar conta pelo Axios e abre o modal de sucesso
     */
    async function enviarRequest(){
        // await axios.delete(global.baseURL + '/usuarios')
        Alert.alert("Que pena!", "Conta deletada com sucesso", [
            { text: "SIM", onPress: () => null, style: "cancel" }
        ]);
        setTimeout(() => {
            resetValores()
        }, 2000);
    }

    /**
     * Mostra mensagem de confirmação para deletar conta
     */
    async function deletarConta(){
        Alert.alert("Espere um pouco!", "Tem certeza que deseja deletar a conta?", [
            {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
            },
            { text: "SIM", onPress: enviarRequest }
        ]);
    }

    return (
        <View style={styles.container}>
            <CustomButton 
                text='Editar Perfil' 
                onPress={() => navigation.navigate("Editar Perfil")}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text='Ver Reservas' 
                onPress={() => navigation.navigate("Ver Reservas")}
                style={{ height:60, width:300, backgroundColor:'#4B7E94' }}
            />
            <CustomButton 
                text='Deletar Conta' 
                onPress={deletarConta}
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

