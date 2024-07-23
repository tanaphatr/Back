const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Server</title>
            <script>
                function navigateTo(path) {
                    window.location.href = path;
                }
            </script>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-top: 30px; 
                }
                .container {
                    text-align: center;
                }
            </style>
        </head>
        <body class="container">
            <button onclick="navigateTo('/customers/html')">customers</button>
            <button onclick="navigateTo('/invoices/html')">invoices</button>
            <button onclick="navigateTo('/products/html')">products</button>
            <button onclick="navigateTo('/quatations/html')">Quatation</button>
            <button onclick="navigateTo('/dataofpro/html')">data_of_pro</button>
            <button onclick="navigateTo('/dataofcalprofit/html')">data_of_calprofit</button>
        </body>
        </html>
    `);
});

module.exports = router;