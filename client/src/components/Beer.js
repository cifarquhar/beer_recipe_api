import React from "react";

class Beer extends React.Component{

  render(){
    const beer = this.props.beer;

    return(
      <div style={{border: "1px solid black"}}>
        <p>{beer.name}</p>
        <p>{beer.style}</p>
        <p>{beer.description}</p>
      </div>
    )
  }

}

export default Beer;