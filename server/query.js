const Pool = require('pg').Pool;

const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database: 'db',
    password: process.argv.slice(2)[0],
    port: process.argv.slice(2)[1],
});