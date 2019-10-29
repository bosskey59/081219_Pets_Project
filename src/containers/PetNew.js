import React, { Component } from 'react'

export class PetNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      species: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // add the pet
    this.props.addPet( this.state );
    // redirect to /pets
    this.props.history.push('/pets');
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h3>Create Pet</h3>
        <div className="input-field">
          <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange }/>
          <label htmlFor="name">Pet Name</label>
        </div>
        <div className="input-field">
          <input type="text" name="age" id="age" value={ this.state.age } onChange={ this.handleChange }/>
          <label htmlFor="age">Pet Age</label>
        </div>
        <div className="input-field">
          <input type="text" name="species" id="species" value={ this.state.species } onChange={ this.handleChange }/>
          <label htmlFor="species">Pet Species</label>
        </div>

        <input type="submit" value="Create Pet" className="btn" />
      </form>
    )
  }
}

export default PetNew
