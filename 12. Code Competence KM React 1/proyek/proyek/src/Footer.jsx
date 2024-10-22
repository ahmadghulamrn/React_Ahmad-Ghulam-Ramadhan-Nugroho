// src/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 rounded-t-lg shadow-lg p-8 w-full">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-white">Ahmad Ghulam</h2>
          <p className="mb-4 text-gray-300">
            Kami menyediakan berbagai pilihan pakaian distro berkualitas tinggi dengan desain unik dan menarik. Produk kami dirancang untuk memberikan kenyamanan dan gaya yang maksimal bagi para penggemar streetwear.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded-l-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 text-white p-2 rounded-r-md hover:bg-red-600 transition duration-200">
              Sign me up
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/share/SbkAbQHBBkjQig7B/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/ghulamrmdn._/profilecard/?igsh=c2MyanlybnMyOGl5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://www.tiktok.com/@ghulamrmdhn._?_t=8qir3DvZ5K4&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-tiktok fa-lg"></i>
            </a>
          </div>
        </div>

        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-bold text-white">Store</h3>
          <h4 className="text-md font-semibold text-gray-300">Tampil Keren, Gaya Maksimal</h4>
          <p className="mt-2 text-gray-400">
            Jelajahi koleksi pakaian streetwear kami yang stylish dan nyaman. Temukan kaos, hoodie, dan aksesori dengan desain yang unik dan berani. Belanja sekarang dan ekspresikan gaya Anda!
          </p>
          <a
            href="#"
            className="text-red-500 mt-2 inline-block hover:underline"
          >
            Learn About Us
          </a>
        </div>

        <div className="md:w-1/6">
          <h3 className="text-lg font-bold text-white">Contact</h3>
          <p className="text-gray-300">
            Jawa Timur
            <br />
            Jombang
            <br />
            Jakcloth Mojoagung
          </p>
          <p className="mt-2 text-gray-300">081339445397 (WA)</p>
          <button className="bg-red-500 text-white p-2 rounded-md mt-4 hover:bg-red-600 transition duration-200">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
