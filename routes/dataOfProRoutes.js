// routes/dataOfProRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../connect.js');
const generateHtmlPage = require('../utils.js');

// Route to fetch data_of_pro
router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM data_of_pro');
        res.send(generateHtmlPage('Data of Pro', fields, rows));
    } catch (err) {
        console.error('Error fetching data_of_pro:', err);
        res.status(500).json({ error: 'Error fetching data_of_pro' });
    }
});

module.exports = router;
