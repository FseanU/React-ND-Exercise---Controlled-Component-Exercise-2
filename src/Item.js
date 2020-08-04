import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li key={this.props.index}>{this.props.item}</li>
    )
  }
}

export default Item;