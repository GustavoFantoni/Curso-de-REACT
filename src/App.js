import './App.css';
import HelloWorld from './Components/HelloWorld';

function App() {

  function soma(a, b) {
    return a + b
  }

  return (
    <div className="App">
        <HelloWorld />
        <p> soma= {soma(5, 5)}</p>
    </div>
  );
}

export default App;
