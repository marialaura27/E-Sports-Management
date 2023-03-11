import { Route, Switch } from "react-router-dom";
import './App.css';
import CriarTime from './pages/CriarTime';
import CriarJogador from './pages/CriarJogador';
import Home from './pages/Home';
import Jogadores from './pages/Jogadores';
import Times from './pages/Times';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/criar-jogador" component={CriarJogador}/>
          <Route exact path="/criar-time" component={CriarTime}/>
          <Route exact path="/jogadores" component={Jogadores}/>
          <Route exact path="/times" component={Times}/>
        </Switch>
    </div>
  );
}

export default App;
