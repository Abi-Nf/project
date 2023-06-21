const sqlite3 = require('sqlite3');

const dbName = "dataBase.db"

let db = new sqlite3.Database(dbName, err=>{
    if (err)
        throw err
    console.log(`Database ${dbName} is ready to be use`);
});

db.run(`INSERT INTO user(
    first_name,
    last_name,
    pseudo,
    birth_date
) VALUES (
    "axel",
    "Rakoto",
    "maitreeee",
    "2023-01-01"
);`, err => {
    if (err)
        throw err
})

db.get("SELECT  * FROM user where id=2;", (err, result)=>{
    if (err)
        throw err
    console.log(result)
});

db.close(err=>{
    if (err)
        throw err
    console.log(`Database ${dbName} is extinguished`);
})