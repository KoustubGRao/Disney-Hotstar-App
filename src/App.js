import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LandingPage from "./landingPage";
import MainPage from "./mainPage";
import MoviePage from "./moviePage";
import Search from './search';
import NotFound from "./NotFound";
import LoginPage from './login';

// class App extends Component {
//   state={movieList:movies}

//   isFav=id=>{
//     // const movieList=this.state;

//     const newList=movies.map(movie=>{

//       if (movie.id===id){
//         movie.favourite=!movie.favourite
//         console.log(movie.favourite)
//         return movie
//       }
//       return movie
//     })
//     this.setState({movieList:newList})
//   }

//   render(){

//     const {movieList}=this.state
//     return(
//       <DataChanger.Provider value={{movies:movieList,isFav:this.isFav}} >
//         <BrowserRouter>        
//           <div className="App">
//             <Switch>
//                 <Route exact path='/' component={LandingPage}/>
//                 <Route exact path='/login' component={LoginPage}/>
//                 <Route exact path='/landing' component={MainPage}/>
//                 <Route exact path='/movies/:id' component={MoviePage}/>
//                 <Route exact path='/search' component={Search}/>
//                 <Route component={NotFound} />
//             </Switch>
//           </div>
//         </BrowserRouter>
//       </DataChanger.Provider>

//     )
//   }
// }

function App() {   
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn, '-logged in');
  return (
    <BrowserRouter>        
    <div className="App">
    <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/landing' component={MainPage}/>
          <Route exact path='/login' component={LoginPage}/> 
          <Route exact path='/movies/:id' component={MoviePage}/>
          <Route exact path='/search' component={Search}/>
          <Route component={NotFound} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;