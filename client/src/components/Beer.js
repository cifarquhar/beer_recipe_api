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

  render(){
    const beer = this.props.beer;

    return(
      <div>
        <div style={{border: "1px solid black"}} onClick={this.showModal.bind(this)}>
          <p>{beer.name}</p>
          <p>{beer.style}</p>
          <p>{beer.description}</p>
          <Modal show={this.state.showModal} handleClose={(this.hideModal.bind(this))}>
            <p>{beer.name}</p>
            <p>More information about the beer will go in here</p>
          </Modal>
        </div>
      </div>
    )
  }

}

export default Beer;