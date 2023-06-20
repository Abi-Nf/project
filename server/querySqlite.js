const sqlite3 = require('sqlite3');

const dbName = "dataBase.db"

let db = new sqlite3.Database(dbName, err=>{
    if (err)
        throw err
    console.log(`Database ${dbName} is ready to be use`);
});

db.run("CREATE TABLE user()")
db.run("SELECT  * FROM user;")

db.close(err=>{
    if (err)
        throw err
    console.log(`Database ${dbName} is extinguished`);
})