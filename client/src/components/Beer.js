import React from "react";
import Modal from "./Modal";

class Beer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
  }

  showModal(){
    this.setState({showModal: true});
  }

  hideModal(event){
    event.stopPropagation()
    this.setState({showModal: false});
  }

  mapIngredients(ingredients){
    return Object.keys(ingredients).map((ingredient, index) => {
      return <p key={index}>{ingredient}: {ingredients[ingredient]}g</p>
    })
  }

  mapHops(hops) {
    let sortedHops = Object.keys(hops).sort((a, b) => hops[b] - hops[a])
    return sortedHops.map((hop, index) => {
      return <p key={index}>{hop}: {hops[hop] >= 0 ? `${hops[hop]} mins` : `after ${hops[hop] * -1} days`}</p>
    })
  }

  render(){
    const beer = this.props.beer;

    return(
      <div>
        <div className="beer-summary" onClick={this.showModal.bind(this)}>
          <p>{beer.name}</p>
          <p>{beer.style}</p>
          <p>{beer.description}</p>
          <Modal show={this.state.showModal} handleClose={(this.hideModal.bind(this))}>
            <p>{beer.name}</p>
            <div style={{display: "inline-flex"}}>
              <div className="ingredient-div">
                {this.mapIngredients(beer.ingredients)}
              </div>
              <div className="ingredient-div">
                {this.mapHops(beer.hopSchedule)}
              </div>
            </div>
          </Modal>
        </div>
      </div>
    )
  }

}

export default Beer;