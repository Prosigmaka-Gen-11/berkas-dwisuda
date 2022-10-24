import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor() {
    super();

    this.state = {
      nama: "",
      kota: "",
      jurusan: "",
      rangkuman: "",
    };
  }
  componentDidMount() {
    console.log("ngambil data dari database");
    this.setState({
      nama: "Dwisuda",
      kota: "Bekasi",
      jurusan: "Matematika",
    });
  }
  componentDidUpdate(propsSebelumnya, stateSebelumnya) {
    if (stateSebelumnya.nama !== this.state.nama || stateSebelumnya.kota !== this.state.kota || stateSebelumnya.jurusan !== this.state.jurusan) {
      console.log(stateSebelumnya);
      console.log(this.state);
      this.setState({
        rangkuman: `Halo nama saya ${this.state.nama}, saya tinggal di ${this.state.kota}, saya kuliah jurusan ${this.state.jurusan}`,
      });
    }
  }
  componentWillUnmount() {
    console.log("Saya Akan Menghilang");
    this.state = {
      nama: "",
      kota: "",
      jurusan: "",
      rangkuman: "",
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li>Nama: {this.state.nama}</li>
          <li>Kota: {this.state.kota}</li>
          <li>Jurusan: {this.state.jurusan}</li>
        </ul>
        <p>{this.state.rangkuman}</p>
        <button onClick={() => this.setState({ nama: "Perdana" })}>Ubah Nama</button>
        <button onClick={() => this.setState({ kota: "Jakarta" })}>Ubah Kota</button>
        <button onClick={() => this.setState({ jurusan: "Statistika" })}>Ubah Jurusan</button>
      </div>
    );
  }
}
