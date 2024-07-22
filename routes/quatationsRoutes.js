// routes/quatationsRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../connect.js');
const generateHtmlPage = require('../utils');

// Route to fetch quatations
router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM quatations');
        res.send(generateHtmlPage('Quatations', fields, rows));
    } catch (err) {
        console.error('Error fetching quatations:', err);
        res.status(500).json({ error: 'Error fetching quatations' });
    }
});

module.exports = router;
