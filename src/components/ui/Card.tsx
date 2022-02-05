import React, {FC} from 'react';

export enum CardVariant {
  outlined='outlined',
  default='default'
}

interface CardProps {
  width?: string;
  height?: string;
  variant?: CardVariant,
  color?: string;
}

const Card: FC<CardProps> = 
  ({
    width, 
    height, 
    children,
    variant,
    color
  }) => {
  return (
    <div style={{
      width, 
      height, 
      color,
      border: variant === CardVariant.outlined 
      ? '1px solid gray' : '',
      background: variant === CardVariant.outlined 
      ? '#fff' : '#f2f2f2',
      padding: '20px',
      margin: '20px'
    }}>
      {children}
    </div>
  );
};

export default Card;