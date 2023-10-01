import React, { memo } from 'react';
import './InputBox.css'


const InputBox = ({ value, setValue, exp }) => {

  return (
    <input value={value} onChange={(e) => { setValue(e.target.value) }} type="text" placeholder={exp} className='focused_input' style={{
      fontSize: '17px'
    }} />
  );
};

export default memo(InputBox);