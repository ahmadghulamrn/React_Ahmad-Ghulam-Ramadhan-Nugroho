// Fungsi untuk membalik urutan dua elemen pertama dari array
const reverseFirstTwo = ([a, b, c]) => {
    // Mengembalikan array baru yang berisi elemen ketiga, kedua, dan pertama 
    // Dalam urutan terbalik
    return [c, b, a];
};

// Memanggil fungsi reverseFirstTwo dengan argumen array [1, 2, 3]
// Ini akan mengeluarkan array baru dengan urutan elemen dibalik
console.log(reverseFirstTwo([1, 2, 3]));