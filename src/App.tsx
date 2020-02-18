import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

import { firebaseService } from './services';
import { useStores } from './hooks';

import Chat from './components/Chat';
import Button from './components/common/Button';

const App = observer(() => {
  const { userStore } = useStores()
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user: any): void {
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
          
          <Button style={styles.button} onPress={register}><Text>Register</Text></Button>
          <Button style={styles.button} onPress={login}><Text>Login</Text></Button>
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
          <Button style={styles.button} onPress={logout}>
            <Text>Logout</Text>
          </Button>
        </View>
      </View>
      <Chat/>
    </>
  );
});

export default App;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'orange',
    borderRadius: 5
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