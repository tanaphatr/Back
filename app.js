const express = require('express');
const cors = require('cors'); // Import cors middleware
const customersRoutes = require('./routes/customersRoutes');
const invoicesRoutes = require('./routes/invoicesRoutes');
const productsRoutes = require('./routes/productsRoutes');
const quatationsRoutes = require('./routes/quatationsRoutes');
const dataOfProRoutes = require('./routes/dataOfProRoutes');
const dataOfCalprofitRoutes = require('./routes/dataOfCalprofitRoutes');
const mainRoutes = require('./routes/main'); // Use consistent naming convention

const app = express();
const hostname = 'http://localhost';
const port = 8888;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all requests

// Main Server
app.use('/', mainRoutes);
// Use routes from the new files
app.use('/customers', customersRoutes);
app.use('/invoices', invoicesRoutes);
app.use('/products', productsRoutes);
app.use('/quatations', quatationsRoutes);
app.use('/dataofpro', dataOfProRoutes);
app.use('/dataofcalprofit', dataOfCalprofitRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Server is running on \x1b[31m${hostname}:${port}\x1b[0m`);
});
