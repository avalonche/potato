import React from 'react';
import { TouchableOpacity } from 'react-native'

export default function Button(props) {
    const {
        // other props
        style,
        children
    } = props
    return (
        <TouchableOpacity style={style}>
            {children}
        </TouchableOpacity>
    )
}