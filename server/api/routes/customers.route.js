'use strict';

module.exports = function (app) {
    let customersCtrl = require('../controllers/CustomersControllers');

    app.route('/customers')
        .get(customersCtrl.get)
        .post(customersCtrl.addNewCustomer)
        .put(customersCtrl.updateCustomer);

    app.route('/customers/:id')
        .get(customersCtrl.getCustomerById)
        .delete(customersCtrl.deleteCustomerById);

};
