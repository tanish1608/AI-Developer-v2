import React, { useState, useEffect } from 'react';

function ProductList({ products = [], onAddToCart = () => {} }) {
const [filteredProducts, setFilteredProducts] = useState(products);
const [sortingOption, setSortingOption] = useState("price");
const [loading, setLoading] = useState(false);

useEffect(() => {
const handleFilter = () => {
const filtered = products.filter((product) => product.price <= 100);
setFilteredProducts(filtered);
};

const handleSort = () => {
const sorted = products.sort((a, b) => a.price - b.price);
setFilteredProducts(sorted);
};

handleFilter();
handleSort();
}, [products]);

const handleAddToCart = (product) => {
onAddToCart(product);
};

const handleSortChange = (e) => {
setSortingOption(e.target.value);
const sorted = products.sort((a, b) => {
if (e.target.value === "price") {
return a.price - b.price;
} else if (e.target.value === "name") {
return a.name.localeCompare(b.name);
} else {
return 0;
}
});
setFilteredProducts(sorted);
};

// Inline CSS styles
const containerStyle = {
width: "100%",
height: "100vh",
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "space-between",
};

const productListStyle = {
width: "80%",
height: "80vh",
display: "flex",
flexDirection: "row",
flexWrap: "wrap",
justifyContent: "space-between",
};

const productCardStyle = {
width: "30%",
height: "200px",
margin: "20px",
backgroundColor: "#fff",
border: "1px solid #ddd",
borderRadius: "10px",
padding: "20px",
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "space-between",
};

const productImageStyle = {
width: "100%",
height: "100px",
objectFit: "cover",
borderRadius: "10px 10px 0 0",
};

const productNameStyle = {
fontSize: "18px",
margin: "10px 0",
};

const priceStyle = {
fontSize: "16px",
color: "#008000",
margin: "10px 0",
};

const addToCartStyle = {
padding: "10px 20px",
fontSize: "16px",
fontWeight: "bold",
color: "#fff",
backgroundColor: "#007bff",
border: "none",
borderRadius: "5px",
cursor: "pointer",
transition: "background-color 0.3s ease",
};

const addToCartHoverStyle = {
backgroundColor: "#0056b3",
};

return (
<div style={containerStyle}>
<h1>Product List</h1>
<select onChange={handleSortChange}>
<option value="price">Price</option>
<option value="name">Name</option>
</select>
<div style={productListStyle}>
{filteredProducts.map((product, index) => (
<div key={index} style={productCardStyle}>
<img src={product.image} alt={product.name} style={productImageStyle} />
<h2 style={productNameStyle}>{product.name}</h2>
<p style={priceStyle}>${product.price}</p>
<button
style={{
...addToCartStyle,
...(loading ? addToCartHoverStyle : {}),
}}
onClick={() => handleAddToCart(product)}
>
Add to Cart
</button>
</div>
))}
</div>
</div>
);
}

export default ProductList;