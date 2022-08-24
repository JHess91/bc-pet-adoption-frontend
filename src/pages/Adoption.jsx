import { useState } from 'react'

const PetAdoption = () => {
  const [pets, setPets] = useState([])

  const getPets = () => {
    fetch('http://localhost:4000')
      .then((response) => response.json())
      .then((responseData) => setPets(responseData))
      .catch((err) => console.error(err))
  }

  const addPets = () => {
    const petObject = {
      breed: 'Pitbull',
      name: 'Oryx',
      age: '6',
    }

    fetch('http://localhost:4000/add-pets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petObject),
    })
  }

  const deletePets = (name) => {
    console.log(name)
    fetch(`http://localhost:4000/delete-pets?name=${name}`)
    .then((response) => response.json())
    .then((responseData) => setPets(responseData))
    .catch((err) => console.error(err))

  }

  return (
    <>
      <h1>Adoption page</h1>
      <button onClick={getPets}>Get Pets</button>
      <button onClick={addPets}>Add pets</button>
      <button onClick={deletePets('buddy')}>Delete Pet</button>
      {pets.map((eachPet) => {
        return (
          <div>
            {eachPet.breed} {eachPet.name} {eachPet.age} 
          </div>
        )
      })}
    </>
  )
}

export default PetAdoption
