import './App.css'
import Music from './Components/Music'
import Songs from "./songs"

const App = () => {

  const songArray = Songs();
  console.log(songArray)
  return (
    <div className="App">
      <header className="App-header">
      <Music songs={songArray} />
      </header>
    </div>
  );
}

export default App;
