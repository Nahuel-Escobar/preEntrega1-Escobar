import { FaShoppingCart } from "react-icons/fa";
import styles from './cart.module.scss'


const CartWidget = () => {
    return (
    <a href="#" className="cart">
        <i><FaShoppingCart/></i><span>1</span>
    </a>
    )
}

export	default CartWidget