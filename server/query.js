const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'db',
    password: 'password',
    port: 5432,
});