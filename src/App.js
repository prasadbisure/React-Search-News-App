import './App.css';
import Landing from './pages/Landing'
import SearchResult from './pages/SearchResult';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

const App= () => {

   return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/search" component={SearchResult}/>
          <Route path="/" component={Landing}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
