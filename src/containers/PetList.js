import React, { Component } from 'react'
import {connect} from 'react-redux'
import PetItem from '../components/PetItem'
import {fetchPets} from '../actions'
import {setPets} from '../actions'


export class PetList extends Component {



  componentDidMount(){
    // this.props.fetchPets()

    fetch("http://localhost:3000/pets")
        .then(resp => resp.json())
        .then(pets => {
            this.props.setPets(pets)
        })
  }

  render() {
    const pets = this.props.pets.map(( pet, i ) => <PetItem key={i} pet={ pet } />)
    // const pets = []

    return (
      <div>
        <h3>Pet List</h3>
        <ul className="collection">
          { pets }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    pets: state.pets
  }
}


export default connect(mapStateToProps, {setPets})(PetList)
