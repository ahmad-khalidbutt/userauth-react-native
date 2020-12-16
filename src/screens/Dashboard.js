import React, { memo } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

const Dashboard = ({ navigation }) => {
  const user = navigation.getParam('user');
  const logout = async () => {
    await AsyncStorage.removeItem('auth_meta');
    navigation.navigate('HomeScreen');
  };
  let { username } = user;
  return (
    <Background>
      <Logo />
      <Header>Hi! {username} 👋🏻 😃</Header>
      <Button mode="outlined" onPress={logout}>
        Logout
      </Button>
    </Background>
  );
};

export default memo(Dashboard);
