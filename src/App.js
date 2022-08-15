import './App.css';
import Music from './Components/Music';

const App = () => {

  const songArray = [{
    id: 1,
    picture: String,
    musicTitle: 'Beyonce - Halo',
    file: String
  },
  {
    id: 2,
    picture: String,
    musicTitle: 'U2 - Beautiful Day',
    file: String
  },
  {
    id: 3
    picture: String,
    musicTitle: 'The Corrs - Summer Sunshine',
    file: String
  },
  {
    id: 4
    picture: String,
    musicTitle: 'Gin Blossoms - Found Out About You',
    file: String
  },
  {
    id: 5
    picture: String,
    musicTitle: 'The Killers - Mr. Brightside',
    file: String
  }
];

  return (
    <div className="App">
      <header className="App-header">
      <Music songs={songArray} />
      </header>
    </div>
  );
}

export default App;
