import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./componets/Footer";

import Items from "./componets/Items";
import Categories from "./componets/Categories";
import ShowFullItem from "./componets/ShowFullItem";
import AnimaMain from "./componets/anima/AnimaMain";
import HumsterAnima from "./componets/anima/HumsterAnima.jsx";
import CityAnimathion from "./componets/city/CityAnimathion";
import HeaderMain from "./componets/HeaderMain";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      items: [
        {
          id: 1,
          title: "Chair grey",
          img: "chair-card.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "chair",
          price: "49.99",
        },
        {
          id: 2,
          title: "table",
          img: "table-card.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "table",
          price: "149.99",
        },
        {
          id: 3,
          title: "Sofa",
          img: "sofa-card.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "sofa",
          price: "249.99",
        },
        {
          id: 4,
          title: "Chair",
          img: "chair-second-card.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "chair",
          price: "89.99",
        },
        {
          id: 5,
          title: "Sofa",
          img: "sofa-green-card.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "table",
          price: "349.99",
        },
        {
          id: 6,
          title: "Sofa",
          img: "sofa-second-card.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "sofa",
          price: "249.99",
        },
        {
          id: 7,
          title: "Closet",
          img: "closet-card.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "closet",
          price: "149.99",
        },
        {
          id: 8,
          title: "Closet",
          img: "closet-second-card.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "closet",
          price: "129.99",
        },
      ],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <AnimaMain />
        <HeaderMain order={this.state.order} onDelete={this.deleteOrder} />

        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          OnAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onShowItem={this.onShowItem}
            OnAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <CityAnimathion />

        <HumsterAnima />
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ order: this.state.order.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.order.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ order: [...this.state.order, item] });
  }
}

export default App;
