fetch(
    "http://127.0.0.1:4000/signup",
    {
        method : "POST",
        mode : 'no-cors',
        body : {
            firstname : "test",
            lastname : "test",
            birthdate : "2006-01-01",
            password : "testp"},
        headers : {
            'Content-type' : 'application/json; charset=UTF-8',
        },
    }
)
    .catch(err=>{
        if (err)
            throw err
    })