import React, { useState } from 'react';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert('Product created successfully!');
      // Optionally reset form after successful submission
      setProductName('');
      setProductCategory('');
      setProductPrice('');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!productName) {
      errors.productName = 'Product Name is required';
    }
    if (productName.length > 25) {
      errors.productNameLength = 'Product Name cannot exceed 25 characters';
    }
    if (/[@#{}]/.test(productName)) {
      errors.productNameInvalid = 'Product Name cannot contain @, #, {, }';
    }
    if (!productCategory) {
      errors.productCategory = 'Product Category is required';
    }
    if (!productPrice) {
      errors.productPrice = 'Product Price is required';
    }
    if (isNaN(productPrice) || parseFloat(productPrice) <= 0) {
      errors.productPriceInvalid = 'Product Price must be a positive number';
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        {errors.productName && <p>{errors.productName}</p>}
        {errors.productNameLength && <p>{errors.productNameLength}</p>}
        {errors.productNameInvalid && <p>{errors.productNameInvalid}</p>}
      </div>

      <div>
        <label htmlFor="productCategory">Product Category:</label>
        <input
          type="text"
          id="productCategory"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        />
        {errors.productCategory && <p>{errors.productCategory}</p>}
      </div>

      <div>
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        {errors.productPrice && <p>{errors.productPrice}</p>}
        {errors.productPriceInvalid && <p>{errors.productPriceInvalid}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateProduct;
