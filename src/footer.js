const FooterFile = () => {
    return ( 
        <div className="Footer">
            <div className="footer-top grid grid-cols-2 sm:grid-cols-4">
                <div className="grid-item">
                    <div className="text-white text-sm pb-2 text-base">Company</div>
                    <div className="pb-1">About us</div>
                    <div>Careers</div>
                </div>
                <div className="grid-item">
                    <div className="text-white text-sm pb-2 text-base">View Website in</div>
                    <div><label for="lang1">
                        <input type="checkbox" checked/>
                        &nbsp;English
                    </label></div>
                </div>
                <div className="grid-item">
                    <div className="text-white text-sm pb-2 text-base">Need Help?</div>
                    <div className="pb-1">Visit Help Center</div>
                    <div>Share Feedback</div>
                </div>
                <div className="grid-item">
                    <div className="text-white text-sm pb-2 text-base">Connect with Us</div> 
                    <div className="pb-1 flex gap-6">
                        <img src ='\facebook.svg' className="img1"/>
                        <img src = '\twitter.svg' className="img2"/>
                    </div>               
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 STAR, All Rights Reserved.</p>
                <a href="#">Terms of use</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#">Privacy Policy</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#">F.A.Q</a>
            </div>
        </div>
     );
}
 
export default FooterFile;