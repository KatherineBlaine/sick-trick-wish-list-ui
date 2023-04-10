import React, { useState, useEffect } from 'react';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';
import './App.css';

const App = () => {
  const [tricks, setTricks] = useState([]);
  const [error, setError] = useState('')

  const getTricks = async () => {
    const url = 'http://localhost:3001/api/v1/tricks'
    setError('')

    try {
      const response = await fetch(url);
      const tricks = await response.json();
      setTricks(tricks)
    } catch(error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getTricks()
  }, [])

  const addTrick = (newTrick) => {
    setTricks([...tricks, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <Tricks tricks={tricks}/>
    </div>
  );
}

export default App;