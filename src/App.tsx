import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

import { firebaseService } from './services';
import { useStores } from './hooks';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

import { FirebaseAuthTypes } from '@react-native-firebase/auth';

declare var global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

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

  if (initializing) {
    return (
      <View>
        <Text>Initializing...</Text>
      </View>
    )
  }

  const initialScreen = userStore.uid ? 'Home' : 'LoginScreen';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          userStore.uid ?
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Potato' }} /> :
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
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