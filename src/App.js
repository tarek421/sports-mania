import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetail/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
