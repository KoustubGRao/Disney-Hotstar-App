import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FooterFile from "./footer";
import HeaderFile from "./header";

const LandingPage = () => {
    return ( 
        <>
        <HeaderFile/>
        <div className="landing-page">          
            <div className="card">
                <div className="disney_logo_landing"><div><img src="\landingTop.svg" alt="disney +hulu +espn"></img></div></div>
                <div className="explore"><Link to='/landing'><button >Explore</button></Link></div>
                <div className="text"><p>Get Premier Access in Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and the Disney Bundle will increase by $1.</p></div>                
                <div className="Images"><img src="\landingBottom.png" alt="what you get..."></img></div>
            </div>            
        </div>
        <FooterFile/>
        </>
     );
}
  
export default LandingPage;