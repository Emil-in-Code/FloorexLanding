import './App.css'
import logo from './assets/img/logo.webp';

function App() {

  return (
    <>
      <div className="container">
        <h1 className="title">Floor<span className= "title-span">EX</span> 
        <img
          src={logo}
          alt="Floorex logo"
          className="logo"
          loading="lazy"
        />
        </h1>
      </div>
    </>
  )
}

export default App
