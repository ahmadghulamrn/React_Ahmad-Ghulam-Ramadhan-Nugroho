import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState({ text: "", type: "" }); // Ubah state message menjadi objek
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://67278ea7270bd0b97552df61.mockapi.io/api/v1/PRODUCTS"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleUpdate = async (product) => {
    try {
      const response = await axios.put(
        `https://67278ea7270bd0b97552df61.mockapi.io/api/v1/PRODUCTS/${product.id}`,
        product
      );
      setMessage({ text: "Product updated successfully!", type: "success" }); // Set message success
      setEditProduct(null);
      const updatedProducts = products.map((p) =>
        p.id === product.id ? response.data : p
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage({ text: "Failed to update product.", type: "error" }); // Set message error
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://67278ea7270bd0b97552df61.mockapi.io/api/v1/PRODUCTS/${id}`
      );
      setMessage({ text: "Product deleted successfully!", type: "success" }); // Set message success
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      setMessage({ text: "Failed to delete product.", type: "error" }); // Set message error
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4">List Product</h2>
      {message.text && (
        <p className={message.type === "success" ? "text-green-600" : "text-red-600"}>
          {message.text}
        </p>
      )}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Product Category</th>
            <th className="border px-4 py-2">Product Freshness</th>
            <th className="border px-4 py-2">Product Price</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.freshness}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 ml-2"
                  onClick={() => setEditProduct(product)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editProduct && (
        <div>
          <h3>Edit Product</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editProduct);
            }}
          >
            <input
              type="text"
              value={editProduct.name}
              onChange={(e) =>
                setEditProduct({ ...editProduct, name: e.target.value })
              }
              required
            />
            <input
              type="text"
              value={editProduct.category}
              onChange={(e) =>
                setEditProduct({ ...editProduct, category: e.target.value })
              }
              required
            />
            <input
              type="text"
              value={editProduct.freshness}
              onChange={(e) =>
                setEditProduct({ ...editProduct, freshness: e.target.value })
              }
              required
            />
            <input
              type="number"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({ ...editProduct, price: e.target.value })
              }
              required
            />
            <button type="submit">Update Product</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductList;
