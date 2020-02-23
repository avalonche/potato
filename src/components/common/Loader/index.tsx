import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

interface LoaderProps extends ActivityIndicatorProps {}

const Loader: React.FC<LoaderProps> = (props) => {
    return (
        <ActivityIndicator/>
    );
}

export default Loader;