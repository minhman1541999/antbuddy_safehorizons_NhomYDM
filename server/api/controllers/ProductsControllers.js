'use strict';
const util = require('util');
const mysql = require('mysql');
const db = require('../db');
const { response } = require('../../index');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM products'
        db.query(sql, (err, response) => {
            res.send(response);
        })
    },
    getProductById: (req, res) => {
        let customer_id = req.params.id;
        let sql = 'SELECT * FROM products where id = ?'
        db.query(sql, customer_id, (err, response) => {
            if (err) throw err;
            res.send(response);
        })
    },

    addNewProduct: (req, res) => {
        let data = req.body;
        let sql = `INSERT INTO products SET ?`
        db.query(sql, data, (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },

    updateProduct: (req, res) => {
        let data = req.body;
        if (!data.id) {
            return res.status(400).send({ error: true, message: 'Please provide id' });
        }
        let sql = `UPDATE products SET ? WHERE id = ?`
        db.query(sql, [data, data.id], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },

    deleteProductById: (req, res) => {
        let products_id = req.params.id;
        let sql = 'DELETE FROM products where id = ?'
        db.query(sql, products_id, (err, response) => {
            if (err) throw err
            res.json(response);
        })
    },
 
}