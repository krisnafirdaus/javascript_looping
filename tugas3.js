// Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
// Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
// Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan
let nilai = 0;

for (nilai; nilai <= 20; nilai++) {
  if (nilai % 2 == 0) {
    hasil = "genap";
  } else {
    hasil = "ganjil";
  }

  console.log("nilai =", nilai, hasil);
}
