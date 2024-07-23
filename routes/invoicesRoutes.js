// routes/invoicesRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../connect.js');
const generateHtmlPage = require('../utils');

// Route to fetch invoices
router.get('/html', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM invoices');
        res.send(generateHtmlPage('Invoices', fields, rows));
    } catch (err) {
        console.error('Error fetching invoices:', err);
        res.status(500).json({ error: 'Error fetching invoices' });
    }
});

router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM invoices');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching invoices:', err);
        res.status(500).json({ error: 'Error fetching invoices' });
    }
});
// Route to post invoices
router.post('/post', async (req, res) => {
    const { Num, formdate, Termpay, Duedate, invoice_id } = req.body;
    try {
        const result = await db.query(`
            INSERT INTO invoices (num, from_date, term_pay, due_date)
            VALUES ('${Num}', '${formdate}', '${Termpay}', '${Duedate}')
        `);
        res.json(result);
    } catch (err) {
        console.error('Error inserting invoice:', err);
        res.status(500).json({ error: 'Error inserting invoice' });
    }
});

module.exports = router;
