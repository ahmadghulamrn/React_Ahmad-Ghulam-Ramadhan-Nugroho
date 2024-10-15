import React, { useState } from 'react';
import logo from '../assets/Logo.png'; 
import article from './Article';

const Form = () => {
  const [productName, setProductName] = useState('');
  const [productNameError, setProductNameError] = useState('');

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 200) + 1; 
    console.log(randomNumber);
  }

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    setProductName(value);

    // Validasi panjang karakter dan pesan error
    if (value.length === 0) {
      setProductNameError("Please enter a valid product name.");
    } else if (value.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
    } else {
      setProductNameError('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.length === 0) {
      alert("Please enter a valid product name.");
    } else {
      alert("Product submitted successfully!");
    }
  }

  const language = 'en';

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center my-12 w-1/2 p-4">
        <img src={logo} alt="logo Bootstrap" className="w-24 mx-auto mt-8" />
        <h1 className="text-[31px] font-bold mb-2">Create Product</h1>
        <p className="text">
         {article.description[language]}
        </p>
      </div>

      <div className="w-1/3">
        <h1 className="text-[23px] font-bold">Detail Product</h1>
        <form onSubmit={handleSubmit}>
          <table className="text-[16px]">
            <tbody>
              <tr>
                <td>Nama Produk:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="productName"
                    value={productName}
                    onChange={handleProductNameChange}
                    minLength={6}
                    maxLength={50}
                    required
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1"
                  />
                  {/* Tampilkan pesan error jika ada */}
                  {productNameError && (
                    <p className="text-red-500">{productNameError}</p>
                  )}
                </td>
              </tr>
              <tr>
                <td>Kategori Produk:</td>
              </tr>
              <tr>
                <td>
                  <select
                    name="productCategory"
                    style={{ width: 150 }}
                    required
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1"
                  >
                    <option value="clothes">Pakaian</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Kondisi Produk:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="freshness"
                    defaultValue="brandNew"
                    required
                  />{' '}
                  Brand New
                  <br />
                  <input
                    type="radio"
                    name="freshness"
                    defaultValue="secondHand"
                    required
                  />{' '}
                  Second
                  <br />
                  <input
                    type="radio"
                    name="freshness"
                    defaultValue="refurbished"
                    required
                  />{' '}
                  Refurbished
                </td>
              </tr>
              <tr>
                <td>Gambar :</td>
              </tr>
              <tr>
                <td>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="file"
                      name="productImage"
                      required
                      className="hidden"
                    />
                    <span className="border border-blue-500 bg-blue-500 text-white rounded-l-md py-1 px-2 transition duration-200 ease-in-out">
                      Pilih File
                    </span>
                    <span
                      id="fileName"
                      className="border border-blue-500 text-blue-500 bg-transparent rounded-r-md py-1 px-2 ml-0"
                    >
                      Tidak ada file yang dipilih
                    </span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Deskripsi Produk :</td>
              </tr>
              <tr>
                <td>
                  <textarea
                    name="additionalDescription"
                    required
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td>Harga :</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="productPrice"
                    placeholder="$ 1"
                    required
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input
            type="submit"
            value="Submit"
            className="text-white bg-blue-500 border rounded px-48 py-2 my-24"
          />
        </form>
      </div>

      <div className='pb-10'>
        <button onClick={handleClick} className='text-white bg-green-500 border rounded-2xl px-4 py-2 my-4 '>
            click to get your lucky number!!
        </button>
      </div>

    </div>
  );
};

export default Form;
