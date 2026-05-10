findOne({}) ---> condition ke basis me find karta hai jo hum obj me values dete hai uske basis pe

$or:[{}]



1. npm i json web token
2. const jwt = require("jsonwebtoken")
3. const token = jwt.sign({user data} , Jwt_Secret , expiresIn)
