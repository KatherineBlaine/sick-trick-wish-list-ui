import Trick from '../Trick/Trick';
import PropTypes from 'prop-types';
import './Tricks.css';

const Tricks = ( { tricks } ) => {
  const trickCards = tricks.map(trick => {
    return (
      <Trick 
        name={trick.name}
        obstacle={trick.obstacle}
        stance={trick.stance}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    )
  })

  return (
    <div className='card-container'>
      {trickCards}
    </div>
  )
}

export default Tricks;

Tricks.propTypes = {
  tricks: PropTypes.arrayOf(PropTypes.object)
}