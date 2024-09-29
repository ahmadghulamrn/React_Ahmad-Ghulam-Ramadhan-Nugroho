// Fungsi async untuk mengambil data secara asynchronous
async function fetchData() {
    // Mengembalikan sebuah Promise
    return new Promise((resolve, reject) => {
        // Menggunakan setTimeout untuk meniru penundaan dalam pengambilan data
        setTimeout(() => {
            // Data yang akan dikembalikan setelah penundaan
            const data = {
                id: 1,
                name: "upin",
                age: 7
            };
            // Menampilkan pesan bahwa data berhasil diambil
            console.log("Data berhasil diambil");
            // Menyelesaikan Promise dengan mengirimkan data
            resolve(data);
        }, 2000); // Menunggu selama 2000 ms (2 detik)
    });
}

// Fungsi async untuk mendapatkan data
async function getData() {
    try {
        // Menampilkan pesan sebelum mengambil data
        console.log("Mengambil data...");
        // Menunggu hasil dari fungsi fetchData dan menyimpannya dalam variabel 'data'
        const data = await fetchData();
        // Menampilkan data yang diambil ke konsol
        console.log("Data:", data);
    } catch (error) {
        // Menangkap dan menampilkan error jika ada
        console.log("Error:", error);
    }
}

// Memanggil fungsi getData untuk menjalankan proses pengambilan data
getData();