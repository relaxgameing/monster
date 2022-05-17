import "./card-list-container.style.css";
import "./card-list.style.css";
import CardListItem from "./card-list-item.component";

//funtional component

function CardList({ properties }) {
  return (
    <div className="card-list">
      {properties.map((monster) => {
        return <CardListItem monster={monster} key={monster.id}></CardListItem>;
      })}
    </div>
  );
}

//class component

// class CardList extends Component {
//   render() {
//     return (
//       <div className="card-list">
//         {this.props.properties.map((monster) => {
//           return <CardListItem monster={monster}></CardListItem>;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
