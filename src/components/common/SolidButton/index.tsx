import React from 'react';
import Button from '../Button';
import styles from './styles';

const SolidButton: React.FC<any> = (props) => {
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

export default SolidButton;