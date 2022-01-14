'use strict';
const util = require('util');
const mysql = require('mysql');
const db = require('../db');
const { response } = require('../../index');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM customers'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response);
        })
    },

    getCustomerById: (req, res) => {
        let customer_id = req.params.id;
        let sql = 'SELECT * FROM customers where id = ?'
        db.query(sql, customer_id, (err, response) => {
            if (err) throw err
            res.json(response);
        })
    },

    addNewCustomer: (req, res) => {
        let data = req.body;
        let sql = `INSERT INTO customers SET ?`
        db.query(sql, data, (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },

    updateCustomer: (req, res) => {
        let data = req.body;
        if (!data.id) {
            return res.status(400).send({ error: true, message: 'Please provide id' });
        }
        let sql = `UPDATE customers SET ? WHERE id = ?`
        db.query(sql, [data, data.id], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },

    deleteCustomerById: (req, res) => {
        let customer_id = req.params.id;
        let sql = 'DELETE FROM customers where id = ?'
        db.query(sql, customer_id, (err, response) => {
            if (err) throw err
            res.json(response);
        })
    },

    login: (req, res) => {
        let data = req.body;
        console.log("Login: ", data);
        let sql = 'SELECT * FROM customers where username = ? and password = ?'
        db.query(sql, [data.username, data.password], (err, response) => {
            if(err) {
                res.json({status: 'ERROR IN QUERY', message: 'Error in login'});
            } else {
                if (response.length > 0) {
                    res.json({status: 'SUCCESS', response});
                } else {
                    res.json({status: 'ERROR IN SIGNIN', message: 'Account or password is wrong'});
                }
            }
        })
    },
 
}