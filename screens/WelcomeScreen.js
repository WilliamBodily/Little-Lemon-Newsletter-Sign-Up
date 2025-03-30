import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/little-lemon-logo.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={styles.regularText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        style={styles.button}
        onPress={ () => navigation.navigate('Subscribe')
        }>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  logo: {
    alignSelf: 'center',
    width: 120,
    height: 230
  },
  regularText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#495E57',
    borderRadius: 8,
    backgroundColor: '#495E57',
    alignItems: 'stretch'
  },
  buttonText: {
    fontSize: 16,
    color: '#EDEFEE',
    textAlign: 'center'
  }
});

export default WelcomeScreen;
