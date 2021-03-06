import React, { memo, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => {
  useEffect(async () => {
    const user = await AsyncStorage.getItem('auth_meta');
    if (user) {
      navigation.navigate('Dashboard', {
        user: JSON.parse(user),
      });
    }
  });
  return (
    <Background>
      <Logo />
      <Header>User Management</Header>

      <Paragraph>Get Started</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  );
};

export default memo(HomeScreen);
