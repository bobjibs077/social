import { StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Icon from '../assets/icons'; // Adjust path as needed
import { theme } from '../constants/theme'; // Ensure the correct import

const BackButton = ({ size = 26, router }) => {
    return (
        <Pressable onPress={() => router.back()} style={styles.button}>
        <Icon name="arrowLeft" strokeWidth={2.5} size={size} color={theme.colors.text} />
    </Pressable>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        padding: 5,
        borderRadius: theme.radius.sm || 12, // Fallback value if theme.radius.sm is undefined
        backgroundColor: 'rgba(0,0,0,0.07)',
    },
});
