1. Autentikasi (Authentication)
Autentikasi adalah proses untuk memastikan identitas pengguna. Misalnya, saat pengguna masuk dengan username dan password, sistem akan memverifikasi apakah informasi tersebut cocok dengan data di database. Dalam aplikasi React, autentikasi biasanya dilakukan dengan mengirim data login ke server. Jika kredensial valid, server akan mengirimkan token (seperti JWT) yang dapat disimpan di localStorage atau sessionStorage pada browser. Token ini digunakan untuk memastikan bahwa pengguna sudah terautentikasi saat mengakses halaman atau API tertentu. Status login dapat dikelola melalui state atau konteks global seperti useContext.

2. Otorisasi (Authorization)
Otorisasi adalah proses menentukan hak akses pengguna terhadap data atau fitur tertentu setelah autentikasi berhasil. Sebagai contoh, meskipun seorang pengguna sudah masuk, akses mereka mungkin dibatasi hanya ke halaman tertentu sesuai peran (misalnya, admin atau pengguna biasa). Dalam React, otorisasi dapat dikelola dengan memeriksa peran pengguna sebelum menampilkan komponen atau dengan menggunakan rute khusus, seperti PrivateRoute dari React Router, untuk memastikan hanya pengguna yang berwenang dapat mengakses halaman tertentu.


3. Ringkasan
Autentikasi: Memastikan siapa pengguna itu.
Otorisasi: Menentukan apa yang diizinkan pengguna untuk lakukan.
Kedua proses ini bekerja bersama untuk mengamankan aplikasi dan memberikan pengalaman yang sesuai berdasarkan identitas dan hak akses pengguna.