import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

import { firebaseService } from './services';
import { useStores } from './hooks';

import Chat from './components/Chat';
import Button from './components/common/Button';

import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import SolidButton from './components/common/SolidButton';
import OutlineButton from './components/common/OutlineButton';
import { AppConfig } from './AppConfig';

import auth, { firebase } from '@react-native-firebase/auth';
//import styles from './components/Input/styles';

declare var global: {HermesInternal: null | {}};

const App = observer(() => {
  const { userStore } = useStores()
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null): void {
    userStore.setCurrentUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebaseService.auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function login(): Promise<void> {
    const email: string = "weilon+potato@weilonying.com";
    const password: string = "potatopotato";
    try {
      await firebaseService.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function logout(): Promise<void> {
    try {
      await firebaseService.auth.signOut();
    } catch (e) {
      console.error(e.message);
    }
  }

  async function register(): Promise<void> {
    const email = "weilon+potato@weilonying.com";
    const password = "potatopotato";
    try {
      await firebaseService.auth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
    }
  }

  if (initializing) {
    return (
      <View>
        <Text>Initializing...</Text>
      </View>
    )
  }
  if (!userStore.uid) {
    return (
      <View style={styles.sectionContainer}>
        <View style={{
          flexDirection: 'row',
          flexGrow: 1,
          alignSelf: 'center',
        }}>
          <Text style={styles.sectionTitle}>Potato</Text>
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
    );
  }
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Welcome!</Text>
        <Text style={styles.sectionDescription}>You are logged in as {userStore.email}</Text>
        <View style={{
          flexDirection: 'row',
          flexGrow: 1,
        }}>
          <SolidButton onPress={logout}><Text>Logout</Text></SolidButton>
        </View>
      </View>
      <Chat/>
    </>
  );
});

export default App;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});