import { View, Text, Button } from "react-native-web";
import React from "react";
import { useRouter } from "expo-router";
import { theme } from '../constants/theme'; // Adjust path based on your project structure


const index = () => {
    const router = useRouter();
    return (
        <ScreenWrapper>
            <Text>Index</Text>
            <Button title="Welcome" onPress={()=> router.push('welcome')} />
        </ScreenWrapper>
    )
}

export default index;