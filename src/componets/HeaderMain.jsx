import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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

function CollapsibleExample(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className=" nav">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            House Staff
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="about" href="#features">
                Про нас
              </Nav.Link>
              <Nav.Link className="about" href="#pricing">
                Контакти
              </Nav.Link>
              <Nav.Link className="about" href="#features">
                Кабінет
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <FaShoppingCart
                  onClick={() => setCartOpen((cartOpen = !cartOpen))}
                  className={`shop-cart-button ${cartOpen && "active"}`}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {cartOpen && (
            <div className="shop-cart">
              {props.order.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </Container>
      </Navbar>
      <div className="presentation"></div>
    </header>
  );
}

export default CollapsibleExample;
