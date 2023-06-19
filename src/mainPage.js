import {Link} from 'react-router-dom';
import {movies} from "./movies";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSelector } from 'react-redux';
import FooterFile from './footer';

const SliderDiv = () => {
    let trend_max=2019;
    let recommend_max=0;
    let new_max=0;
    let hotstar_max=0;

    movies.forEach(movie=>{
        const subTitle = movie.subTitle;
        const year = subTitle.match(/\d{4}/);
        if(movie.type==='recommend'){
            if(parseInt(year[0],10)>recommend_max)
            {
                recommend_max = parseInt(year[0],10);
            }
        }
        if(movie.type==='new'){
            if(parseInt(year[0],10)>new_max)
            {
                new_max = parseInt(year[0],10);
            }
        }
        if(movie.type==='original'){
            if(parseInt(year[0],10)>hotstar_max)
            {
                hotstar_max = parseInt(year[0],10);
            }
        }
    })
    const trend_string = trend_max.toString();
    const recommend_string = recommend_max.toString();
    const new_string = new_max.toString();
    const hotstar_string = hotstar_max.toString();
    // console.log(trend_string,recommend_string,new_string,hotstar_string);

    const filteredMovies1 = movies.filter(movie => (movie.subTitle.includes(trend_string)&&(movie.type.includes('trending'))));
    const filteredMovies2 = movies.filter(movie => (movie.subTitle.includes(recommend_string)&&(movie.type.includes('recommend'))));
    const filteredMovies3 = movies.filter(movie => (movie.subTitle.includes(new_string)&&(movie.type.includes('new'))));
    const filteredMovies4 = movies.filter(movie => (movie.subTitle.includes(hotstar_string)&&(movie.type.includes('original'))));

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
      } 


      return( 
        <Slider {...settings} style={{padding:'4',marginRight:'30px'}}>
            {
            filteredMovies1.map(movie=>{
                return(
                    <Link to={`movies/${movie.id}`}>
                    <div style={{backgroundImage:`url(${movie.backgroundImg})`,backgroundSize:'cover',minHeight:'120px'}}>
                        <img src={movie.titleImg} alt="movie-img" width='60%'></img>
                    </div>
                    </Link>
                );
            })
        }{filteredMovies2.map(movie=>{
                return(
                    <Link to={`movies/${movie.id}`}>
                    <div style={{backgroundImage:`url(${movie.backgroundImg})`,backgroundSize:'cover'}}>
                        <img src={movie.titleImg} alt="movie-img" width='60%'></img>
                    </div>
                    </Link>
                );
            })}
            {filteredMovies3.map(movie=>{
                return(
                    <Link to={`movies/${movie.id}`}>
                    <div style={{backgroundImage:`url(${movie.backgroundImg})`,backgroundSize:'cover'}}>
                        <img src={movie.titleImg} alt="movie-img" width='60%'></img>
                    </div>
                    </Link>
                );
            })}
            {filteredMovies4.map(movie=>{
                return(
                    <Link to={`movies/${movie.id}`}>
                    <div style={{backgroundImage:`url(${movie.backgroundImg})`,backgroundSize:'cover'}}>
                        <img src={movie.titleImg} alt="movie-img" width='60%'></img>
                    </div>
                    </Link>
                );
            })
            }       
        </Slider>
     );
}

const Courosal = (props)=>{
    const title= props.title;
 
    return (
    <>
        <div className="mainpage-heading"><h1>{title}</h1></div> 
        <div className="cards grid gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"  >
           
            {
                movies.map((movie)=>{
                if((movie.type)===props.type)
                {   
                    return(
                    <div className="movie-card pl-2">
                        <Link to={`/movies/${movie.id}`}><img src={movie.cardImg} alt={movie.title}/></Link>
                        <p>{movie.title}</p>
                    </div> 
                    )              
                }}) 
            }
            
        </div>
    </>
    );
}

const FavouriteMovies = () => {
    const favorites = useSelector(state => state.fav.favorites )
    if(favorites.length===0)
    {
        return null;
    } else 
    {
        return(
            <>
                <div className="mainpage-heading"><h1>Favourite Movies:</h1></div> 
                <div className="cards grid gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"  >
                {
                    favorites.map((favoriteId)=> {
                        // console.log(favoriteId,'-fav');
                        const movieList = movies.map((movie)=>{
                            // console.log(movie.id.toString());
                            if(movie.id.toString() === favoriteId.toString())
                            { 
                                return(
                                    <div className="movie-card pl-2">
                                    <Link to={`/movies/${movie.id}`}><img src={movie.cardImg} alt={movie.title}/></Link>
                                    <p>{movie.title}</p>
                                    </div>
                                )
                            }
                        })
                        return movieList; 
                    })
                }   
                </div>
            </>
        )}    
    }

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="mainpage-sideicons float-left flex flex-col gap-y-32">
                <div className="flex flex-col items-center">
                    <div className="Hotstar"><img src="Disney-Hotstar.svg"></img></div>
                    <div><button>Upgrade &#62;</button></div>
                </div>
                <div className="icons flex flex-col items-center gap-y-4">
                    <a className='sidebar-icon-anchor' href=""><img src="user.svg" id="img1"></img><p className='sidebar-name'>User</p></a>
                    <Link className='sidebar-icon-anchor' to='/search'><img src="search-icon.svg" id="img2"></img><p className='sidebar-name'>search</p></Link>
                    <a className='sidebar-icon-anchor' href=""><img src="home-icon.svg" id="img3"></img><p className='sidebar-name'>Home</p></a>
                    <a className='sidebar-icon-anchor' href=""><img src="TV.svg" id="img4"></img><p className='sidebar-name'>Tv</p></a>
                    <a className='sidebar-icon-anchor' href=""><img src="movie-icon.svg"id="img5"></img><p className='sidebar-name'>Movies</p></a>
                    <a className='sidebar-icon-anchor' href=""><img src="ball.svg" id="img6"></img><p className='sidebar-name'>Sports</p></a>
                </div>
            </div>
            <div style={{height:'100vh',overflow:'auto'}}>
                <SliderDiv/>
                <Courosal type="trending" title="Latest & Trending :"/>    
                <Courosal type='recommend' title="Recommended For You :" />
                <Courosal type="new" title="New on Disney+ Hotstar :"/>
                <Courosal type="original" title="Hotstar Original :"/>
                <FavouriteMovies/>
            </div>
            <FooterFile/>           
        </div>
    );
}
 
export default MainPage;