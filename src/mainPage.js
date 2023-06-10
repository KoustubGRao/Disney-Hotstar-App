import {Link} from 'react-router-dom';
import movies from "./movies";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderDiv = () => {
    
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
      } 


      return( 
        <Slider {...settings} style={{padding:'4',marginRight:'30px'}}>
            {movies.map(movie=>{
                    console.log(movie.backgroundImg)
                return(
                    <Link to={`movies/${movie.id}`}>
                <div style={{backgroundImage:`url(${movie.backgroundImg})`,backgroundSize:'cover'}}>
                 <img src={movie.titleImg} alt="movie-img" width='60%'></img>
                </div>
                </Link>
            )})}
       
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
            </div>           
        </div>
    );
}
 
export default MainPage;