// Objek 'calculator' yang berisi metode untuk melakukan operasi aritmetika
const calculator = {
    // Metode untuk menjumlahkan dua angka
    add: (a, b) => a + b,

    // Metode untuk mengurangkan dua angka
    subtract: (a, b) => a - b,

    // Metode untuk mengalikan dua angka
    multiply: (a, b) => a * b,

    // Metode untuk membagi dua angka
    // Memeriksa apakah pembagi (b) tidak sama dengan 0 untuk menghindari pembagian dengan nol
    divide: (a, b) => b !== 0 ? a / b : 'Error: Division by zero'
};

// Memanggil metode add dari objek calculator dengan argumen 5 dan 3
// Hasilnya adalah 8, yang dicetak ke konsol
console.log(calculator.add(5, 3));

// Memanggil metode divide dari objek calculator dengan argumen 10 dan 2
// Hasilnya adalah 5, yang dicetak ke konsol
console.log(calculator.divide(10, 2));