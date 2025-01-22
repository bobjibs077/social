import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '../helpers/common'; // Ensure hp is imported
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme';
import { Button } from 'react-native-elements'; // Import Button
import { useRouter } from 'expo-router'; // Import router
import { Pressable } from 'react-native-web';

const Welcome = () => {
  const router = useRouter(); // Initialize router

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Welcome Image */}
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require('../assets/images/welcome.png')}
        />

        {/* Title */}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>YaDiggingInMe!</Text>
          <Text style={styles.punchline}>
            Look at you gripping good Daddy.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Button
            title="Get Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => router.push('signup')}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>
              Already have an account?
            </Text>
            <Pressable onPress={() => router.push('login')}>
              <Text style={[styles.loginText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    width: wp(100),
    height: hp(30),
    alignSelf: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extrabold,
  },
  punchline: {
    color: theme.colors.text,
    paddingHorizontal: wp(10),
    textAlign: 'center',
    fontSize: hp(1.7), // Corrected typo from 'fontsize'
  },
  footer: {
    gap: 30,
    width: '100%',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  loginText: {
    color: theme.colors.text,
    fontSize: hp(1.6),
    textAlign: 'center',
  },
});

