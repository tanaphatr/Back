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
            <button onclick="navigateTo('/customers')">customers</button>
            <button onclick="navigateTo('/invoices')">invoices</button>
            <button onclick="navigateTo('/products')">products</button>
            <button onclick="navigateTo('/quatations')">Quatation</button>
            <button onclick="navigateTo('/dataofpro')">data_of_pro</button>
        </body>
        </html>
    `);
});

module.exports = router;