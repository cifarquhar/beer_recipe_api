import React from "react";
import Beer from "./Beer";

class BeerList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      beers: []
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI(){
    fetch("http://localhost:8080/beers")
      .then(response => response.json())
      .then(data => this.setState({ isLoaded: true, beers: this.mapBeerData(data.content) }));
  }

  mapBeerData(beers){
    return beers.map(((beer, index) => {
      return <Beer key={index} beer={beer} handleDelete={this.deleteBeer.bind(this)}/>;
    }));
  }

  deleteBeer(beer){
    fetch(`http://localhost:8080/beers/${beer.id}`, {
      method: "DELETE"
    })
    .then(this.callAPI())
    .catch(err => console.log(err));
  }

  render(){
    const {isLoaded, beers} = this.state;

    if (!isLoaded) {
      return <p>Waiting for beer data...</p>
    }

    return(
      <div>
        {beers}
      </div>
    )
  }

}

export default BeerList;