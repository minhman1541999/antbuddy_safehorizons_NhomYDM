'use strict';
const db = require('../db');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM orders'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response);
        })
    },

    getOrderById: (req, res) => {
        let order_id = req.params.id;
        let sql = 'SELECT * FROM orders where id = ?'
        db.query(sql, order_id, (err, response) => {
            if (err) throw err
            res.json(response);
        })
    },

    addNewOrder: (req, res) => {
        let data = req.body;
        let sql = `INSERT INTO orders SET ?`
        db.query(sql, data, (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },

    updateOrder: (req, res) => {
        let data = req.body;
        if (!data.id) {
            return res.status(400).send({ error: true, message: 'Please provide id' });
        }
        let sql = `UPDATE orders SET ? WHERE id = ?`
        db.query(sql, [data, data.id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },

    deleteOrderById: (req, res) => {
        let order_id = req.params.id;
        let sql = 'DELETE FROM orders where id = ?'
        db.query(sql, order_id, (err, response) => {
            if (err) throw err
            res.json(response);
        })
    },

    chart: (req, res) => {
        let sql =
            `select distinct month(a.order_date) as time, 
        sum(b.unit_price * b.quantity * (1 - b.discount)) as amount
    from order_details b , orders a
    where a.id = b.order_id
    group by month(a.order_date)  
    order by month(a.order_date)`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response);
        })
    },

    subTotalByYear: (req, res) => {
        let sql =
            `select distinct sum(b.unit_price * b.quantity * (1 - b.discount)) as Subtotal,
        year(a.order_date) as Year
        from order_details b , orders a
        where a.id = b.order_id and year(a.order_date) = 2006`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response);
        })
    },

    dashboardOrders: (req, res) => {
        let sql =
            `select distinct  o.*, c.first_name, c.last_name, c.address, c.city, os.status_name
        from orders as o, customers as c, orders_status as os
        where 
			o.customer_id = c.id and
            o.status_id = os.id
        order by date(order_date) desc`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response);
        })
    },
}