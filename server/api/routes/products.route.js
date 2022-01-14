'use strict';

module.exports = function (app) {
    let productsCtrl = require('../controllers/ProductsControllers');

    app.route('/products')
        .get(productsCtrl.get)
        .post(productsCtrl.addNewProduct)
        .put(productsCtrl.updateProduct);
    
    app.route('/products/:id')
        .get(productsCtrl.getProductById)
        .delete(productsCtrl.deleteProductById);

};
