const { products } = require("../data/dummyData");

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.json(product || { message: "Product not found" });
};

const addProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.json(newProduct);
};

module.exports = { getProducts, getProductById, addProduct };