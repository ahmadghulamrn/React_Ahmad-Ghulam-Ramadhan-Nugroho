// Mendefinisikan kelas 'Person' untuk merepresentasikan orang
class Person {
    // Konstruktor untuk menginisialisasi nama dan usia
    constructor(name, age) {
        // Mengatur properti objek dengan nilai yang diberikan
        this.name = name; // Menyimpan nama
        this.age = age; // Menyimpan usia
    }

    // Metode untuk memperkenalkan diri
    introduce() {
        // Mencetak pesan perkenalan ke konsol menggunakan template literal
        console.log(`Hay, nama saya ${this.name} dan saya berumur ${this.age} tahun.`);
    }
}

// Membuat instansi baru dari kelas Person dengan nama "upin" dan usia 7
const person1 = new Person("upin", 7);
// Memanggil metode introduce untuk person1
person1.introduce(); // Output: Hay, nama saya upin dan saya berumur 7 tahun.


// Membuat instansi baru dari kelas Person dengan nama "ipin" dan usia 7
const person2 = new Person("ipin", 7);
// Memanggil metode introduce untuk person2
person2.introduce(); // Output: Hay, nama saya ipin dan saya berumur 7 tahun.