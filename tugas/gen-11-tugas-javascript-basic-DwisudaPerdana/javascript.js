function perkalian(x, y) {
  hasil = x * y;
  return hasil;
}

let mahasiswa = {
  namaLengkap: "Dwisuda Perdana",
  NIM: "G54170043",
  umur: "23",
  jurusan: {
    fakultas: "FMIPA",
    jurusan: "Matematika",
  },
  penjumlahan: function (a, b) {
    output = a + b;
    return output;
  },
  perkalian: perkalian(2, 5),
};
console.log(mahasiswa.perkalian);
console.log(mahasiswa.penjumlahan(1, 2));
