// server.js หรือ app.js
const express = require('express');
const cors = require('cors'); // Import cors middleware
const customersRoutes = require('./routes/customersRoutes');
const invoicesRoutes = require('./routes/invoicesRoutes');
const productsRoutes = require('./routes/productsRoutes');
const quatationsRoutes = require('./routes/quatationsRoutes');
const dataOfProRoutes = require('./routes/dataOfProRoutes');
const MainRoutes = require('./routes/Main');

const app = express();
const hostname = 'http://localhost';
const port = 8888;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all requests

// Main Server
app.use('/', MainRoutes);
// Use routes from the new files
app.use('/customers', customersRoutes);
app.use('/invoices', invoicesRoutes);
app.use('/products', productsRoutes);
app.use('/quatations', quatationsRoutes);
app.use('/dataofpro', dataOfProRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Server is running on \x1b[31m${hostname}:${port}\x1b[0m`);
});
