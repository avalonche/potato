import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OutlineButton from '../../components/common/OutlineButton';
import SolidButton from '../../components/common/SolidButton';
import { firebaseService } from '../../services';
import globalStyles from '../../styles';

const LoginScreen = () => {
  async function login(): Promise<void> {
    const email: string = 'weilon+potato@weilonying.com';
    const password: string = 'potatopotato';
    try {
      await firebaseService.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function register(): Promise<void> {
    const email = 'weilon+potato@weilonying.com';
    const password = 'potatopotato';
    try {
      await firebaseService.auth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
    }
  }
  
  return (
    <>
      <View style={globalStyles.sectionContainer}>
        <View style={{
          flexDirection: 'row',
          flexGrow: 1,
          alignSelf: 'center',
        }}>
          <Text style={globalStyles.sectionTitle}>Potato</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            flexGrow: 1,
            alignSelf: 'center',
          }}>
          <OutlineButton onPress={register}><Text>Register</Text></OutlineButton>
          <SolidButton onPress={login}><Text>Login</Text></SolidButton>
        </View>
      </View>
    </>
  );
}

export default LoginScreen;