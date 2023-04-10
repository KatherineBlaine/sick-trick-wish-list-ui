import './Trick.css';

const Trick = ( {name, obstacle, stance, tutorial, id} ) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1)
  const formattedStance = stance.charAt(0).toUpperCase() + stance.slice(1)

  return (
    <div className='card'>
      <p>{formattedStance} {formattedName}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial: {tutorial}</p>
    </div>
  )
}

export default Trick;