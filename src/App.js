import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      current: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          return { monsters: data, current: data };
        })
      );
  }
  onSearchChange = (event) => {
    const input = event.target.value.toLocaleLowerCase();

    const filteredMonsters = this.state.monsters.filter((element) => {
      return element.name.toLocaleLowerCase().includes(input);
    });

    this.setState(() => {
      return { current: filteredMonsters };
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBox
          func={this.onSearchChange}
          placeholder={"search monster"}
          className={"search-box"}
        ></SearchBox>

        <CardList properties={this.state.current}></CardList>
      </div>
    );
  }
}

export default App;
