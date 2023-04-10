import PropTypes from 'prop-types';
import './Trick.css';

const Trick = ( { name, obstacle, stance, tutorial } ) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1)
  const formattedStance = stance.charAt(0).toUpperCase() + stance.slice(1)

  return (
    <div className='card'>
      <p className='title'>{formattedStance} {formattedName}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  )
}

export default Trick;

Trick.propTypes = {
  name: PropTypes.string.isRequired,
  obstacle: PropTypes.string.isRequired,
  stance: PropTypes.string.isRequired,
  tutorial: PropTypes.string.isRequired
}