/**fetch(
    "http://localhost:4000/signup",
    {
        method : "POST",
        body : JSON.stringify({
            firstname : "test",
            lastname : "test",
            birthdate : "2006-01-01",
            password : "testp",
            username : "bota"
        }),
        headers : {
            'Content-type' : 'application/json; charset=UTF-8',
        },
    }
)
    .catch(err=>{
        if (err)
            throw err
    }) */
fetch('/login/1')
.then(v=> console.log(v.json()))
.catch(err=>{
    if (err)
        throw err
})