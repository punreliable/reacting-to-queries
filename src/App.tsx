import { useState } from 'react'
import punLogo from './assets/logo-punreliable.svg'
import Users from './components/DataFetching/Users'
import './App.scss'
import GetSinglePokemon from './components/DataFetching/Pokemon/GetSinglePokemon'

function App() {
  
  const [count, setCount] = useState(0)
  const punURL:string = 'http://punreliable.com'
  const promoURL:string = 'https://www.buymeacoffee.com/punreliable'

  return (
    <>
      <div>
        <a href={punURL} target="_blank">
          <img src={punLogo} className="logo" alt="Punreliable logo" />
        </a>
      </div>
      <h1>Data Fetching</h1>
      <div className="card">
      <Users />
      </div>
      <h1>Fetching Pokemon</h1>
      <div className="card">
        <GetSinglePokemon />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

      </div>

      <p className="read-the-docs">
        Punreliable is an educational institution. If you could consider donating, we always appreciate a cup of coffee. You can support us&nbsp;
        <a href={promoURL} target="_blank">
          here
        </a>.
      </p>
    </>
  )
}

export default App
