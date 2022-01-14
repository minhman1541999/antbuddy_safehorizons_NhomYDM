'use strict';

module.exports = function (app) {
    let ordersCtrl = require('../controllers/OrdersControllers');

    app.route('/orders')
        .get(ordersCtrl.get)
        .post(ordersCtrl.addNewOrder)
        .put(ordersCtrl.updateOrder);
    
    app.route('/orders/:id')
        .get(ordersCtrl.getOrderById)
        .delete(ordersCtrl.deleteOrderById);

    app.route('/chart')
        .get(ordersCtrl.chart)

    app.route('/subTotalByYear')
        .get(ordersCtrl.subTotalByYear)

    app.route('/dashboardOrders')
        .get(ordersCtrl.dashboardOrders)

};
