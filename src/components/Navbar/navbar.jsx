import CartWidget from "../CartWidget/cartWidget";
import Cart from "../CartWidget/cartWidget";
import styles from "./navbar.module.scss";


const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="shopName-Container">
          <h3>Market</h3>
          <h3>Mobile</h3>
        </div>
        <ul>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Registrarse</a>
          </li>
          <li>
            <CartWidget/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
