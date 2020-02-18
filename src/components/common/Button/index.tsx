import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {}

const Button: React.FC<ButtonProps> = (props) => {
    const { style, children, ...other } = props;
    return (
        <TouchableOpacity style={[styles.container, style]} {...other}>
            {children}
        </TouchableOpacity>
    );
}

export default Button;