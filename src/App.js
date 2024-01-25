import './App.css';

function App() {

  function soma(a, b) {
    return a + b
  }

  return (
    <div className="App">
        <p>
        Hello, world!
        </p>
        <p> soma= {soma(5, 5)}</p>
    </div>
  );
}

export default App;
