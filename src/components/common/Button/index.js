import React from 'react';
import { TouchableOpacity, ActionSheetIOS } from 'react-native';

export default function Button(props) {
    const {
        // other props
        style,
        children,
        ...other
    } = props
    return (
        <TouchableOpacity style={style} {...other}>
            {children}
        </TouchableOpacity>
    )
}