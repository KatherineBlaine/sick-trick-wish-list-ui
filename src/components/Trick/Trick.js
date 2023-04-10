import './Trick.css';

const Trick = ( {name, obstacle, stance, tutorial, id} ) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{obstacle}</p>
      <p>{stance}</p>
      <p>{tutorial}</p>
    </div>
  )
}

export default Trick;