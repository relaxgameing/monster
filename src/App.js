import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

//functional component

function App() {
  const [monsters, setMonster] = useState([]);
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonster(data);
        setCurrent(data);
      });
  }, []);

  const onSearchChange = (event) => {
    const input = event.target.value.toLocaleLowerCase();

    const filteredMonsters = monsters.filter((element) => {
      return element.name.toLocaleLowerCase().includes(input);
    });

    setCurrent(filteredMonsters);
  };

  return (
    <div className="App">
      <h1 className="app-title">monsters rolodex</h1>

      <SearchBox
        func={onSearchChange}
        placeholder={"search monster"}
        className={"search-box"}
      ></SearchBox>

      <CardList properties={current}></CardList>
    </div>
  );
}

//class component

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       current: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) =>
//         this.setState(
//           () => {
//             return { monsters: data, current: data };
//           },
//           () => {
//             console.log(data);
//           }
//         )
//       );
//   }
//   onSearchChange = (event) => {
//     const input = event.target.value.toLocaleLowerCase();

//     const filteredMonsters = this.state.monsters.filter((element) => {
//       return element.name.toLocaleLowerCase().includes(input);
//     });

//     this.setState(() => {
//       return { current: filteredMonsters };
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1 className="app-title">monsters rolodex</h1>

//         <SearchBox
//           func={this.onSearchChange}
//           placeholder={"search monster"}
//           className={"search-box"}
//         ></SearchBox>

//         <CardList properties={this.state.current}></CardList>
//       </div>
//     );
//   }
// }

export default App;
