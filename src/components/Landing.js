import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Header() {
  return (
    <header className="landing_screen">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/world" className="btn_primary mt-10">Start</Link>
    </header>
  );
}

export default Header;
