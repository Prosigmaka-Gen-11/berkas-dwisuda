import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor() {
    super();

    this.state = {
      mobil: "",
      motor: "",
      rangkuman: "",
    };
  }
  componentDidMount() {
    document.addEventListener("wheel", this.getMouseMoveEvent);

    console.log("ngambil data dari database");
    this.setState({
      mobil: "Avanza",
      motor: "Beat",
    });
  }
  componentDidUpdate(propsSebelumnya, stateSebelumnya) {
    console.log(this.state.name);

    //console.log(stateSebelumnya);
    //console.log(this.state);

    if (stateSebelumnya.mobil !== this.state.mobil || stateSebelumnya.motor !== this.state.motor) {
      this.setState({
        rangkuman: `Saya punya mobil ${this.state.mobil} dan motor ${this.state.motor}`,
      });
    }
  }
  componentWillUnmount() {
    console.log("Saya Akan Menghilang");
    document.removeEventListener("wheel", this.getMouseMoveEvent);
  }
  getMouseMoveEvent(evt) {
    //console.log(evt.offsetY);
  }
  render() {
    return (
      <div>
        <h3>Nama Saya: {this.props.name}</h3>
        <ul>
          <li>Mobil: {this.state.mobil}</li>
          <li>Motor: {this.state.motor}</li>
        </ul>
        <p>{this.state.rangkuman}</p>
        <button onClick={() => this.setState({ mobil: "Kijang" })}>Ubah Mobil</button>
        <button onClick={() => this.setState({ motor: "Supra" })}>Ubah Motor</button>
      </div>
    );
  }
}
