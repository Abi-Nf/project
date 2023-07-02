const Pool = require('pg').Pool;

const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database: process.argv.slice(2)[2],
    password: process.argv.slice(2)[0],
    port: process.argv.slice(2)[1],
});


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