import React from "react";

class BeerList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      beers: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/beers")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render(){
    return(
      <div>
        <h2>Recipes go here</h2>
      </div>
    )
  }

}

export default BeerList;