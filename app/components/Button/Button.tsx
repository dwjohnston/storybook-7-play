
import React from 'react';

export type ButtonProps = {

    label: string; 
    onClick: () => void; 
};



export const Button = (props: ButtonProps) => {
  const { label, onClick } = props;


  return (
    <div>
      <button onClick ={onClick}>{label}</button>
    </div>
  );
};
