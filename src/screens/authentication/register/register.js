import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import {firebase} from '../../../firebase/config';
import styles from './styles';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const usersRef = firebase.firestore().collection('users');
  const registerSuccToast = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Registration succesfull',
      text2: 'Directing you to home screen now',
    });
  };
  const passErrorToast = () => {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: 'Passwords not matching',
      text2: 'Try checking your passwords',
    });
  };
  const onLoginPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      passErrorToast();
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log('res', response);
        registerSuccToast();
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
        };
        usersRef
          .doc(uid)
          .set(data)
          .catch(error => {
            alert(error); 
          });
      })
      .catch(error => {
        alert(error);
      });
    navigation.navigate('Login');
  };
  const {
    container,
    input,
    button,
    buttonTitle,
    footerView,
    footerText,
    footerLink,
  } = styles;
  return (
    <View style={container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <TextInput
          style={input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={button}
          onPress={() => onRegisterPress()}>
          <Text style={buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={footerView}>
          <Text style={footerText}>
            Already got an account?{' '}
            <Text onPress={onLoginPress} style={footerLink}>
              Log in
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RegisterScreen;
