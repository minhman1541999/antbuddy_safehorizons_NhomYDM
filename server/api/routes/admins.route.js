'use strict';

module.exports = function (app) {
    let adminCtrl = require('../controllers/AdminsControllers');

    app.route('/admins/login')
        .post(adminCtrl.login)
};
