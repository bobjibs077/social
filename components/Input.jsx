import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native'; // Corrected import for TextInput
import { theme } from '../constants/theme'; // Ensure theme is imported correctly
import { hp } from '../helpers/common'; // Ensure hp function is imported or defined

const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyles]}>
        {props.icon && props.icon}
        <TextInput
          style={{ flex: 1 }}
          placeholder={props.placeholder} // Ensure placeholder is passed as a prop
          placeholderTextColor={theme.colors.textLight} // Using theme for placeholder color
          ref={props.inputRef} // If inputRef is provided, pass it down
          {...props} // Spread the remaining props (e.g., onchangeText, value, etc.)
        />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: hp(7.2), // Ensure hp is defined or use a fixed height if needed
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: theme.colors.text, // Ensure theme is correctly defined
        borderRadius: theme.colors.text, // Ensure theme is correctly defined
        borderCurve: 'continuous', // This might not work in React Native, you might want to remove this or use 'borderRadius'
        paddingHorizontal: 18,
        gap: 12,
    },
});
