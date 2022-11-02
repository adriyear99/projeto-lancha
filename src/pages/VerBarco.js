// Utilidades
import { View,Text,StyleSheet,Image } from 'react-native'
import { useContext } from 'react'

// Expo Icons
import { Ionicons } from '@expo/vector-icons'

// Variáveis globais
import AppContext from '../components/AppContext'


export default function VerBarco() {

    // Variáveis e métodos globais
    const global = useContext(AppContext);

    function loadPicture() {
        if (global.userPicture.includes('http')){
            return (<Image style={styles.profilePicture} source={{uri:userPicture}}/>);
        } else {   
            global.userName = "Nome usuário";
            return (<Image style={styles.profilePicture} source={require('../../assets/img/person-circle-white.png')}/>);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.blueContainer}>
                <View style={styles.flexContainer}>
                    <Ionicons 
                        name="arrow-back-circle-outline" 
                        size={100} 
                        color="white" 
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Detalhes</Text>
                    <View style={styles.profilePicContainer}>
                        {loadPicture()}
                    </View>
                </View>

            </View>
            <View style={styles.whiteContainer}>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },

    blueContainer: {
        flex:1,
        width:'100%',
        height:'40%',
        backgroundColor:'#4B7E94'
    },

    whiteContainer: {

    },

    flexContainer: {
        flexDirection:'row',
        // borderWidth:2,
        // borderColor:'blue',
        justifyContent:'space-between'
    },

    icon: {
        flex:1,
        alignSelf:'center',
        textAlign:'left',
        paddingLeft:20
    },

    text: {
        flex:1,
        fontSize:40,
        color:'white',
        // borderColor:'green',
        // borderWidth:2,
        textAlign:'center',
        alignSelf:'center'
    },

    profilePicContainer: {
        flex:1,
        // borderColor:'red',
        // borderWidth:2,
        paddingRight:20,
        paddingVertical:10
    },

    profilePicture: {
        width:100,
        height:100,
        borderRadius:50,
        alignSelf:'flex-end',
    },
})