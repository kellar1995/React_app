import React, { useEffect, useState} from 'react'

const ProductsInfo = () => {
const [Products, setProducts] = useState([]);

const getProducts = async () => {
const response = await fetch("https://kekambas-bs.herokuapp.com/api/products");
setProducts(await response.json());
}

useEffect(()=>{
    getProducts();
}, []);

return( <>
<h1>Product List</h1>
{Products.map((product) => {
return (
<div>
<h2>{product.name}</h2>
<p>{product.description}</p>
<p>{product.price}</p>
</div>
)
})}


</>)
 
}

export default ProductsInfo