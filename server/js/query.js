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

    "validLogin" : ({username,password})=>`
            SELECT id FROM "user"
            WHERE pseudo = '${username}'
            AND password = '${password}';
    `,

    "validSignUp" : ({firstname,lastname,birthdate,gender,email, phone,password})=>`
    INSERT INTO "user"(
        first_name,
        last_name,
        pseudo,
        birth_date,
        gender,
        email,
        phone,
        password
    ) VALUES (
        '${firstname}',
        '${lastname}',
        '${pseudo}'
        '${birthdate}',
        '${gender}',
        '${email}',
        '${phone}',
        '${password}'
    )
    RETURNING id;
`,

    "oneUser" : ({uuid})=>`
                SELECT id,first_name FROM "user"
                WHERE id=${uuid}; 
    `,

    "addUser" : ({firstname,lastname,birthdate,password, username})=>`
        INSERT INTO "user" 
        (first_name,last_name,birth_date,password ,user_name)
        VALUES
        ('${firstname}','${lastname}','${birthdate}','${password}', '${username}');
    `,

    'addImg' : ({originalname, encoding ,mimetype, filename, path, size, destination})=>`
                    INSERT INTO image
                    (originalname, encoding ,mimetype, filename, path, size, destination)
                    VALUES
                    ('${originalname}', '${encoding}' ,'${mimetype}', '${filename}', '${path}', '${String(size)}', '${destination}');
    `,
};

const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database: process.argv.slice(2)[2],
    password: process.argv.slice(2)[0],
    port: process.argv.slice(2)[1],
});

const errAndResult = (err, result, next, param={}) => {
    if (err)
        throw err
    next({...param, result})
};

const sendRow = ({result, response}) => {
    response.status(200).json(result.rows);
};
const logNewUser = ({response}) => {
    console.log("Add a new user");
    sendRow({result, response})
};
const newImg = () => {
    console.log("Add a new image");
};
const loginTest = ({response}) => {
    const loginResult = result.rows
    console.log("Test login");
    console.log(loginResult);
    response.json({login : true})
};



function getOneUser(request, response){
    const uuid = parseInt(request.params.uuid);
    pool.query(`
        SELECT "user".id,first_name,filename FROM "user"
        FULL OUTER JOIN image
        ON "user".id = image.id_user
        WHERE "user".id=${uuid}; 
    `,
        (err, result)=>{
            if (err)
                throw err
            response.status(200).json(result.rows);
        }
    )
};

function addImage(request, response){
    const {originalname, encoding ,mimetype, filename, path, size, destination} = request.body;
    pool.query(`
        INSERT INTO image(
            originalname,
            encoding,
            mimetype,
            filename,
            path,
            size,
            destination
        ) VALUES (
            '${originalname}',
            '${encoding}',
            '${mimetype}',
            '${filename}',
            '${path}',
            '${String(size)}',
            '${destination}'
        );
    `,
            (err, result)=>{
                if (err)
                    throw err
                console.log("Add a new image");
            }
    )
    response.status(200).json({send : true});
};

function createAccount(request, response){
    const {firstname,lastname,birthdate,gender,email, phone,password} = request.body;
    pool.query(`
        INSERT INTO "user"(
            first_name,
            last_name,
            pseudo,
            birth_date,
            gender,
            email,
            phone,
            password
        ) VALUES (
            '${firstname}',
            '${lastname}',
            '${pseudo}'
            '${birthdate}',
            '${gender}',
            '${email}',
            '${phone}',
            '${password}'
        )
        RETURNING id;
    `,
    (err, result)=>{
        if (err)
            throw err
        response.status(200).json(result);
    }
    )
};

function login(request, response){
    const {username,password} = request.body;
    pool.query(()=>`
        SELECT id FROM "user"
        WHERE pseudo = '${username}'
        AND password = '${password}';
    `,
        (err, result)=>{
            if (err)
                throw err
            const loginResult = result.rows
            console.log("Test login");
            console.log(loginResult);
            response.json({login : true})
        }
    )
};

module.exports = {
    getOneUser,
    createAccount,
    addImage,
    login,
};