import { Component } from "react";
import "./card-list.style.css";

class CardListItem extends Component {
  render() {
    {
      const { monster } = this.props;

      return (
        <div className="card-container" key={monster.id}>
          <img
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            alt={`${monster.name}`}
          />
          <h2 key={monster.id}>{monster.name}</h2>
          <h3>{monster.email}</h3>
        </div>
      );
    }
  }
}

export default CardListItem;
