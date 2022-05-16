import React from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const iconLock = require('./assets/icons/lock.png');
const iconEmail = require('./assets/icons/mail.png');
const iconGoogle = require('./assets/icons/google.png');
const iconFacebook = require('./assets/icons/facebook.png');
const iconArrowBack = require('./assets/icons/back-arrow.png');

const styles = StyleSheet.create({
  root: {
    maxWidth: 800,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#00000',
    alignSelf: 'center',
  },
  signText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00000',
  },
  loginButtonText: {
    padding: 8,
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center'
  },
  buttonLoginField: {
    backgroundColor: '#3a86ff',
    width: 400,
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center'
  },
  serviceButtonField: {
    backgroundColor: '#ffff',
    borderColor: '#00000',
    borderWidth: 2,
    width: 400,
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',
  },
  serviceTextButton: {
    padding: 8,
    fontSize: 20,
    color: '#00000',
    textAlign: 'center',
  },
  iconButtonBack: {
    height: 50,
    width: 50,
  },
  inputField: {
    width: 350,
    height: 50,
    borderBottomColor: '#ffffff',
    borderWidth: 0,
    borderColor: '#ffffff',
    alignItems: 'center',
  },
  emailInputField: {
    flex: 1,
    display: 'flex',
    borderColor: '#adb5bd',
    borderRadius: 25,
    borderWidth: 2,
    alignSelf: 'center',
    width: 400,
    height: 50,
    alignItems: 'flex-end'
  },
  iconFields: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
    width: 25,
    height: 25,

  },
  iconButtonBack: {
    width: 20,
    height: 20
  }
})

export default function App() {

  const EmptyView = () => { return (<View />) }

  const [view, setView] = useState('initial')
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const SIGN_IN = 'signIn';
  const INITIAL = 'initial';

  var currentScreen = EmptyView();

  const InitialView = () => {

    return (
      <View style={styles.root}>
        <View style={{ alignItems: 'center', marginTop: '30%' }}>
          <Text style={styles.title}>Foo App</Text>
          <View style={{ paddingBottom: '10%' }} />
          <TouchableOpacity style={styles.buttonLoginField} onPress={() => { setView(SIGN_IN); }}>
            <Text style={styles.loginButtonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={{ paddingBottom: '1%' }} />
          <TouchableOpacity style={styles.buttonLoginField}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const SignIn = () => {

    return (
      <View style={styles.root}>
        <View style={{ paddingBottom: '10%' }} />
        <TouchableOpacity style={styles.iconButtonBack} onPress={() => { setView(INITIAL) }}>
          <Image style={styles.iconButtonBack} source={iconArrowBack} />
        </TouchableOpacity>
        <Text style={styles.signText} >Sign In</Text>
        <View style={{ paddingBottom: '10%' }} />
        <View>
          <TouchableOpacity style={styles.emailInputField}>
            <Image style={styles.iconFields} source={iconEmail} />
            <TextInput
              placeholder="Entre com o endereço de e-mail"
              placeholderTextColor="#adb5bd"
              autoCapitalize="none"
              onChangeText={onChangeEmail}
              value={email}
              style={styles.inputField}
              underlineColorAndroid="transparent"
            />
          </TouchableOpacity>
          <View style={{ paddingBottom: '1%' }} />
          <TouchableOpacity style={styles.emailInputField}>
            <Image style={styles.iconFields} source={iconLock} />
            <TextInput
              placeholder="Digite a senha"
              placeholderTextColor="#adb5bd"
              autoCapitalize="none"
              onChangeText={onChangePassword}
              value={password}
              style={styles.inputField}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
            />
          </TouchableOpacity>
          <View style={{ paddingBottom: '1%' }} />
          <TouchableOpacity style={styles.buttonLoginField}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          <View style={{ paddingBottom: '2%' }} />
          <Text style={{ alignSelf: 'center' }}>ou continue com</Text>
          <View style={{ paddingBottom: '2%' }} />
          <TouchableOpacity style={styles.serviceButtonField}>
            <Image style={styles.iconFields} source={iconGoogle} />
            <Text style={styles.serviceTextButton}>Continue com o Google</Text>
          </TouchableOpacity>
          <View style={{ paddingBottom: '1%' }} />
          <TouchableOpacity style={styles.serviceButtonField}>
            <Image style={styles.iconFields} source={iconFacebook} />
            <Text style={styles.serviceTextButton}>Continue com o Facebook</Text>
          </TouchableOpacity>
          <View style={{ paddingBottom: '10%' }} />
          <TouchableOpacity style={styles.buttonLoginField}>
            <Text style={styles.loginButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  if (view === INITIAL) {
    currentScreen = InitialView();
  }

  if (view === SIGN_IN) {
    currentScreen = SignIn();
  }

  return currentScreen;
}

