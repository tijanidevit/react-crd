import Logo from "../img/logo.png";
import "../css/style.css";

const Header = () => {
  return (
    <header className="my-3 px-4">
      <div>
        <a href="l">Follow -fb/Twi/In</a>
      </div>

      <div>
        <img className="brand-image" src={Logo} alt="logo" />
      </div>

      <div>Cart Area</div>
    </header>
  );
};

export default Header;
