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
        <option value="regular">Regular</option>
        <option value="switch">Switch</option>
      </select>
      <input type='text' placeholder='Name of Trick'/>
      <select name='obstacle'>
        <option value=''>Choose Your obstacle</option>
        <option value='flatground'>Flatground</option>
        <option value='ledge'>Ledge</option>
        <option value='rail'>Rail</option>
        <option value='stairs'>Stairs</option>
        <option value='pool'>Pool</option>
      </select>
      <input type='text' placeholder='Link to Tutorial'/>
      <button>Send it!</button>
    </form>
  )
}

export default Form;