import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'

import Input from '../Input'
import Message from '../Message'

// to do: import styles

export default function Chat() {
    // not sure if <KeyboardAvoidingView/> is more suitable
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    inverted
                    data={}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Message/>
                    )}
                />
            </View>

            <View>
                <Input />
            </View>
        </SafeAreaView>
    )
}