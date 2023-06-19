import HeaderFile from "./header";
import FooterFile from "./footer";
import { movies } from "./movies";
import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillHeart,AiFillLike,AiFillDislike } from 'react-icons/ai';
import { useSelector,useDispatch } from 'react-redux';
import { likeActions } from "./store/like-slice";
import { favActions } from "./store/fav-slice";
import LoginPage from "./login";
import Notification from "./notification";

const MoviePage = (props) => {
    const likes = useSelector((state) => state.like.likes[props.match.params.id-1]);
    const dislikes = useSelector((state) => state.like.dislikes[props.match.params.id-1]);
    const isFav = useSelector(state=>state.fav.isFavoriteArr[props.match.params.id-1])
    const dispatch = useDispatch();

    const handleFavorite=()=>{
        const isFavorite = isFav;
        if(isFavorite===false)
        {
        dispatch(favActions.addFav(props.match.params.id));
        }
        else if(isFavorite===true)
        {
            dispatch(favActions.removeFav(props.match.params.id));
        }
    };
    

    const incrementLikes = () => {
        dispatch(likeActions.increment_L(props.match.params.id-1));
    };

    const incrementDislikes = () => {
        dispatch(likeActions.increment_D(props.match.params.id-1));
    };
    
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    if(!isLoggedIn)
    {
        return(
            <LoginPage/>
        );
    }
    else{
    return(
        <div className="movie-page">
                    <HeaderFile/>
                    {isFav&&<Notification/>}
                    <div className="content" style={{backgroundImage: `url(${movies[props.match.params.id-1].backgroundImg})`}}>
                        <img src={movies[props.match.params.id-1].titleImg} className="movie-logo" alt="movie-logo"/>
                        <div className="line-1" style={{display:'flex'}}>
                            <button className="playButton" ><BsFillPlayFill/>Play</button>
                            <button className="playButton" ><BsFillPlayFill/>Trailer</button>
                            <button className="people" onClick={handleFavorite}><AiFillHeart className={isFav ? "favorite" : ""}/></button>
                        </div>
                        <div className="like-dislike">
                            <button onClick={incrementLikes}><AiFillLike className={`${likes? 'red' : ''}`}/></button>
                            <button onClick={incrementDislikes}><AiFillDislike className={`${dislikes? 'red' : ''}`}/></button>
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


       
    )};
};

export default MoviePage;