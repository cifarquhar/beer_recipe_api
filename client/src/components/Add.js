import React from "react";

class Add extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      name: "",
      style: "",
      description: "",
      OG: 0,
      FG: 0,
      mashTemp: 0,
      mashTime: 0,
      boilTime: 0,
      fermantationTime: 0,
      conditioningTime: 0,
      yeast: "",
      ingredients: {},
      hopSchedule: {},
      ibu: 0,
      nextIngredientName: "",
      nextIngredientQuantity: 0,
      nextHopName: "",
      nextHopTime: 0
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleStyleChange = this.handleStyleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleOGChange = this.handleOGChange.bind(this)
    this.handleFGChange = this.handleFGChange.bind(this)
    this.handleMashTempChange = this.handleMashTempChange.bind(this)
    this.handleMashTimeChange = this.handleMashTimeChange.bind(this)
    this.handleBoilTimeChange = this.handleBoilTimeChange.bind(this)
    this.handleIBUChange = this.handleIBUChange.bind(this)
    this.handleFermentationTimeChange = this.handleFermentationTimeChange.bind(this)
    this.handleConditioningTimeChange = this.handleConditioningTimeChange.bind(this)
    this.handleYeastChange = this.handleYeastChange.bind(this)
    this.handleNewIngredientName = this.handleNewIngredientName.bind(this)
    this.handleNewIngredientQuantity = this.handleNewIngredientQuantity.bind(this)
    this.handleNewHopName = this.handleNewHopName.bind(this)
    this.handleNewHopTime = this.handleNewHopTime.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const s = this.state;

    const dataToSend = {
      name: s.name,
      style: s.style,
      description: s.description,
      OG: s.OG,
      FG: s.FG,
      mashTemp: s.mashTemp,
      mashTime: s.mashTime,
      boilTime: s.boilTime,
      fermantationTime: s.fermantationTime,
      conditioningTime: s.conditioningTime,
      yeast: s.yeast,
      ingredients: s.ingredients,
      hopSchedule: s.hopSchedule,
      ibu: s.ibu,
    }

    this.setState({
      name: "",
      style: "",
      description: "",
      OG: 0,
      FG: 0,
      mashTemp: 0,
      mashTime: 0,
      boilTime: 0,
      fermantationTime: 0,
      conditioningTime: 0,
      yeast: "",
      ingredients: {},
      hopSchedule: {},
      ibu: 0,
      nextIngredientName: "",
      nextIngredientQuantity: 0,
      nextHopName: "",
      nextHopTime: 0
    });
    event.target.reset()

    fetch("http://localhost:8080/beers", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(res => {return res})
    .catch(err => console.log(err))

  }

  handleIngredientSubmit(event){
    const s = this.state;
    event.preventDefault();
    if (s.nextIngredientName){
      let ingredients = s.ingredients;
      ingredients[s.nextIngredientName] = s.nextIngredientQuantity
      this.setState({ nextIngredientName: "", nextIngredientQuantity: 0 })
      event.target.reset()
    }
  }

  handleHopSubmit(event) {
    const s = this.state;
    event.preventDefault();
    if (s.nextHopName){
      let hops = s.hopSchedule;
      hops[s.nextHopName] = s.nextHopTime
      this.setState({ nextHopName: "", nextHopTime: 0 })
      event.target.reset()
    }
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

  handleOGChange(event) {
    this.setState({ OG: event.target.value })
  }

  handleFGChange(event) {
    this.setState({ FG: event.target.value })
  }
  
  handleMashTempChange(event) {
    this.setState({ mashTemp: event.target.value })
  }
  
  handleMashTimeChange(event) {
    this.setState({ mashTime: event.target.value })
  }
  
  handleBoilTimeChange(event) {
    this.setState({ boilTime: event.target.value })
  }

  handleIBUChange(event){
    this.setState({ ibu: event.target.value })
  }
 
  handleFermentationTimeChange(event){
    this.setState({ fermantationTime: event.target.value })
  }

  handleConditioningTimeChange(event){
    this.setState({ conditioningTime: event.target.value })
  }

  handleYeastChange(event){
    this.setState({ yeast: event.target.value })
  }

  handleNewIngredientName(event){
    this.setState({nextIngredientName: event.target.value})
  }

  handleNewIngredientQuantity(event){
    this.setState({nextIngredientQuantity: event.target.value})
  }

  handleNewHopName(event){
    this.setState({nextHopName: event.target.value})
  }

  handleNewHopTime(event){
    this.setState({nextHopTime: event.target.value})
  }

  render(){
    const s = this.state;

    return(
      <div className="new-recipe-div" >
        <p>Form to add a new recipe - work in progress</p>

        {/* Main Form */}
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-content">
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder="name" value={s.name} onChange={this.handleNameChange} id="name" name="name"/>
          </div>
          <div className="form-content">
            <label htmlFor="style">Style: </label>
            <input type="text" placeholder="style" value={s.style} onChange={this.handleStyleChange} id="style" name="style"/>
          </div>
          <div className="form-content">
            <label htmlFor="description">Description: </label>
            <textarea type="text" placeholder="description" value={s.description} onChange={this.handleDescriptionChange} id="description" name="description"/>
          </div>
          <div className="form-content">
            <label htmlFor="yeast">Yeast: </label>
            <input type="text" placeholder="yeast" value={s.yeast} onChange={this.handleYeastChange} id="yeast" name="yeast" />
          </div>
          <div className="form-content">
            <label htmlFor="ibu">IBU: </label>
            <input type="number" min="0" placeholder="0" onChange={this.handleIBUChange} id="ibu" name="ibu"/>
          </div>
          <div className="form-content">
            <label htmlFor="OG">OG: </label>
            <input type="number" min="0" placeholder="0" onChange={this.handleOGChange} id="OG" name="OG"/>
          </div>
          <div className="form-content">
            <label htmlFor="FG">FG: </label>
            <input type="number" min="0" placeholder="0" onChange={this.handleFGChange} id="FG" name="FG"/>
          </div>
          <div className="form-content">
            <label htmlFor="mashTemp">Mash Temperature (&#186;C): </label>
            <input type="number" min="0" placeholder="0" onChange={this.handleMashTempChange} id="mashTemp" name="mashTemp"/>
          </div>
          <div className="form-content">
            <label htmlFor="mashTime">Mash Time (mins): </label>
            <input type="number" min="0" placeholder="0" onChange={this.handleMashTimeChange} id="mashTime" name="mashTime"/>
          </div>
          <div className="form-content">
            <label htmlFor="boilTime">Boil Time (mins): </label>
            <input type="number" min="0" placeholder="0" onChange={this.handleBoilTimeChange} id="boilTime" name="boilTime"/>
          </div>
          <div className="form-content">
            <label htmlFor="fermentationTime">Fermentation Time (days): </label>
            <input type="number" min="0" placeholder="0" onChange={this.handleFermentationTimeChange} id="fermentationTime" name="fermentationTime"/>
          </div>
          <div className="form-content">
            <label htmlFor="conditioningTime">Conditioning Time (weeks): </label>
            <input type="number" min="0" placeholder="0" onChange={this.handleConditioningTimeChange} id="conditioningTime" name="conditioningTime"/>
          </div>
          <div className="form-content">
            <input type="submit" value="Add Recipe"/>
          </div>
        </form>

        {/* Ingredient Form */}
        <form onSubmit={this.handleIngredientSubmit.bind(this)}>
          <div className="form-content">
            <label htmlFor="ingredientName">Ingredient: </label>
            <input type="text" placeholder="ingredient name" onChange={this.handleNewIngredientName} id="ingredientName" name="ingredientName"/>
          </div>
          <div className="form-content">
            <label htmlFor="ingredientQuantity">Quantity: </label>
            <input type="number" min="0" placeholder="0" onChange={this.handleNewIngredientQuantity}/>
          </div>
          <div className="form-content">
            <input type="submit" value="Add Ingredient" />
          </div>
        </form>

        {/* Hop Form */}
        <form onSubmit={this.handleHopSubmit.bind(this)}>
          <div className="form-content">
            <label htmlFor="hopName">Hop/Additive (incl. weight): </label>
            <input type="text" placeholder="hop/additive name" onChange={this.handleNewHopName} id="hopName" name="hopName" />
          </div>
          <div className="form-content">
            <label htmlFor="hopTime">Time: </label>
            <input type="number" placeholder="0" onChange={this.handleNewHopTime} />
          </div>
          <div className="form-content">
            <input type="submit" value="Add Hop" />
          </div>
        </form>


      </div>
    )
  }

}

export default Add;