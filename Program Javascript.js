console.log("Halo, Saya Niken Dwi Setianingsih dari Program Web C Morning");
console.log("1. IF");

var usia = 18;

if (usia >= 18) {
  console.log("Wajib suntik vaksin.");
} else {
  console.log("Anda masih di bawah umur.");
}

console.log("2. ELSE");
// Tetapkan uang dan harga barang
const uang = 850;
const tablet = 900;

// periksa apakah ada cukup uang untuk membeli barang
if (tablet <= uang) {
	console.log("Anda mempunyai cukup uang untuk membeli barang tersebut!");
} else {
	console.log("Anda tidak mempunyai cukup uang untuk membeli barang ini.");
}

console.log("3. NESTED IF");
var nilai = 80;

if (nilai >= 70) {
  console.log("Anda lulus dengan nilai baik.");
  
  if (nilai >= 95) {
    console.log("Anda mendapatkan nilai A.");
  } else if (nilai >= 85) {
    console.log("Anda mendapatkan nilai B.");
  } else {
    console.log("Anda mendapatkan nilai C.");
  }
} else {
  console.log("Anda tidak lulus.");
}

console.log("4. SWITCH CASE");
var buah = "apel";

switch (buah) {
  case "apel":
    console.log("Ini adalah buah apel.");
    break;
  case "pisang":
    console.log("Ini adalah buah pisang.");
    break;
  case "jeruk":
    console.log("Ini adalah buah jeruk.");
    break;
  case "mangga":
    console.log("Ini adalah buah mangga.");
    break;
  default:
    console.log("Buah ini tidak dikenal.");
}

console.log("5. FOR STATEMENT");
var NamaHewan = ["Jerapah", "Gajah", "Kucing", "Elang"];

for (var j = 0; j < NamaHewan.length; j++) {
  console.log("Hewan #" + (j + 1) + ": " + NamaHewan[j]);
}

console.log("6. WHILE");
var i = 8;

while (i <= 8) {
  console.log("Iterasi ke-" + i);
  i++;
}

console.log("7. DO WHILE");
var j = 1;

do {
  console.log("Iterasi ke-" + j);
  j++;
} while (j <= 6);

console.log("8. FUNCTION");
// Deklarasi fungsi sederhana
function Sapa(nama) {
    console.log("Halo, " + nama + "!");
  }
  
  // Memanggil fungsi dengan argumen
  Sapa("Niken"); 
  Sapa("Sari"); 
  
  // Fungsi dengan nilai kembali (return value)
  function kurang(a, b) {
    var hasil = a - b;
    return hasil;
  }
  
  var hasilPengurangan = kurang(7, 2);
  console.log("Hasil Pengurangan: " + hasilPengurangan);
