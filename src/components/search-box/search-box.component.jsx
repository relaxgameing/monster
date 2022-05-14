import { Component } from "react";
import "./searchbox.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.placeholder}
        type="search"
        onChange={this.props.func}
      ></input>
    );
  }
}

export default SearchBox;
