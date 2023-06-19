import { useDispatch } from "react-redux";
import FooterFile from "./footer";
import HeaderFile from "./header";
import { authActions } from "./store/auth-slice";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    }

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if(isLoggedIn)
    {
        return <Redirect to="/landing" />;
    }
    else{
    return(
        <>
        <HeaderFile/>
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <div class="login-text">Log-in...</div>
                <div className="label-input">
                <label>Name:</label>
                <input type="text" required placeholder="Name Here"/>
                </div>
                <div className="label-input">
                <label>E-mail:</label>
                <input type="email" required placeholder="E-mail Here"/>
                </div>
                
                <div className="label-input">
                <label>Password:</label>
                <input type="password" required placeholder="Password"/>
                </div>            
                <button type="submit">Submit</button>
            </form> 
        </div>
        <FooterFile/>
        </>
    )};
}

export default LoginPage;