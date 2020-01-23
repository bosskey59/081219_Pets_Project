import React, { Component } from 'react'
import {connect} from "react-redux"

export class PetShow extends Component {
  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let pet = props.pets.find( pet => pet.id === paramsId);

    this.state = {
      pet: pet ? pet : { name: 'N/A', age: 'N/A', species: 'N/A'}
    }
  }


  render() {
    const { name, age, species } = this.state.pet;
    return (
      <div>
        <h3>{ name }</h3>
        <p>Age: { age }</p>
        <p>Species: { species }</p>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    pets:state.pets
  }
}

export default connect(mapStateToProps)(PetShow)
