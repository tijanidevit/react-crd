/**
 * Header Component
 * The header/navbar component shared across each page
 */

import { faSearch, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../assets/img";
export const Header = () => {
  return (
    <header className="mt-3 px-4">
      <div className="blue-text bold-text-900 mobile-off">
        <span>Follow</span>
        <a href="fb"> -fb/</a>
        <a href="twi"> -Twi/</a>
        <a href="in"> -In</a>
      </div>

      <div>
        <img className="brand-image" src={Logo} alt="logo" />
      </div>

      <div
        className="d-flex justify-content-between mobile-off"
        style={{ width: 150 }}
      >
        <a href="a" className="blue-text bold-text-900">
          $239.00
        </a>
        <a href="a" className="blue-text">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="a" className="blue-text">
          <span>
            <FontAwesomeIcon icon={faLock} />{" "}
          </span>
          <span>
            <p className="badge bg-info cart-badge">4</p>
          </span>
        </a>
      </div>
    </header>
  );
};
