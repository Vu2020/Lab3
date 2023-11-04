import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; 
import KeyIcon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Login from './Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Mật khẩu và mật khẩu xác nhận không khớp.");
      return;
    }

    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully');
    } catch (error) {
      setError(`Lỗi đăng ký người dùng: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a new account!</Text>
      <View style={styles.inputContainer}>
      <MaterialIcon
        name="email"
        size={20}
        color="gray"
        style={styles.icon2}
       />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
      <KeyIcon
       name="key-variant"
       size={20}
       color="gray"
       style={styles.icon2}
      />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={passwordHidden}
        />
        <Icon
          name={passwordHidden ? 'eye-slash' : 'eye'}
          size={20}
          color="gray"
          onPress={() => setPasswordHidden(!passwordHidden)}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
      <KeyIcon
        name="key-variant"
        size={20}
        color="gray"
        style={styles.icon2}
      />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={confirmPasswordHidden}
        />
        <Icon
          name={confirmPasswordHidden ? 'eye-slash' : 'eye'}
          size={20}
          color="gray"
          onPress={() => setConfirmPasswordHidden(!confirmPasswordHidden)}
          style={styles.icon}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.borderlessButtonContainer}
        onPress={() => navigation.navigate('Login')} 
      >
        <Text style={styles.borderlessButtonText}>Already have an account?</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    flex: 1, 
    height: 40,
    paddingHorizontal: 10,
  },
  icon: {
    right:12, 
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'orange', 
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  icon2:{
    left:2,
  },
  borderlessButtonContainer: {
    color:'white',
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
    },
    borderlessButtonText: {
      color: 'blue', 
    },
});

export default Register;
