import React, { useState, useEffect } from 'react';
import Tricks from '../Tricks/Tricks';
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
      console.log(tricks)
    } catch(error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getTricks()
  }, [])


  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks tricks={tricks}/>
    </div>
  );

}

export default App;