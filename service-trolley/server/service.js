const express = require('express');
const service = express();
const Trolley = require('../shoppingTrolley');
const Product = require('../../shoppingProduct');

module.exports = () => {
  var myTrolley = new Trolley();
  
  //Adds a product to the stock, given its id and with a certain amount
  service.put('/trolley/:id/:amount', (req, res) => {
      var pName = null;
      var description = null;
      var price = null;
      switch (req.params.id) {
        case "1":
          pName = "Agua";
          description = "Bronchales 12L";
          price = "2.35";
          break;
        case "2":
          pName = "Pizza barbacoa";
          description = "Pizza barbacoa Cassa Tarradellas";
          price = "2.93";
          break;
        case "3":
          pName = "Ron Captain Morgan";
          description = "Arrrrrrrrrrrrrrggg";
          price = "7.25";
          break;
        case "4":
          pName = "Platano";
          description = "De Canarias";
          price = "0.45";
          break;
        case "5":
          pName = "Mascarilla";
          description = "#StayHome";
          price = "0.5";
          break;
        default:
          return res.send('Product unavailable.');
      }
      var id = parseInt(req.params.id);
      var amount = parseInt(req.params.amount);
      var product = new Product(id, pName, description, price, amount);
      myTrolley.addProductDB(product);
  });

  //Removes a product from the stock, given its id
  service.delete('/trolley/:id', (req, res) => {
      var pName = null;
      var description = null;
      var price = null;
      switch (req.params.id) {
        case "1":
          pName = "Agua";
          description = "Bronchales 12L";
          price = "2.35";
          break;
        case "2":
          pName = "Pizza barbacoa";
          description = "Pizza barbacoa Cassa Tarradellas";
          price = "2.93";
          break;
        case "3":
          pName = "Ron Captain Morgan";
          description = "Arrrrrrrrrrrrrrggg";
          price = "7.25";
          break;
        case "4":
          pName = "Platano";
          description = "De Canarias";
          price = "0.45";
          break;
        case "5":
          pName = "Mascarilla";
          description = "Bronchales 12L";
          price = "2.35";
          break;
      
        default:
          return res.send("Product unavailable");
      }
      var id = parseInt(req.params.id);
      myTrolley.removeProduct(id);
  });

  //Shows the trolley on screen
  service.get('/trolley', (req, res) => {
    res.send(myTrolley);
  });

  return service;
};