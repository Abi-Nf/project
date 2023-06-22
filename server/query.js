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
};

const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database: 'db',
    password: process.argv.slice(2)[0],
    port: process.argv.slice(2)[1],
});

console.log(allPsql["allMessageOf"]({
    idUser1 : 1,
    idUser2 : 2,
}));

module.exports = {pool};