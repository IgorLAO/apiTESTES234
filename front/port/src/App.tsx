import reactLogo from './assets/ab529c_9c02d08edc58457a9977d4f891628176~mv2.avif'
import anti from './assets/images.jpeg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a>
          <img src={anti} className="logo" alt="Vite logo" width={200} height={400}/>
        </a>
        <a>
          <img src={reactLogo} className="logo_react" alt="React logo" />
        </a>
      </div>
      <h1>IGAO DO GAS</h1>
      <div className="card">
        esse é apenas um estudo de portfólio, não tem nada de mais, apenas um teste para ver como fica
      </div>
  
    </>
  )
}

export default App
