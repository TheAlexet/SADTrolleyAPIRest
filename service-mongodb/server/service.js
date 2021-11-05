const express = require('express');
const service = express();
const mongo = require('../mongoClient');

module.exports = () => {
  mongo.insertProducts();
  
  service.get('/checkStock/:productId/:amount', async (req, res) => {
    const { productId, amount } = req.params;
    const thereIsStock = await mongo.checkStock(productId, amount);
    return res.json({
      resultBoolean: thereIsStock
    });
  });

  return service;
};