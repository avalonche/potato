import React, { useCallback, useState } from 'react'
import { View, TextInput } from 'react-native'

import Button from '../common/Button'

import styles from './styles'

export default function Input() {
    const [ message, setMessage ] = useState('')

    const handlePress = useCallback(() => {
        // to do: send to fire base
    }, [message])

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder={"potato..."}
                />

                <Button onPress={handlePress}>
                    {/* Add send icon */}
                </Button>
            </View>
        </View>
    )
}