const mysql = require('mysql2');

const config = {
    user: 'root',
    password: 'APy8SnOEU!KtxOB_',
    host: 'localhost',
    database: 'billmake',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(config);

// Testing the connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }
    console.log('Connected to the database');
    connection.release(); // release the connection
});

module.exports = pool.promise(); // Export the pool for queries
