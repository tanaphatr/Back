const express = require('express');
const cors = require('cors'); // Import cors middleware
const db = require('./connect.js');

const app = express();
const port = 8888;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all requests

// Route to fetch customers =======================================================================

app.get('/customers', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM Customers');
        res.json(rows); // Send the queried rows (customer data) as JSON response
    } catch (err) {
        console.error('Error fetching customers:', err);
        res.status(500).json({ error: 'Error fetching customers' });
    }
});

app.post('/postcustomers', async (req, res) => {
    const { Name, City, District, Address, Tax, invoice_id } = req.body; 
    try {
        const result = await db.query(`
            INSERT INTO Customers (NAME, city, district, address, tax_id, invoice_id)
            VALUES ('${Name}', '${City}', '${District}', '${Address}', '${Tax}', '${invoice_id}')
        `);

        res.json(result); // Send the result of the insert operation as JSON response
    } catch (err) {
        console.error('Error inserting customer:', err);
        res.status(500).json({ error: 'Error inserting customer' });
    }
});

// Route to fetch invoices =======================================================================

app.get('/invoices', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM invoices');
        res.json(rows); // Send the queried rows (invoice data) as JSON response
    } catch (err) {
        console.error('Error fetching invoices:', err);
        res.status(500).json({ error: 'Error fetching invoices' });
    }
});

app.post('/postinvoices', async (req, res) => {
    const { Num, formdate, Termpay, Duedate, invoice_id } = req.body; 
    try {
        const result = await db.query(`
            INSERT INTO invoices (num, from_date, term_pay, due_date, customer_id)
            VALUES ('${Num}', '${formdate}', '${Termpay}', '${Duedate}', '${invoice_id}')
        `);

        res.json(result); // Send the result of the insert operation as JSON response
    } catch (err) {
        console.error('Error inserting invoice:', err);
        res.status(500).json({ error: 'Error inserting invoice' });
    }
});

// Route to fetch products =======================================================================

app.get('/products', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM products');
        res.json(rows); // Send the queried rows (product data) as JSON response
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Error fetching products' });
    }
});

app.post('/postproducts', async (req, res) => {
    const products = req.body; // รับข้อมูล products จาก req.body
    try {
        const promises = products.map(product => {
            const { productCode, description, quantity, unitPrice, discount, invoice_id } = product;
            return db.query(`
                INSERT INTO products (product_code, description, quantity, unit_price, discount, invoice_id)
                VALUES ('${productCode}', '${description}', '${quantity}', '${unitPrice}', '${discount}', '${invoice_id}')
            `);
        });

        await Promise.all(promises); // รอให้ทุก query เสร็จสมบูรณ์

        res.json({ message: 'Inserted all products successfully' });
    } catch (err) {
        console.error('Error inserting products:', err);
        res.status(500).json({ error: 'Error inserting products' });
    }
});

// Route to fetch Quatation =======================================================================

app.get('/quatations', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM quatations');
        res.json(rows); // Send the queried rows (product data) as JSON response
    } catch (err) {
        console.error('Error fetching quatations:', err);
        res.status(500).json({ error: 'Error fetching quatations' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
