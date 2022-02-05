import React, {FC} from 'react';
import { ITodo } from '../types/types';
import Card from './ui/Card';

interface TodoItemProps{
  todo: ITodo
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {
  return (
    <div>
      <Card>
        <div>
          <h2>{todo.title}</h2>
          {/* <input type="checkbox" checked={todo.completed} /> */}
        </div>
        <button>Удалить</button>
      </Card>
    </div>
  );
};

export default TodoItem;