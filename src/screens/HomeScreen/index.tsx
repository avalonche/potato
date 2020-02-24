import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SolidButton from '../../components/common/SolidButton';
import Chat from '../../components/Chat';
import { firebaseService } from '../../services';
import { useStores } from '../../hooks';
import globalStyles from '../../styles';

function HomeScreen() {
  const { userStore } = useStores();
  
  async function logout(): Promise<void> {
    try {
      await firebaseService.auth.signOut();
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <>
      <View style={globalStyles.sectionContainer}>
        <Text style={globalStyles.sectionTitle}>Welcome!</Text>
        <Text style={globalStyles.sectionDescription}>You are logged in as {userStore.email}</Text>
        <View style={{
          flexDirection: 'row',
          flexGrow: 1,
        }}>
          <SolidButton onPress={logout}><Text>Logout</Text></SolidButton>
        </View>
      </View>
      <Chat />
    </>
  );
}

export default HomeScreen;
