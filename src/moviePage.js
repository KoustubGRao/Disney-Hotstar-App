import HeaderFile from "./header";
import FooterFile from "./footer";
import movies from "./movies";
import { HiUserGroup } from 'react-icons/hi';
import { BsFillPlayFill } from 'react-icons/bs';

const MoviePage = (props) => {



    return(
        <div className="movie-page">
            <HeaderFile/>
            <div className="content" style={{backgroundImage: `url(${movies[props.match.params.id-1].backgroundImg})`}}>
                <img src={movies[props.match.params.id-1].titleImg} className="movie-logo"/>
                <div className="line-1" style={{display:'flex'}}>
                    <button className="playButton" ><BsFillPlayFill/>Play</button>
                    <button className="playButton" ><BsFillPlayFill/>Trailer</button>
                    <button className="watchList">+</button>
                    <button className="people"><HiUserGroup/></button>
                </div>
                <div className="subTitle">
                    {movies[props.match.params.id-1].subTitle}
                </div>
                <div className="description">
                    {movies[props.match.params.id-1].description}
                </div>
            </div>
            <FooterFile/>
        </div>
    );
};

export default MoviePage;