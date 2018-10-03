import React from "react";

class Add extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      name: "",
      style: "",
      description: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleStyleChange = this.handleStyleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    this.setState({name: "", style: "", description: ""});
  }

  handleNameChange(event){
    this.setState({name: event.target.value})
  }

  handleStyleChange(event) {
    this.setState({ style: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  render(){
    return(
      <div className="new-recipe-div" onSubmit={this.handleSubmit.bind(this)}>
        <p>Form to add a new recipe - work in progress</p>
        <form>
          <input type="text" placeholder="name" value={this.state.name} onChange={this.handleNameChange}/>
          <input type="text" placeholder="style" value={this.state.style} onChange={this.handleStyleChange}/>
          <textarea type="text" placeholder="description" value={this.state.description} onChange={this.handleDescriptionChange}/>
          <input type="submit" value="Add Recipe"/>
        </form>
      </div>
    )
  }

}

export default Add;