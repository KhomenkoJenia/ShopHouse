import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let suma = 0;
  props.order.forEach((el) => (suma += Number.parseFloat(el.price)));
  return (
    <div>
      {props.order.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="suma">Сума:{new Intl.NumberFormat().format(suma)}$</p>
    </div>
  );
};
const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товари відсутні</h2>
    </div>
  );
};

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Контакти</li>
          <li>Про нас</li>
          <li>Кабінет</li>
          <li>
            <FaShoppingCart
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`shop-cart-button ${cartOpen && "active"}`}
            />
          </li>
        </ul>

        {cartOpen && (
          <div className="shop-cart">
            {props.order.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
