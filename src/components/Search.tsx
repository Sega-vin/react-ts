import React, { FC, useState } from 'react';

interface SearchProps{
  value: string;
  onChange: (value:string) => void;
  reset: () => void;
}

const Search:FC<SearchProps> = ({value, onChange, reset}) => {

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value)
  // }

  // const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(value)
  // }

  return (
    <div>
      <input 
        type="text"
        value={value} 
        onChange={event => onChange(event.target.value)} 
      />
      <button
        onClick={() => reset()}
      >reset</button>
    </div>
  );
};

export default Search;