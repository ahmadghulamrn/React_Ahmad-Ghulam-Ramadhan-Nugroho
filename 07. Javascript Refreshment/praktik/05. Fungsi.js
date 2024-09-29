// Fungsi untuk menyapa pengguna dengan nama yang diberikan
function greetUser(name) {
    // Mengembalikan string sapaan dengan nama pengguna
    return `Hello, ${name}!`;
}

// Fungsi panah (arrow function) yang melakukan hal yang sama seperti greetUser
const greetUserArrow = (name) => {
    // Mengembalikan string sapaan dengan nama pengguna
    return `Hello, ${name}!`;
};

// Memanggil fungsi greetUser dengan argumen 'upin'
// Hasilnya adalah string 'Hello, upin!' yang dicetak ke konsol
console.log(greetUser('upin'));

// Memanggil fungsi greetUserArrow dengan argumen 'ipin'
// Hasilnya adalah string 'Hello, ipin!' yang dicetak ke konsol
console.log(greetUserArrow('ipin'));