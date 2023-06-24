fetch("http://127.0.0.1:4000/login/1")
    .catch(err=>{
        if (err)
            throw err
    })