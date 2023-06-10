import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from "./landingPage";
import MainPage from "./mainPage";
import MoviePage from "./moviePage";
import Search from './search';
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>        
    <div className="App">
    <Switch>
          <Route exact path='/landing' component={LandingPage}/>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/movies/:id' component={MoviePage}/>
          <Route exact path='/search' component={Search}/>
          <Route component={NotFound} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;