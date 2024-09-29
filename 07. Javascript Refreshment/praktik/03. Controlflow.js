// Fungsi untuk menemukan nilai terbesar dalam array yang diberikan
function findLargest(arr) {
    // Inisialisasi variabel 'largest' dengan elemen pertama dari array
    let largest = arr[0];

    // Loop untuk iterasi mulai dari elemen kedua (indeks 1) hingga akhir array
    for (let i = 1; i < arr.length; i++) {
        // Memeriksa apakah elemen saat ini lebih besar dari 'largest'
        if (arr[i] > largest) {
            // Jika ya, perbarui nilai 'largest' dengan elemen saat ini
            largest = arr[i];
        }
    }
    // Mengembalikan nilai terbesar yang ditemukan
    return largest;
}

// Memanggil fungsi findLargest dengan array [3, 5, 7, 2, 8]
// Hasilnya akan mencetak nilai terbesar, yaitu 8, ke konsol
console.log(findLargest([3, 5, 7, 2, 8]));