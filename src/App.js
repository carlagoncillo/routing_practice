import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Colors from './components/Colors';
import Input from './components/Input';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>

        <Route exact path="/:input/:color/:backgroundColor">
          <Colors/>
        </Route>

        <Route exact path="/:input">
          <Input/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
