// utils.js

function generateHtmlPage(title, fields, rows) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    height: 100vh;
                    margin: 0;
                    padding-top: 30px; /* เพิ่มระยะห่างจากด้านบน 30px */
                    font-family: Arial, sans-serif;
                }
                .button-container {
                    margin-bottom: 20px;
                }
                table {
                    border-collapse: collapse;
                    width: 80%;
                    margin: 20px 0;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
                th {
                    background-color: #f2f2f2;
                    text-align: center;
                }
            </style>
            <script>
                function navigateTo(path) {
                    window.location.href = path;
                }
            </script>
        </head>
        <body>
            <div class="button-container">
                <button onclick="navigateTo('/customers')">customers</button>
                <button onclick="navigateTo('/invoices')">invoices</button>
                <button onclick="navigateTo('/products')">products</button>
                <button onclick="navigateTo('/quatations')">Quatation</button>
                <button onclick="navigateTo('/dataofpro')">data_of_pro</button>
                <button onclick="navigateTo('/dataofcalprofit')">data_of_calprofit</button>
            </div>
            <table>
                <thead>
                    <tr>
                        ${fields.map(field => `<th>${field.name}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${rows.map(row => `
                        <tr>
                            ${fields.map(field => `<td>${row[field.name]}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </body>
        </html>
    `;
}

module.exports = generateHtmlPage;
