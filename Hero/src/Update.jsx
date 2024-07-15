import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Update.css';

export default function Update({ heroes, setHeroes }) {
  const history = useHistory();
  const location = useLocation();
  const { index } = location.state;
  const [newText, setNewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedHeroes = [...heroes];
    updatedHeroes[index].text = newText;
    setHeroes(updatedHeroes);
    history.push('/View');
  };

  return (
    <form className='update-form' onSubmit={handleSubmit}>
      <label htmlFor="text">Updated Caption:</label>
      <input
        id="text"
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}
