# Synapso

A social media project

## Express

| Method\request | /login                                                       | /signup                                                                                     |
|----------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| post           | request : {username,password} ; response : {uuid}            | request : {firstname,lastname,birthdate,gender,email or phone,password} ; response : {uuid} |
| get            | request : {uuid} ; response : {profile_img,firstname,uuid}   |                                                                                             |
