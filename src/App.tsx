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

import auth, { firebase } from '@react-native-firebase/auth';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const config = {
    apiKey: "AIzaSyAUmC-oI9D4bX2_n70xFVOXmbzUNZ-2G7g",
    authDomain: "potato-12007.firebaseapp.com",
    databaseURL: "https://potato-12007.firebaseio.com",
    projectId: "potato-12007",
    storageBucket: "potato-12007.appspot.com",
    messagingSenderId: "426838262090",
    appId: "1:426838262090:web:1fb076a2289b2c3e3bc1b3"
  };

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    if (!firebase.app()) {
      firebase.initializeApp(config);
    }
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function login() {
    const email = "weilon+potato@weilonying.com";
    const password = "potatopotato";
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function register() {
    const email = "weilon+potato@weilonying.com";
    const password = "potatopotato";
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
    }
  }
  if (!user) {
    return (
      <View>
        <Button onPress={register}><Text>Register</Text></Button>
        <Button onPress={login}><Text>Login</Text></Button>
      </View>
    );
  }
  return (
    <>
      <View>
        <Text>Welcome {user.email}</Text>
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
