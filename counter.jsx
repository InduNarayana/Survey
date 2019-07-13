import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: []
    //imageUrl: "https://picsum.photos/200"
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  /*render() {
    return (
      <div>
        {this.state.tags.length === 0 && "please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }*/
  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
