import React from 'react'
import { Link } from 'react-router-dom';

const PetItem = ({ pet }) => {
    return (
    <li className="collection-item">
      Pet Name: {pet.name}<br />
      Age: { pet.age } <br />
      Species: { pet.species } <br />
      <Link to={`/pets/${pet.id}`}>View</Link>
    </li>
    );
}

export default PetItem
