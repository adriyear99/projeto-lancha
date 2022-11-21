// Utilidades
import { useContext, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

// Componentes
import CustomButton from "../components/CustomButton";

// Variáveis globais
import AppContext from "../components/AppContext";

export default function EditarPerfil({ navigation }) {
    // Variáveis e métodos globais
    const global = useContext(AppContext);

    // Estados
    const [mostrarOpcoes, setMostrarOpcoes] = useState(true);

  // Renderizar componente
    return (
        <View style={styles.container}>
            <CustomButton
                text="Alterar nome de exibição"
                onPress={() => console.log("teste")}
                style={{ height: 60, width: 300, backgroundColor: "#4B7E94" }}
            />
            <CustomButton
                text="Alterar senha"
                onPress={() => console.log("teste")}
                style={{ height: 60, width: 300, backgroundColor: "#4B7E94" }}
            />
            <CustomButton
                text="Ver Reservas"
                onPress={() => console.log("teste")}
                style={{ height: 60, width: 300, backgroundColor: "#4B7E94" }}
            />
            <CustomButton
                text="Fazer Logout"
                onPress={() => navigation.navigate("Tela Inicial")}
                style={{ height: 60, width: 300, backgroundColor: "#4B7E94" }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:2,
        // borderColor:'red'
    },

    titulo: {
        color: "red",
        fontSize: 30,
        // borderWidth:2,
        // borderColor:'red',
        padding: 100,
        marginTop: 20,
        width: "60%",
    },

    input: {
        width: "90%",
        height: 40,
        paddingHorizontal: 8,
        marginBottom: 8,
        borderWidth: 2,
        borderRadius: 6,
    },

    opcaoContainer: {
        flex: 1,
        flexDirection: "row",
    },
});
