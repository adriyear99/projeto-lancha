import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'

export default function CustomButton({ text,onPress,style }) {

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button,style]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button: {
        paddingVertical: 14,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 50,
    },

    buttonText: {
        fontSize:20,
        color:'#fff',
        fontFamily: 'Montserrat_Regular',
    }
})