import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default function CustomButton({ text,onPress,style }) {
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
        borderRadius: 50
    },

    buttonText: {
        fontSize:20,
        color:'#fff',
        fontFamily: 'Montserrat_Regular',
    }
})