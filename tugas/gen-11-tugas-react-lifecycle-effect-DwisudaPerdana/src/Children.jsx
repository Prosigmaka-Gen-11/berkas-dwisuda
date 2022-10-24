import React, { Component } from "react";

export const nama = "Bambang";
export const age = 18;

export class Children extends Component {
  render() {
    return (
      <div>
        <h2>Aku Children {this.props.name}</h2>
        <button onClick={() => this.props.sebutNama("Aku")}>Sebut Nama</button>
      </div>
    );
  }
}
