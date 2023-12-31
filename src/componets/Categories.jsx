import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Все",
        },
        {
          key: "chair",
          name: "Стул",
        },
        {
          key: "sofa",
          name: "Ліжко",
        },
        {
          key: "closet",
          name: "Шкаф",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div
            className="btn-donate"
            onClick={() => this.props.chooseCategory(el.key)}
            key={el.key}
          >
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
