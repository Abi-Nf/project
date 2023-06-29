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
fetch('http://localhost:4000/login/1')
.then(v=> v.json())
.then(v=>{
    console.log(v);
    for (const colomn in v[0])
        document.getElementById("toFill").innerHTML += `<h2>${colomn} : </h2><p>${v[0][colomn]}</p>`;
})
.catch(err=>{
    if (err)
        throw err
})

fetch(
    'http://localhost:4000/login',
    {
        method : 'POST',
        body : JSON.stringify({
            username : "",
            password : "password"
        }),
        headers : {
            'Content-type' : 'application/json; charset=UTF-8',
        },
    }
)
.then(v=>v.json())
.then(v=>console.log(v))
.catch(err=>{
    if (err)
        throw err
})