const { orders } = require("../data/dummyData");

const createOrder = (req, res) => {
  const { userId, productId } = req.body;

  const newOrder = {
    id: orders.length + 1,
    userId,
    productId
  };

  orders.push(newOrder);
  res.json(newOrder);
};

const getOrders = (req, res) => {
  res.json(orders);
};

module.exports = { createOrder, getOrders };