import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { validateEmail, ValidateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, onChangeEmail] = useState('');

  const isEmailValid = validateEmail(email) != null ? true : false;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <Image
          style={styles.logo}
          source={require('../assets/little-lemon-logo-grey.png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.regularText}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          style={styles.inputText}
          autoCapitalize="none"
          onChangeText={onChangeEmail}
          value={email}
          keyboardType="email-address"
          placeholder="Type your email" />
        <Pressable
          style={ isEmailValid ? styles.button : styles.buttonDisabled }
          onPress={ () => alert('Thanks for subscribing, stay tuned!')}
          disabled={!isEmailValid}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  logo : {
    alignSelf: 'center',
    marginTop: 40,
    height: 100,
    width: 100,
    resizeMode: "contain"
  },
  regularText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  inputText: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: '#EDEFEE'
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#495E57',
    borderRadius: 8,
    backgroundColor: '#495E57'
  },
  buttonDisabled: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: 'gray'
  },
  buttonText: {
    fontSize: 16,
    color: '#EDEFEE',
    textAlign: 'center'
  }
});

export default SubscribeScreen;
