import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Key extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'white'
    }

    this.pressHandler = () => {
      const k = this.props.value;
      this.setState({ color: 'grey' })
      return this.props.callBack(k)
    }
  }

  render() {
    return (
      <button
        className="keyboardKey"
        value={this.props.value}
        onClick={this.pressHandler}
        style={{ backgroundColor: this.state.color }}
      >
        { this.props.value}
      </button >
    );
  }

}

Key.propTypes = {
  callBack: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Key;