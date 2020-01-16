import React from 'react'
import {connect} from 'react-redux'
import {removePet} from "../actions/index"

const PetItem = ({ pet, removePet }) => {
    return (
    <li className="collection-item">
      Pet Name: {pet.name}<br />
      Age: { pet.age } <br />
      Species: { pet.species } <br />
      <button onClick={()=>removePet(pet.id)}>Remove</button>
      
    </li>
    );
}

export default connect(null, {removePet})(PetItem)
