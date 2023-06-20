const sqlite3 = require('sqlite3');

const dbName = `${process.argv.slice(2)[0]}.db`

let db = new sqlite3.Database(dbName, err=>{
    if (err)
        throw err
    console.log(`Database ${dbName} is ready to be use`);
});



db.close(err=>{
    if (err)
        throw err
    console.log(`Database ${dbName} is extinguished`);
})

function main(){
    switch (process.argv.slice(2)[1]) {
        case "init":
            init();
            break;
    
        default:
            console.log("Nothing to do");
            break;
    }
};

function init(){
    db.run(`
    ------------------------------------------------------------
    --        Script SQLite  
    ------------------------------------------------------------


    ------------------------------------------------------------
    -- Table: user
    ------------------------------------------------------------
    CREATE TABLE user(
        id            INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT ,
        first_name    TEXT NOT NULL ,
        last_name     TEXT NOT NULL ,
        pseudo        TEXT ,
        birth_date    NUMERIC NOT NULL
    );


    ------------------------------------------------------------
    -- Table: discution
    ------------------------------------------------------------
    CREATE TABLE discution(
        id       INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT ,
        titre    TEXT NOT NULL
    );


    ------------------------------------------------------------
    -- Table: message
    ------------------------------------------------------------
    CREATE TABLE message(
        id               INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT ,
        texte            TEXT NOT NULL ,
        creation_date    NUMERIC NOT NULL ,
        id_discution     INTEGER NOT NULL

        ,CONSTRAINT message_discution_FK FOREIGN KEY (id_discution) REFERENCES discution(id)
    );


    ------------------------------------------------------------
    -- Table: be_friends
    ------------------------------------------------------------
    CREATE TABLE be_friends(
        id         INTEGER NOT NULL ,
        id_user    INTEGER NOT NULL,
        CONSTRAINT be_friends_PK PRIMARY KEY (id,id_user)

        ,CONSTRAINT be_friends_user_FK FOREIGN KEY (id) REFERENCES user(id)
        ,CONSTRAINT be_friends_user0_FK FOREIGN KEY (id_user) REFERENCES user(id)
    );


    ------------------------------------------------------------
    -- Table: have_discution
    ------------------------------------------------------------
    CREATE TABLE have_discution(
        id              INTEGER NOT NULL ,
        id_discution    INTEGER NOT NULL,
        CONSTRAINT have_discution_PK PRIMARY KEY (id,id_discution)

        ,CONSTRAINT have_discution_user_FK FOREIGN KEY (id) REFERENCES user(id)
        ,CONSTRAINT have_discution_discution0_FK FOREIGN KEY (id_discution) REFERENCES discution(id)
    );



    `, err=>{
        if (err)
            throw err
    })
}