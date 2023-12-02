import React from 'react'
import Card from '../Components/Card'
import { useAppContext } from './AppContext'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useAppContext();
  const dentists = state.dentists;
  return (
    <main className="" >
      <h1>Bienvenid@</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Card 

          key={dentist.id}
          id={dentist.id}
          name={dentist.name}
          username={dentist.username}
          photo={dentist.Doctor}
          />
        ))}
      </div>
    </main>
  )
}

export default Home