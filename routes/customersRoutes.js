// routes/customersRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../connect.js');
const generateHtmlPage = require('../utils');

// Route to fetch customers
router.get('/html', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM Customers');
        res.send(generateHtmlPage('Customers', fields, rows));
    } catch (err) {
        console.error('Error fetching customers:', err);
        res.status(500).json({ error: 'Error fetching customers' });
    }
});

router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM Customers');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching customers:', err);
        res.status(500).json({ error: 'Error fetching customers' });
    }
});

// Route to post customers
router.post('/post', async (req, res) => {
    const { Name, City, District, Address, Tax, invoice_id } = req.body;
    try {
        const result = await db.query(`
            INSERT INTO Customers (NAME, city, district, address, tax_id, invoice_id)
            VALUES ('${Name}', '${City}', '${District}', '${Address}', '${Tax}', '${invoice_id}')
        `);
        res.json(result);
    } catch (err) {
        console.error('Error inserting customer:', err);
        res.status(500).json({ error: 'Error inserting customer' });
    }
});

module.exports = router;
