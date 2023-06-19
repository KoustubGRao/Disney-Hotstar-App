import { Link } from "react-router-dom";

const HeaderFile = () => {
  return (
    <header className="Dplus_header">
      <div>
        <Link to="/landing">
          <img src="/logo.svg" className="logo" alt="Disney_plus_logo" />
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderFile;