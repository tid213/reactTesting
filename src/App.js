import './App.css';
import NavBar from './components/NavBar';
import NutrientForm from './components/NutrientForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NutrientForm />
      <header className="App-header">
        <h1>Welcome to GreenNotez</h1>
        <p>
          Nutrient and Plant Health tracking.
        </p>
      </header>
    </div>
  );
}

export default App;
