// routes/data_of_calprofit.js
const express = require('express');
const router = express.Router();
const db = require('../connect.js');
const generateHtmlPage = require('../utils.js');

// Route to fetch data_of_ calprofit
router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM data_of_calprofit');
        res.send(generateHtmlPage('Data of calprofit', fields, rows));
    } catch (err) {
        console.error('Error fetching data_of_calprofit:', err);
        res.status(500).json({ error: 'Error fetching data_of_calprofit' });
    }
});

router.post('/post', async (req, res) => {
    const {PriceList,ProDiscount_per,Margin_per,CusDiscount_per,Cost,PriceList_Margin,Customer_Price,Profit,Profit_per} = req.body;

    try {
        const result = await db.query(`
            INSERT INTO data_of_calprofit (PriceList, ProDiscount_per, Margin_per, CusDiscount_per, Cost, PriceList_Margin, Customer_Price, Profit, Profit_per
            ) VALUES ('${PriceList}', '${ProDiscount_per}', '${Margin_per}', '${CusDiscount_per}','${Cost}', '${PriceList_Margin}', '${Customer_Price}', '${Profit}', '${Profit_per}')`
        );
        res.json(result);
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data' });
    }
});

module.exports = router;
