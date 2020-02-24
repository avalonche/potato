import React from 'react';
import Button from '../Button';
import globalStyles from '../../../styles';

const SolidButton: React.FC<any> = (props) => {
  const {
    children,
    ...other
  } = props
  return (
    <Button style={globalStyles.solidButton} {...other}>
      {children}
    </Button>
  )
}

export default SolidButton;