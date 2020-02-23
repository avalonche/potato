/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button from './components/common/Button';
import SolidButton from './components/common/SolidButton';
import OutlineButton from './components/common/OutlineButton';
import { AppConfig } from './AppConfig';

import auth, { firebase } from '@react-native-firebase/auth';
//import styles from './components/Input/styles';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [firebaseApp, setFirebaseApp] = useState();

  function onAuthStateChanged(user: any): void {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function maybeInitializeFirebase(): void {
    try {
      if (!firebase.app()) {
        firebase.initializeApp(AppConfig);
      }
    } catch (e) {
      firebase.initializeApp(AppConfig);
    }
  }

  useEffect(() => {
    maybeInitializeFirebase();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function login(): Promise<void> {
    const email: string = "weilon+potato@weilonying.com";
    const password: string = "potatopotato";
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function logout(): Promise<void> {
    try {
      await auth().signOut();
    } catch (e) {
      console.error(e.message);
    }
  }

  async function register(): Promise<void> {
    const email = "weilon+potato@weilonying.com";
    const password = "potatopotato";
    try {
      await auth().createUserWithEmailAndPassword(email, password);
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
  if (!user) {
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
        <Text style={styles.sectionDescription}>You are logged in as {user.email}</Text>
        <View style={{
          flexDirection: 'row',
          flexGrow: 1,
        }}>
          <SolidButton onPress={logout}><Text>Logout</Text></SolidButton>
        </View>
      </View>
    </>
  );
};

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
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
