import logo from './logo.svg';
import './App.css';
import Developer from "./components/Develeper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Developer age="3" dev="Farid" country="India"/>
        <Developer age="45" dev="Hilda" country="Suécia"/>
        <Developer age="24" dev="Jhon" country="Inglaterra"/>
        <Developer age="32" dev="Felipe" country="Brasil"/>
        <Developer age="27" dev="Hermano" country="Venezuela"/>

      </header>
    </div>
  );
}

export default App;
