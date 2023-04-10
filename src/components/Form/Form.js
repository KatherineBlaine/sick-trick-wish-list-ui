import { useState, useEffect } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [stance, setStance] = useState('')
  const [tutorial, setTutorial] = useState('')

  return (
    <form>
      <select name='stance'>
        <option value=''>Choose Your Stance</option>
      </select>
      <input type='text' placeholder='Name of Trick'/>
      <select name='obstacle'>
        <option value=''>Choose Your obstacle</option>
      </select>
      <input type='text' placeholder='Link to Tutorial'/>
      <button>Send it!</button>
    </form>
  )
}

export default Form;