# Synapso

A social media project

## Express

### version 1.0

| Method\request | /login                                                       | /signup                                                                                     |
|----------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| post           | request : {username,password} ; response : {uuid}            | request : {firstname,lastname,birthdate,gender,email or phone,password} ; response : {uuid} |
| get            | request : {uuid} ; response : {profile_img,firstname,uuid}   |                                                                                             |


---
---
---


### version 1.1

| Method\ | Request http | Response | Plus | request.body |
|--|--|--|--|--|
| post           | /login            | {uuid} |  | {username,password} |
| post           | /signup | {uuid} |  | {firstname,lastname,birthdate,gender,email, phone,password} |
| get            | /login/:uuid | {profile_img,firstname,uuid} |
