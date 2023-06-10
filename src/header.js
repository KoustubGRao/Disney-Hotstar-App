import { Link } from "react-router-dom";

const HeaderFile = () => {
  return (
    <header className="Dplus_header">
      <div>
        <Link to="/">
          <img src="/logo.svg" className="logo" alt="Disney_plus_logo" />
        </Link>
      </div>
      <div>
        <Link to="/landing">
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderFile;