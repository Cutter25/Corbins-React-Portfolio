import logo from './logo.svg';
import './App.css';

// Importing components
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="Corbin"/>
      <Welcome />
    </div>
  );
}

export default App;
