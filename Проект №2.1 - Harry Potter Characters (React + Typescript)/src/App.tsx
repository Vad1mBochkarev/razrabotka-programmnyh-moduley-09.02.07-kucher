import { useState } from 'react'
import './App.css'
import hermiona from './assets/hermiona.png'
import draco from './assets/draco.png'

interface Character {
  id: number
  name: string
  actor: string
  gender: string
  house: string
  wand: string
  alive: string
  image: string
}

const initialCharacters: Character[] = [
  {
    id: 1,
    name: 'Hermione Granger',
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wand: 'dragon heartstring',
    alive: 'yes',
    image: hermiona,
  },
  {
    id: 2,
    name: 'Draco Malfoy',
    actor: 'Tom Felton',
    gender: 'male',
    house: 'Slytherin',
    wand: 'unicorn tail-hair',
    alive: 'yes',
    image: draco,
  },
  {
    id: 3,
    name: 'Hermione Granger',
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wand: 'dragon heartstring',
    alive: 'yes',
    image: hermiona,
  },
]

function App() {
  const [searchName, setSearchName] = useState('')
  const [selectedSchool, setSelectedSchool] = useState('')

  const filteredCharacters = initialCharacters.filter((char) => {
    const matchesName = char.name
      .toLowerCase()
      .includes(searchName.toLowerCase().trim())
    const matchesSchool =
      selectedSchool === '' ||
      char.house.toLowerCase() === selectedSchool.toLowerCase()
    return matchesName && matchesSchool
  })

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1>Harry Potter</h1>
          <h2>View all characters from the Harry Potter universe</h2>
          <div className="input-div">
            <div className="input-group">
              <label htmlFor="name-input">Name</label>
              <input
                id="name-input"
                type="text"
                placeholder="Hermione"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="school-select">School</label>
              <select
                id="school-select"
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
              >
                <option value="">Choose one</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="cards-grid">
          {filteredCharacters.map((character) => (
            <div className="card" key={character.id}>
              <img src={character.image} alt={character.name} />
              <div className="card-body">
                <h3>{character.name}</h3>
                <p>Actor: {character.actor}</p>
                <p>Gender: {character.gender}</p>
                <p>House: {character.house}</p>
                <p>Wand core: {character.wand}</p>
                <p>Alive: {character.alive}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
