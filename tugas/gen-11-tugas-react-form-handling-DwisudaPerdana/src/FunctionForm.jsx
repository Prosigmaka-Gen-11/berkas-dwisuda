import { useState } from "react";
import FunctionHook from "./FunctionHook";

export default function FunctionForm() {
  const [hobi, setHobi] = useState("");
  const { formInput, handleFormInput } = FunctionHook({
    Nama: "",
    Umur: "",
    TanggalLahir: "",
    JenisKelamin: "",
    Saran: "Terimakasih",
  });

  return (
    <>
      <label>
        Nama: {formInput.Nama} <br />
        <input type="text" value={formInput.Nama} onChange={(evt) => handleFormInput(evt, "Nama")} />
      </label>
      <br />
      <br />
      <label>
        Umur: {formInput.Umur} <br />
        <input type="number" value={formInput.Umur} onChange={(evt) => handleFormInput(evt, "Umur")} />
      </label>
      <br />
      <br />
      <label>
        Tanggal Lahir: {formInput.TanggalLahir} <br />
        <br />
        <input type="date" value={formInput.TanggalLahir} onChange={(evt) => handleFormInput(evt, "TanggalLahir")} />
      </label>
      <br />
      <br />

      <label>
        Jenis Kelamin : {formInput.JenisKelamin} <br />
        <select value={formInput.JenisKelamin} onChange={(evt) => handleFormInput(evt, "JenisKelamin")}>
          <option value="" disabled>
            - pilih jenis kelamin -
          </option>
          <option value="laki-laki">Laki-laki</option>
          <option value="perempuan">Perempuan</option>
        </select>
      </label>
      <p>Hobi:{hobi}</p>
      <label htmlFor="berenang">Berenang</label>
      <input id="berenang" type="radio" value="Berenang" onChange={(evt) => setHobi(hobi + " " + evt.target.value)} />
      <label htmlFor="basket">Basket</label>
      <input id="basket" type="radio" value="Basket" onChange={(evt) => setHobi(hobi + " " + evt.target.value)} />
      <label htmlFor="memancing">Memancing</label>
      <input id="memancing" type="radio" value="Memancing" onChange={(evt) => setHobi(hobi + " " + evt.target.value)} />
      <br />
      <br />
      <p>
        ceklis Kotak?
        <input type="checkbox" />
      </p>
      <label>
        Masukan: {formInput.Saran} <br />
        <textarea value={formInput.Saran} onChange={(evt) => handleFormInput(evt, "Saran")}></textarea>
      </label>
      <br />
      <br />
      <button>submit</button>
    </>
  );
}
