let JsonModel = require('../models/JsonModel');

let productsModel = new JsonModel('products');


const controller = {
   index: (req, res) => {
      let allProducts = productsModel.getAll();
      res.render('products/products', { allProducts })
   },
   show: (req, res) => {
      let product = productsModel.findByPK(req.params.id);
      // res.send(product);
      if(product){
         return res.render('products/detail', { product });
      } else {
         return res.render('error');
      }
   },
   create: (req, res) => res.render('./products/createProduct'),
   store: (req, res) => {
      productsModel.save(req.body);
      return res.redirect('/productos');
   },
   delete: (req, res) => {
      productsModel.destroy(req.params.id);
      return res.redirect('/productos');
   },
   edit: (req, res) => {
      let product = productsModel.findByPK(req.params.id);
      if(product){
         return res.render('products/edit', { product });
      } else {
         return res.render('error');
      }
   },
   update: (req, res) => {
      let product = productsModel.findByPK(req.params.id);
      if(product){
         productsModel.update(req.body, req.params.id);
         return res.redirect('/productos');
      }else{
         return res.render('error');
      }
   }
}

module.exports = controller;