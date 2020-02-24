import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SolidButton from '../../components/common/SolidButton';
import Chat from '../../components/Chat';
import { firebaseService } from '../../services';
import { useStores } from '../../hooks';

function HomeScreen() {
  const { userStore } = useStores();
  const styles = StyleSheet.create({
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

  async function logout(): Promise<void> {
    try {
      await firebaseService.auth.signOut();
    } catch (e) {
      console.error(e.message);
    }
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
      <Chat />
    </>
  )
}

export default HomeScreen;
