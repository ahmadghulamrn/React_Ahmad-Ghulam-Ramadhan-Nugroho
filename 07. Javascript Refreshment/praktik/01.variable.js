// 1. Variabel dan Tipe Data
function swapValues(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log(`Setelah ditukar: a = ${a}, b = ${b}`);
}

// Memanggil fungsi swapValues dengan argumen 5 dan 10
swapValues(5, 10);

// Penjelasan:
// - Antara var, let, dan const, saya lebih merekomendasikan penggunaan let.
// - Hal ini karena let memungkinkan perubahan nilai variabel dalam lingkup blok kode.
// - Dalam fungsi swapValues di atas, let digunakan untuk variabel temp, yang memang perlu diubah nilainya.
// - Sementara var bersifat global atau fungsi (jika tidak di dalam blok), dan const tidak dapat diubah setelah diinisialisasi.