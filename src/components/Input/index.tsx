import React, { useCallback, useState } from 'react';
import { View, TextInput } from 'react-native';

import { useStores } from '../../hooks';
import { firebaseService } from '../../services';

import Button from '../common/Button'
import styles from './styles'

export default function Input() {
    const { userStore } = useStores();
    const { uid } = userStore;
    const [ message, setMessage ] = useState('')

    const handlePress = useCallback(() => {
        uid ? 
        firebaseService
            .createMessage({ message, uid})
            .then(() => setMessage(''))
        : null
    }, [message]);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder={"potato..."}
                />
            </View>
            <Button style={{ backgroundColor: 'black', height: 50, width: 50 }} onPress={handlePress}>
                {/* Add send icon */}
            </Button>
        </View>
    )
}