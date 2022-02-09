import React from 'react';
import { TransitionGroup } from 'react-transition-group';

interface ListProps<T>{
  items: T[];
  renderItem: (item:T, index:number) => React.ReactNode
}

export default function List<T>(props: ListProps<T>){
  return (
    <div>
      <TransitionGroup>
        {props.items.map(props.renderItem)}
      </TransitionGroup>
    </div>
  )
}