import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View, Text } from 'react-native';
import styles from './styles';
interface LoaderProps extends ActivityIndicatorProps {
    loadingMessage?: string,
}

const Loader: React.FC<LoaderProps> = (props) => {
    const { loadingMessage } = props;

    return (
        <View style={styles.container}>
            <ActivityIndicator size='large'/>
            <Text style={styles.text}>{loadingMessage}</Text>
        </View>
    );
}

export default Loader;