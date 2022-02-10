import axios  from 'axios';
import React, { FC, useEffect, useState } from 'react';
import TodoItem from '../../components/TodoItem';
import List from '../../components/ui/List';
import { ITodo } from '../../types/types';

const TodoPage:FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    getTodos()
  }, [])

  async function getTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    }catch(e){
      alert(e)
    }
  }

  return (
    <div>
        <List 
          items={todos} 
          renderItem={(todo: ITodo) => 
            (<TodoItem todo={todo} key={todo.id}/>)
          }
        />
    </div>
  );
};

export default TodoPage;