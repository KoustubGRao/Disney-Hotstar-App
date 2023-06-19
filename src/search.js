import { Component } from 'react';
import {movies} from './movies';
import {Link} from 'react-router-dom'
import HeaderFile from './header';
import FooterFile from './footer';
import { AiOutlineSearch } from 'react-icons/ai';

class Search extends Component {
    state = {search: ''}
  
    changeSearch=(event)=>{
        const search = event.target.value;
        this.setState({search})
    }

    render(){
        const {search} = this.state;
        console.log(search);
        const moviesList=movies.filter(m=>m.title.toLowerCase().includes(search.toLowerCase()));

        return (
            <>
            <HeaderFile></HeaderFile>
            <div className='Search-page'>
                <div className='search-div'>
                    <AiOutlineSearch className='search-icon'/>               
                    <input className='search' type='search' id='search' placeholder='Search' value={search} onChange={this.changeSearch} /> 
                </div>
                <ul className="search-cards grid gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{width:'100vw'}} >
                {moviesList.map(movie=>(
                    <li className="movie-card pl-2">
                        <Link to={`/movies/${movie.id}`}><img src={movie.cardImg} alt={movie.title}/></Link>
                    </li>
                ))}
                </ul>
            </div>
            <FooterFile/>
            </> 
        )
    }
}

export default Search;