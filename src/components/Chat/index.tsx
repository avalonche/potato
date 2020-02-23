import React, { useState, useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, View } from 'react-native';

import { observer } from 'mobx-react-lite';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { useStores } from '../../hooks';
import { firebaseService } from '../../services';

import Input from '../Input';
import Message from '../Message';

// to do: import styles

export default observer(() => {
    const { userStore } = useStores()
    const [ messages, setMessages ] = useState<FirebaseFirestoreTypes.QueryDocumentSnapshot[]>([]);

    useEffect(() => {
        firebaseService.msgRef
        .orderBy('created_at', 'desc')
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs)
        })
    }, []);

    return (
        <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList
                inverted
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const data = item.data()
                    const side = data.user_id === userStore.uid ? 'right' : 'left'

                    return (
                        <Message side={side} message={data.message} />
                    )
                }}
                />
            </View>

            <View>
                <Input />
            </View>
        </KeyboardAvoidingView>
    )
})