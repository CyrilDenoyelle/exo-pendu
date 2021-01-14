import React from 'react';
import PropTypes from 'prop-types';

function Word(props) {
  return (
    <div className="word">
      {
        props.value.split('').map((letter, i) => (
          <p key={i} className="letter">{letter}</p>
        ))
      }
    </div>
  );
}

Word.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Word;
