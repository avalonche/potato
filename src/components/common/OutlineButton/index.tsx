import React from 'react';
import Button from '../Button';
import styles from './styles';

const OutlineButton: React.FC<any> = (props) => {
    const {
        children,
        ...other
    } = props
    return (
        <Button style={styles.button} {...other}>
            {children}
        </Button>
    )
}

export default OutlineButton;