import React from 'react';
import Button from '../Button';
import globalStyles from '../../../styles';

const OutlineButton: React.FC<any> = (props) => {
  const {
    children,
    ...other
  } = props;
  return (
    <Button style={globalStyles.outlineButton} {...other}>
      {children}
    </Button>
  );
}

export default OutlineButton;