import { Component } from "react";
import "./card-list-container.style.css";
import "./card-list.style.css";
import "./card-list-item.component";
import CardListItem from "./card-list-item.component";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.properties.map((monster) => {
          return <CardListItem monster={monster}></CardListItem>;
        })}
      </div>
    );
  }
}

export default CardList;
