// Utilidades
import {View,Text,StyleSheet,BackHandler,TouchableOpacity,Image,FlatList,Alert} from "react-native";
import { useEffect, useContext } from "react";

// Variáveis globais
import AppContext from "../components/AppContext";

// Expo Icons
import { Ionicons } from "@expo/vector-icons";

// API
import axios from "axios";

// Fontes
import { useFonts } from "@expo-google-fonts/montserrat";

export default function NovaReserva({ navigation }) {
    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Hardware
    useEffect(() => {
        const backAction = () => {
        navigation.navigate("Home");
        return true;
        };
        const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
        );
        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        if (global.modalOpen && global.dark) {
        global.openModal(false);
        global.setDark(false);
        }

        if ((global.barcos = [])) {
        getBoats();
        }

        if (global.barcoSelecionado != undefined) {
        console.log("Nome:", global.barcoSelecionado.nome);
        Alert.alert("Barco selecionado", `${global.barcoSelecionado.nome}`, [
            { text: "OK", onPress: () => navigation.navigate("Detalhes Reserva") },
        ]);
        }
    }, [global.barcoSelecionado]);

    /**
     *
     * @returns Lista de barcos vindo da API
     */
    async function getBoats() {
        const response = await axios.get(global.baseURL + "/embarcacoes");
        global.setBarcos(response.data);
    }

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        Montserrat_Regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
        Montserrat_Bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    });
    if (!fontsLoaded) {
        return null;
    }

    // User
    function loadPicture() {
        return (
        <View style={{ flex: 1 }}>
            {global.userPicture == undefined ? (
            <Image
                style={styles.profilePicture}
                source={require("../../assets/img/person-circle-white.png")}
            />
            ) : (
            <Image
                style={styles.profilePicture}
                source={{ uri: global.userPicture }}
            />
            )}
        </View>
        );
    }

    function selecionarBarco(barco) {
        console.log(barco);
        global.setBarcoSelecionado(barco);
    }

    function imagemBarco(modeloBarco){ 
        if(modeloBarco == 1){
            return require('../../assets/img/barcos/barco1.jpg')
        }else if(modeloBarco == 2){
            return require('../../assets/img/barcos/barco2.jpg')
        } else if(modeloBarco == 3){
            return require('../../assets/img/barcos/barco3.jpg')
        } else if(modeloBarco == 4){
            return require('../../assets/img/barcos/barco4.jpg')
        } else {
            return require('../../assets/img/Lancha.jpeg')
        }
    }

    return (
    <View style={styles.container}>
        <View style={styles.flexContainer}>
            <Ionicons
                name="arrow-back-circle-outline"
                size={50}
                color="white"
                style={styles.icon}
                onPress={() => navigation.navigate("Home")}
            />
            <Text style={styles.title}>Embarcacões</Text>
            <TouchableOpacity
                style={{ flex: 0.25, paddingRight: 5 }}
                onPress={() => navigation.navigate("Editar Perfil")}
            >
                <View style={styles.profilePicContainer}>{loadPicture()}</View>
            </TouchableOpacity>
        </View>
        <View style={styles.flatListContainer}>
            <FlatList
                horizontal={false}
                data={global.barcos}
                keyExtractor={(item) => item.idEmbarcacao}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => selecionarBarco(item)}>
                        <View style={styles.boatContainer}>
                            <Image
                                style={styles.foto}
                                source={imagemBarco(item.idModelo)}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.nome}>{item.nome}</Text>
                                <Text style={styles.desc}>
                                    {item.descricao.substring(0, 50) + "..."}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
            )}
            />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    flexContainer: {
        flexDirection: "row",
        backgroundColor: "#4B7E94",
        width: "100%",
        height: "15%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },

    icon: {
        flex: 0.25,
        paddingLeft: 10,
    },

    title: {
        flex: 1,
        color: "white",
        textAlign: "center",
        fontSize: 24,
        color: "#EFF4F8",
        fontWeight: "bold",
        justifyContent: "center",
    },

    profilePicContainer: {
        flex: 1,
        // borderWidth:2,
        // borderColor:'red',
        paddingTop: "40%",
        paddingRight: 5,
    },

    profilePicture: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        alignSelf: "center",
    },

    flatListContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#f6f6f6",
        borderRadius: 10,
        backgroundColor: "#f6f6f6",
    },

    boatContainer: {
        width: "100%",
        height: 70,
        alignSelf: "flex-start",
        flexDirection: "row",
        backgroundColor: "#E8E8E8",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        alignItems: "center",
    },

    textContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 5,
    },

    foto: {
        width: "30%",
        height: "100%",
        resizeMode: "stretch",
    },

    nome: {
        flex: 1,
        width: "70%",
        fontFamily: "Montserrat_Bold",
        fontSize: 16,
        textAlign: "left",
        paddingLeft: 10,
    },

    desc: {
        flex: 2,
        paddingLeft: 10,
        width: "95%",
    }

});