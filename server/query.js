const Pool = require('pg').Pool;

/** All psql request */
const allPsql = {
    "allUser" : ()=>`
        SELECT * FROM "user";
    `,

    "allDiscu" : ({idUser})=>`
        SELECT * FROM discution
        INNER JOIN have_discution
        ON have_discution.id_discution = discution.id
        WHERE have_discution.id_user = ${idUser}
    `,

    "MessageIn" : ({idDiscu, startn, n})=>`
        SELECT * FROM message
        WHERE id_discution=${idDiscu}
        ORDER BY creation_date ASC
        LIMIT ${n} OFFSET ${startn};
    `,

    "allFriendsOf" : ({idUser})=>`
        SELECT * FROM (
            SELECT be_friends.id_user as id_friend, date_de_debut FROM be_friends
            WHERE be_friends.id=${idUser}
            UNION
            SELECT be_friends.id as id_friend, date_de_debut FROM be_friends
            WHERE be_friends.id_user=${idUser}
        ) AS friends
        INNER JOIN "user"
        ON "user".id = friends.id_friend
        ORDER BY date_de_debut ASC;
    `,

    "validLogin" : ({username,password})=>{
        // pourquoi splitter ici ?
        let first_name = username.split(' ').slice(1, username.split(' ').length)
        let last_name = username.split(' ')[0];
        return`
                INSERT INTO "user"(
                    first_name,
                    last_name,
                    pseudo,
                    birth_date,
                    password
                ) VALUES (
                    '${first_name}',
                    '${last_name}',
                    '',
                    current_date,
                    '${password}'
                )
                RETURNING id;
    `},

    "validSignUp" : ({firstname,lastname,birthdate,gender,email, phone,password})=>``,

    "oneUser" : ({uuid})=>`
                SELECT id,first_name FROM "user"
                WHERE id=${uuid}; 
    `,
};

const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database: 'db',
    password: process.argv.slice(2)[0],
    port: process.argv.slice(2)[1],
});

const errAndResult = (err, result, next) => {
    if (err)
        throw err
    next()
};

const sendRow = (result, response) => {
    response.status(200).json(result.rows);
};

function getOneUser(request, response){
    const { uuid } = request.body;
    pool.query(
        allPsql["oneUser"](uuid),
        (err, result)=>errAndResult(
            err,
            result,
            (result, response)=>sendRow(result, response)
        )
    )
};

module.exports = {
    getOneUser,
};