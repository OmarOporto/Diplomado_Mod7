import logo from './logo.svg';
import './App.css';
import Buttons from './components/book'

const App =() =>{

  return(
    <div className='App'>
      <header className="App-header">
        <h1>Calculadora Científica  <img src={logo} className="App-logo" alt="logo" /></h1>
        <Buttons key="Button"></Buttons>
      </header>
    </div>
  )
}

export default App;
