import React from 'react'
import { View, Text } from 'react-native'

interface MessageProps {
    message: string,
    side: string,
}

const Message: React.FC<MessageProps> = ({ message, side }) => {
    // change style based on sender/receiver (right/left side)
    const rightSide = side === 'right';

    return (
        <View>
            <View>
                <Text style={{textAlign: rightSide ? 'right' : 'left', color: 'black'}}>
                    {message}
                </Text>
            </View>
        </View>
    )
}

export default Message;
