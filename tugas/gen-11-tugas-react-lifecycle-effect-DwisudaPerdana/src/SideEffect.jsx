import React, { useEffect, useState } from "react";

export default function SideEffect() {
  const [toko, setToko] = useState("Shopee");
  const [baju, setBaju] = useState("Kemeja");
  const [celana, setCelana] = useState("Panjang");
  useEffect(() => {
    console.log("efek samping setiap update"), [];
    return () => {
      console.log("sebelum efek samping selanjutnya jalan");
    };
  });
  useEffect(() => {
    console.log("efek samping untuk render pertama"), [];
    return () => {
      console.log("sebelum komponen hilang");
    };
  }, []);
  useEffect(() => {
    console.log("efek samping ketika toko atau celana berubah"), [];
    return () => {
      console.log("sebelum toko dan celana berubah");
    };
  }, [toko, celana]);
  return (
    <>
      <h1>Saya Side Effect</h1>
      <button onClick={() => setToko("Tokopedia")}>{toko}</button>
      <button onClick={() => setBaju("Batik")}>{baju}</button>
      <button onClick={() => setCelana("Pendek")}>{celana}</button>
    </>
  );
}
