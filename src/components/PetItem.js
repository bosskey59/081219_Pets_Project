import React from 'react'
import {connect} from 'react-redux'
import {removePet} from "../actions/index"
import {Link} from 'react-router-dom';

const PetItem = ({ pet, removePet }) => {
    return (
    <li className="collection-item">
      Pet Name: <Link to={"pets/"+pet.id}>{pet.name}</Link><br />
      Age: { pet.age } <br />
      Species: { pet.species } <br />
      <button onClick={()=>removePet(pet.id)}>Remove</button>
      
    </li>
    );
}

export default connect(null, {removePet})(PetItem)
