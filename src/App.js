
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/Page/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
