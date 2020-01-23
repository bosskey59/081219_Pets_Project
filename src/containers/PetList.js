import React, { Component } from 'react'
import {connect} from 'react-redux'
import PetItem from '../components/PetItem'
import {fetchPets} from '../actions'
import {setPets} from '../actions'
import {removeUser} from '../actions'
import {setUser} from '../actions'


export class PetList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  



  componentDidMount(){
    // this.props.fetchPets()

    fetch("http://localhost:3000/pets")
        .then(resp => resp.json())
        .then(pets => {
            this.props.setPets(pets)
        })
  }

  handleSubmit = () =>{
    const userName = document.querySelector("#userInput").value
    this.props.setUser({name: userName})
  }

  render() {
    const pets = this.props.pets.map(( pet, i ) => <PetItem key={i} pet={ pet } />)
    // const pets = []

    return (
      <div>
        <h2>Hello,{this.props.user.name}!</h2>
        <button onClick={()=>this.props.removeUser()}>remove User</button>
        <input id="userInput" /> 
        <button onClick={this.handleSubmit}>set User</button>
        <h3>Pet List</h3>
        <ul className="collection">
          { pets }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = globalStore =>{
  return{
    pets: globalStore.pets,
    user: globalStore.user
  }
}

// const mapDispatchToProps = dispatch =>{
//   return{
//     setPets: pets => dispatch(setPets(pets)),
//     removeUser: ()=> dispatch(removeUser())
//   }
// }


export default connect(mapStateToProps, {setPets, removeUser, setUser})(PetList)
