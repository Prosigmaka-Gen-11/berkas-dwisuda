import React from "react";
import { Children, nama, age } from "./Children";
import Lifecycle from "./Lifecycle";
import SideEffect from "./SideEffect";
import Tugas from "./Tugas";

export default class App extends React.Component {
  state = {
    name: "Dwisuda",
    munculinLifecycle: true,
    hilanginSideEffect: true,
    munculinTugas: true,
  };

  ubahNama() {
    this.setState({
      name: "Perdana",
    });
  }

  render() {
    return (
      <div>
        <h1>Hai Ibu {this.state.name}</h1>
        <button onClick={() => this.ubahNama()}>
          Ubah Nama {nama} {age}
        </button>
        <Children
          name="Bambang"
          sebutNama={(namaDisebut) => {
            alert("hai " + namaDisebut);
            this.setState({
              name: namaDisebut,
            });
          }}
        />
        <button onClick={() => this.setState({ munculinLifecycle: false })}>Hilangin Lifecycle</button>
        {this.state.munculinLifecycle ? <Lifecycle name={this.state.name} /> : this.state.name == "Dwisuda" ? <h1>Woi nama gw Dwisuda</h1> : <p>Bukan apa2</p>}
        <button onClickCapture={() => this.setState({ hilanginSideEffect: false })}>Hilangin SideEffect</button>
        {this.state.hilanginSideEffect ? <SideEffect /> : null}

        <h1>INI TUGAS</h1>
        <button onClick={() => this.setState({ munculinTugas: false })}>Menghilangkan Tugas</button>
        {this.state.munculinTugas ? <Tugas /> : "  Tugas dihilangkan"}
      </div>
    );
  }
}
