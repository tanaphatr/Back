// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../connect.js');
const generateHtmlPage = require('../utils');

// Route to fetch products
router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM products');
        res.send(generateHtmlPage('Products', fields, rows));
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Error fetching products' });
    }
});

// Route to post products
router.post('/post', async (req, res) => {
    const products = req.body;
    try {
        const promises = products.map(product => {
            const { productCode, description, quantity, unitPrice, discount, invoice_id } = product;
            return db.query(`
                INSERT INTO products (product_code, description, quantity, unit_price, discount, invoice_id)
                VALUES ('${productCode}', '${description}', '${quantity}', '${unitPrice}', '${discount}', '${invoice_id}')
            `);
        });
        await Promise.all(promises);
        res.json({ message: 'Inserted all products successfully' });
    } catch (err) {
        console.error('Error inserting products:', err);
        res.status(500).json({ error: 'Error inserting products' });
    }
});

module.exports = router;
