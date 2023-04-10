import { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ( {addTrick} ) => {
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [stance, setStance] = useState('');
  const [tutorial, setTutorial] = useState('');

  const submitTrick = event => {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      name,
      stance,
      obstacle,
      tutorial
    }
    addTrick(newTrick);
  }

  return (
    <form>
      <select name='stance' onChange={(event) => setStance(event.target.value)} className='input'>
        <option value=''>Choose Your Stance</option>
        <option value="regular">Regular</option>
        <option value="switch">Switch</option>
      </select>
      <input name='name' type='text' placeholder='Name of Trick' className='input' onChange={(event) => setName(event.target.value)}/>
      <select name='obstacle' className='input' onChange={(event) => setObstacle(event.target.value)}>
        <option value=''>Choose Your obstacle</option>
        <option value='flatground'>Flatground</option>
        <option value='ledge'>Ledge</option>
        <option value='rail'>Rail</option>
        <option value='stairs'>Stairs</option>
        <option value='pool'>Pool</option>
      </select>
      <input name='tutorial' type='text' placeholder='Link to Tutorial' className='input' onChange={(event) => setTutorial(event.target.value)}/>
      <button onClick={submitTrick}>Send it!</button>
    </form>
  )
}

export default Form;

Form.propTypes = {
  addTrick: PropTypes.func.isRequired
}