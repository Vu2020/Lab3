import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth'; 
import { getAuth } from 'firebase/auth'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Home = ({ navigation }) => {
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth); 
      navigation.navigate('Login');
    } catch (error) {
      console.error(`Lỗi đăng xuất: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Button style={styles.button} title="Sign out" onPress={handleLogout} />
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
  button: {
    backgroundColor: 'orange', 
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Home;
