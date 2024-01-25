import './App.css';
import HelloWorld from './Components/HelloWorld';
import MyName from './Components/MyName';
import Person from './Components/Person';


function App() {

  const nome = "João";
  return (
    <div className="App">
        <HelloWorld />
        <MyName name="Gustavo"/>
        <MyName name={nome} />
        <Person nome="Rodrigo" idade="28" profissao="Dev-Sênior"/>
    </div>
  );
}

export default App;
