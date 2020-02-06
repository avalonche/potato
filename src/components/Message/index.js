import React from 'react'
import { View, Text } from 'react-native'
// styles
// import {} from './styles'

export default function Message ({ message, side }) {
    // change style based on sender/receiver (right/left side)

    return (
        <View>
            <View>
                <Text>
                    {message}
                </Text>
            </View>
        </View>
    )
}