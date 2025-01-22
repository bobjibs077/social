import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import React from 'react';
import { theme } from '../constants/theme';
import { hp } from '../helpers/common';
import Loading from './Loading';

const Button = ({ buttonStyle, textStyle, title, onPress = () => {}, loading = false, hasShadow = true }) => {
    const shadowStyle = Platform.select({
        web: {
            boxShadow: '0px 10px 8px rgba(0, 0, 0, 0.2)', // Web-specific shadow
        },
        default: {
            shadowColor: theme.colors.dark,
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 4,
        },
    });

    if (loading) {
        return (
            <View style={[styles.button, buttonStyle, { backgroundColor: 'white' }]}>
                <Loading />
            </View>
        );
    }

    return (
        <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.radius.xl, // Using borderRadius instead of borderCurve
    },
    text: {
        color: 'white',
        fontSize: hp(2.5),
        fontWeight: theme.fonts.bold,
    },
});
