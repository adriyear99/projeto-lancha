import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Fontes
import { useFonts } from '@expo-google-fonts/montserrat'

const SocialButton = ({buttonTitle,btnType,color,backgroundColor,...rest}) => {

    let bgColor = backgroundColor;

    // Carregar fontes
    let [fontsLoaded] = useFonts({
        "Montserrat_Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat_Bold": require('../../assets/fonts/Montserrat-Bold.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    return (
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: bgColor}]} {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
        width: '80%',
        height: 100,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 20
    },

    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        fontWeight: 'bold',
    },

    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_Regular',
    }

});