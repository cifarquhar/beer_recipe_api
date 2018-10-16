import React from "react";

class Star extends React.Component {

  handleClick(event) {
    event.stopPropagation();
    this.props.beer.favourite = !this.props.beer.favourite;
  }

  render(){
    console.log(this.props.beer);
    return (
    <div onClick={this.handleClick.bind(this)}>
        {this.props.beer.favourite ? `\u2B50` : '\u2606'}
    </div>
    )
  }

}

export default Star
