import React from 'react';
import PropTypes from 'prop-types';
import Key from './Key';

const keyboardLines = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

function Keyboard(props) {
  return (
    <div className="keyboard">
      {
        keyboardLines.map((line, i) =>
          <div key={i} className="keyboardLine">
            {
              line.map((k) => <Key key={k} value={k} callBack={props.keyPress} />)
            }
          </div>)
      }
    </div>
  );
}

Keyboard.propTypes = {
  keyPress: PropTypes.func.isRequired,
}


export default Keyboard;