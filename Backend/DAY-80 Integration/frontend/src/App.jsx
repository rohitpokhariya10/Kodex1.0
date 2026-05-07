import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    category: "Men",
    currency:"INR"
  });
  let handleFormSubmit = async (e) => {
    try{
      e.preventDefault();
    console.log("form data -->", formData);
    let response = await axios.post("http://localhost:3000/createProduct" , formData);
    console.log("response-->", response.data);
    }
    catch(error){
      console.error("error-->" , error)
    }
  };
  return (
    <div className="top">
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Product details</legend>
          {/* Product name */}
          <label htmlFor="productName">Product Name</label>
          <input
            //...formData = purana data bhi rakho
            onChange={(e) =>
              setFormData({ ...formData, productName: e.target.value })
            }
            id="productName"
            type="text"
            placeholder="Enter product name"
          />{" "}
          {/* Product description */}
          <label htmlFor="description">Description</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            id="description"
            type="text"
            placeholder="Enter product description"
          />{" "}
          {/* Product Amount */}
          <label htmlFor="amount">Amount</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            id="amount"
            type="number"
            placeholder="Enter product amount"
          />{" "}

          {/* Currency */}
          <label htmlFor="currency">Currency</label>
          <select
          onChange={(e) =>
                setFormData({ ...formData, currency: e.target.value })
              }
              value={formData.currency}
              id="currency"
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>{" "}

          {/* Product stock */}
          <label htmlFor="stock">Stock</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
            id="stock"
            type="number"
            placeholder="Enter product stock"
          />{" "}
          {/* Product category */}
          <div className="category">
            <label htmlFor="category">Category</label>{" "}
            <select
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              value={formData.category}
              id="category"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className="btn">
            <button>Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default App;
