# Day 88 - Access Token and Refresh Token Notes

These notes explain this project in easy English + Hinglish.

## 1. Project ka main idea

This project is an Express + MongoDB authentication backend.

It handles:

- user register
- user login
- access token generate karna
- refresh token generate karna
- expired access token ke badle new access token dena
- password ko hash karke database me save karna
- token ko cookie me store karna

Simple meaning:

User login/register karega, backend usko two tokens dega:

- `accessToken`
- `refreshToken`

## 2. Access Token kya hota hai?

`accessToken` short-life token hota hai.

Iska use protected/private routes access karne ke liye hota hai.

Example:

```js
res.cookie("accessToken", accessToken, {
  httpOnly: true,
});
```

Access token usually jaldi expire hota hai, jaise 15 minutes, 30 minutes, etc.

Reason:

Agar access token kisi wrong person ke pass chala bhi jaye, to wo zyada time tak useful nahi rahega.

## 3. Refresh Token kya hota hai?

`refreshToken` long-life token hota hai.

Iska use new access token generate karne ke liye hota hai.

Example:

```js
res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
});
```

Refresh token access token se zyada time tak valid hota hai.

Example flow:

1. User login karta hai.
2. Backend access token + refresh token deta hai.
3. Access token expire ho jata hai.
4. User refresh token bhejta hai.
5. Backend refresh token verify karta hai.
6. Backend new access token aur new refresh token generate karta hai.

## 4. Folder structure

Important files:

```txt
server.js
src/app.js
src/config/database.js
src/models/user.model.js
src/routes/auth.routes.js
src/controllers/auth.controller.js
src/services/auth.services.js
src/utils/token.js
src/middleware/auth.middleware.js
```

## 5. server.js

File:

```txt
server.js
```

This is the entry point of the project.

Code ka kaam:

```js
require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");
```

Meaning:

- `.env` file se environment variables load karta hai.
- Express app import karta hai.
- MongoDB connection function import karta hai.

```js
app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`);
});
```

Meaning:

Server ko given port par start karta hai.

```js
connectDB();
```

Meaning:

MongoDB database se connection banata hai.

## 6. src/app.js

File:

```txt
src/app.js
```

This file Express app setup karta hai.

```js
const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");
```

Meaning:

- `express` backend server banane ke liye
- `cookie-parser` cookies read karne ke liye
- `authRouter` auth routes ko handle karne ke liye

```js
app.use(express.json());
```

Meaning:

Frontend/Postman se jo JSON body aati hai, usko read karne ke liye.

Example request body:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

```js
app.use(cookieParser());
```

Meaning:

Cookies ko read karne ke liye.

Example:

```js
req.cookies.refreshToken;
```

```js
app.use("/api/auth", authRouter);
```

Meaning:

Jab request `/api/auth` se start hogi, then request `authRouter` ke pass jayegi.

Final routes:

```txt
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh-token
```

## 7. src/config/database.js

File:

```txt
src/config/database.js
```

This file MongoDB connect karta hai.

```js
if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in .env file");
}
```

Meaning:

Agar `.env` file me `MONGO_URI` nahi hai, to error throw hoga.

```js
const connection = await mongoose.connect(process.env.MONGO_URI);
```

Meaning:

Mongoose ke through MongoDB se connect kar raha hai.

```js
console.log(`MongoDB connected: ${connection.connection.host}`);
```

Meaning:

Terminal me database host print karta hai, jaise:

```txt
MongoDB connected: 127.0.0.1
```

`127.0.0.1` ka meaning hota hai local computer / localhost.

## 8. src/models/user.model.js

File:

```txt
src/models/user.model.js
```

This file user schema/model banata hai.

Schema means user ka structure.

```js
name: {
  type: String,
  required: true,
  trim: true,
}
```

Meaning:

- `name` string hoga
- required hai
- extra spaces remove ho jayengi

```js
email: {
  type: String,
  required: true,
  unique: true,
  lowercase: true,
  trim: true,
}
```

Meaning:

- email required hai
- email unique hoga
- email lowercase me save hoga
- spaces remove hongi

```js
password: {
  type: String,
  required: true,
  minlength: 6,
  select: false,
}
```

Meaning:

- password required hai
- minimum 6 characters ka hona chahiye
- `select: false` ka matlab password normal query me return nahi hoga

Example:

```js
const user = await User.findOne({ email });
```

Isme password nahi milega.

Password chahiye login ke time, so:

```js
const user = await User.findOne({ email }).select("+password");
```

`+password` ka meaning:

Normally hidden password field ko is query me include karo.

```js
refreshToken: {
  type: String,
  default: "",
  select: false,
}
```

Meaning:

Refresh token bhi sensitive hai, isliye normally database query me return nahi hota.

Refresh token chahiye compare karne ke liye, so:

```js
const user = await User.findById(id).select("+refreshToken");
```

`select("+refreshToken")` ka meaning:

Hidden refresh token field ko is query me include karo.

## 9. Password hashing with pre save hook

In `user.model.js`:

```js
userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});
```

Meaning:

Ye function user save hone se pehle automatically run hota hai.

`pre("save")` is like Mongoose middleware.

`this` current user document ko refer karta hai.

```js
if (!this.isModified("password")) {
  return;
}
```

Meaning:

Agar password change nahi hua, to dobara hash mat karo.

Important reason:

Agar password ko baar baar hash kar diya, to login ke time password match nahi hoga.

```js
this.password = await bcrypt.hash(this.password, 10);
```

Meaning:

Plain password ko hashed password me convert karta hai.

Example:

```txt
123456
```

Database me kuch aisa save hoga:

```txt
$2b$10$randomHashedValue...
```

## 10. comparePassword method

In `user.model.js`:

```js
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
```

Meaning:

User ne jo password enter kiya hai, usko database wale hashed password ke saath compare karta hai.

Example:

```js
const isPasswordCorrect = await user.comparePassword(password);
```

Return:

- `true` if password correct
- `false` if password wrong

## 11. src/utils/token.js

File:

```txt
src/utils/token.js
```

This file JWT tokens generate karta hai.

### generateAccessToken

```js
let generateAccessToken = (userId) => {
  return jwt.sign(
    {
      id: userId,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
```

Meaning:

User id ko token ke andar store karta hai.

Token sign hota hai using:

```txt
ACCESS_TOKEN_SECRET
```

Token expire hota hai using:

```txt
ACCESS_TOKEN_EXPIRY
```

### generateRefreshToken

```js
let generateRefreshToken = (userId) => {
  return jwt.sign(
    {
      id: userId,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
```

Meaning:

Refresh token generate karta hai.

It uses:

```txt
REFRESH_TOKEN_SECRET
REFRESH_TOKEN_EXPIRY
```

## 12. .env variables

Your project needs these values in `.env`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/day88_at_n_rt
ACCESS_TOKEN_SECRET=yourAccessSecret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_SECRET=yourRefreshSecret
REFRESH_TOKEN_EXPIRY=7d
```

Meaning:

- `PORT` server port
- `MONGO_URI` MongoDB connection string
- `ACCESS_TOKEN_SECRET` access token verify/sign karne ke liye secret key
- `ACCESS_TOKEN_EXPIRY` access token expiry time
- `REFRESH_TOKEN_SECRET` refresh token verify/sign karne ke liye secret key
- `REFRESH_TOKEN_EXPIRY` refresh token expiry time

## 13. src/routes/auth.routes.js

File:

```txt
src/routes/auth.routes.js
```

This file routes define karta hai.

```js
authRouter.post("/register", registerController);
```

Final API:

```txt
POST /api/auth/register
```

Used for user registration.

```js
authRouter.post("/login", loginController);
```

Final API:

```txt
POST /api/auth/login
```

Used for user login.

```js
authRouter.post("/refresh-token", refreshAccessTokenController);
```

Final API:

```txt
POST /api/auth/refresh-token
```

Used for new access token generate karna using refresh token.

## 14. Controller vs Service

Controller ka kaam:

- request lena
- service call karna
- cookie set karna
- response send karna
- error handle karna

Service ka kaam:

- actual business logic
- database query
- password check
- token generation
- refresh token verification

Simple:

```txt
Route -> Controller -> Service -> Model/Database
```

## 15. Register flow

Files involved:

```txt
auth.routes.js
auth.controller.js
auth.services.js
user.model.js
token.js
```

API:

```txt
POST /api/auth/register
```

Request body:

```json
{
  "name": "Rohit",
  "email": "rohit@gmail.com",
  "password": "123456"
}
```

Flow:

1. Request `/api/auth/register` par aati hai.
2. Route request ko `registerController` ke pass bhejta hai.
3. Controller `registerService(req.body)` call karta hai.
4. Service name, email, password check karta hai.
5. Service check karta hai email already exist to nahi karta.
6. New user create hota hai.
7. Password save hone se pehle hash hota hai.
8. Access token generate hota hai.
9. Refresh token generate hota hai.
10. Refresh token database me save hota hai.
11. Controller cookies me access token and refresh token set karta hai.
12. Response send hota hai.

Important code:

```js
let newUser = await User.create({
  name,
  password,
  email,
});
```

User create karte time password plain hota hai, but database me save hone se pehle pre-save hook password hash kar deta hai.

```js
const accessToken = generateAccessToken(newUser._id);
const refreshToken = generateRefreshToken(newUser._id);
```

User id ke basis par tokens create hote hain.

```js
newUser.refreshToken = refreshToken;
await newUser.save();
```

Refresh token database me save hota hai so later compare ho sake.

## 16. Login flow

API:

```txt
POST /api/auth/login
```

Request body:

```json
{
  "email": "rohit@gmail.com",
  "password": "123456"
}
```

Flow:

1. Request `/api/auth/login` par aati hai.
2. Route request ko `loginController` ke pass bhejta hai.
3. Controller `loginService(req.body)` call karta hai.
4. Service email and password check karta hai.
5. Service user ko email se find karta hai.
6. Password field hidden hai, so `.select("+password")` use hota hai.
7. Entered password ko hashed password ke saath compare karta hai.
8. Password correct hai to new access token and refresh token generate hote hain.
9. Refresh token database me save hota hai.
10. Password and refresh token response me hide kiye jate hain.
11. Controller cookies set karta hai.
12. Login success response send hota hai.

Important code:

```js
let isUserExist = await User.findOne({ email }).select("+password");
```

Why `select("+password")`?

Because password schema me `select: false` hai.

Without `select("+password")`, password field nahi milegi and compare nahi ho payega.

```js
const isPasswordCorreect = await isUserExist.comparePassword(password);
```

Entered password check karta hai.

```js
isUserExist.password = undefined;
isUserExist.refreshToken = undefined;
```

Response me sensitive data nahi bhejna chahiye, isliye undefined kiya.

## 17. Refresh token flow

API:

```txt
POST /api/auth/refresh-token
```

Body ki zarurat nahi hai if refresh token cookie me hai.

Flow:

1. Request `/api/auth/refresh-token` par aati hai.
2. Controller cookie se refresh token read karta hai.
3. Controller `generateRtAtService(req.cookies.refreshToken)` call karta hai.
4. Service check karta hai refresh token available hai ya nahi.
5. JWT refresh token verify hota hai using `REFRESH_TOKEN_SECRET`.
6. Token ke andar se user id milti hai.
7. User database se find hota hai.
8. Refresh token hidden hai, so `.select("+refreshToken")` use hota hai.
9. Database refresh token and cookie refresh token compare hote hain.
10. Agar match nahi hua, error.
11. Agar match hua, new access token and new refresh token generate hote hain.
12. New refresh token database me save hota hai.
13. Controller cookies me new tokens set karta hai.
14. Response send hota hai.

Important code:

```js
let verifyRefreshToken = jwt.verify(
  refreshToken,
  process.env.REFRESH_TOKEN_SECRET
);
```

Meaning:

Refresh token valid hai ya nahi check karta hai.

```js
let user = await User.findById(verifyRefreshToken.id).select("+refreshToken");
```

Meaning:

Token ke id se user find karo and hidden refresh token ko include karo.

```js
if (user.refreshToken !== refreshToken) {
  throw new Error("Invalid refresh token");
}
```

Meaning:

Cookie wala refresh token database wale refresh token se match hona chahiye.

Why compare needed?

Because agar old/invalid/stolen refresh token use ho raha hai, backend reject kar sake.

```js
user.refreshToken = newRefreshToken;
await user.save();
```

Meaning:

New refresh token database me save ho gaya. Old refresh token no longer valid.

This is called refresh token rotation.

## 18. Why store refresh token in database?

Refresh token database me store karne ka benefit:

- logout implement karna easy hota hai
- stolen/old token reject kar sakte hain
- token rotation possible hota hai
- server verify kar sakta hai ki ye latest valid token hai ya nahi

If refresh token database me store nahi karenge, then sirf JWT valid hone se request accept ho jayegi.

## 19. Why use httpOnly cookies?

Code:

```js
res.cookie("accessToken", accessToken, {
  httpOnly: true,
});
```

Meaning:

Cookie JavaScript se access nahi hogi.

Frontend JavaScript cannot do:

```js
document.cookie
```

to read httpOnly token.

Security benefit:

XSS attack me token steal hona difficult hota hai.

Production me usually ye options bhi add karte hain:

```js
res.cookie("accessToken", accessToken, {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
});
```

Note:

`secure: true` HTTPS ke saath use hota hai.

## 20. src/middleware/auth.middleware.js

File:

```txt
src/middleware/auth.middleware.js
```

This middleware protected routes ke liye hai.

Meaning:

Jis route par sirf logged-in user ko access dena hai, waha ye middleware lagayenge.

Token read karta hai from:

```js
req.cookies?.accessToken;
```

or:

```js
req.header("Authorization")?.replace("Bearer ", "");
```

So access token cookie se bhi aa sakta hai, ya Authorization header se bhi.

Authorization header example:

```txt
Authorization: Bearer yourAccessTokenHere
```

```js
const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
```

Meaning:

Access token verify karta hai.

```js
const user = await User.findById(decodedToken.id).select(
  "-password -refreshToken"
);
```

Meaning:

Token ke andar jo user id hai, usse user find karta hai.

`-password -refreshToken` ka meaning:

Password and refresh token response/query result me mat lao.

```js
req.user = user;
```

Meaning:

Logged-in user ki info request object me store kar di.

Next controller me aise use kar sakte hain:

```js
req.user;
```

## 21. How to use authMiddleware

Example:

```js
const authMiddleware = require("../middleware/auth.middleware");

router.get("/profile", authMiddleware, profileController);
```

Meaning:

`/profile` route access karne se pehle token verify hoga.

If token valid:

Request controller tak jayegi.

If token missing/invalid:

Response:

```json
{
  "message": "Invalid or expired access token"
}
```

## 22. Full request flow diagram

Register:

```txt
Client/Postman
   -> POST /api/auth/register
   -> auth.routes.js
   -> registerController
   -> registerService
   -> User model
   -> MongoDB
   -> tokens generated
   -> cookies set
   -> response
```

Login:

```txt
Client/Postman
   -> POST /api/auth/login
   -> auth.routes.js
   -> loginController
   -> loginService
   -> User.findOne().select("+password")
   -> compare password
   -> tokens generated
   -> cookies set
   -> response
```

Refresh token:

```txt
Client/Postman
   -> POST /api/auth/refresh-token
   -> auth.routes.js
   -> refreshAccessTokenController
   -> generateRtAtService
   -> jwt.verify(refreshToken)
   -> User.findById().select("+refreshToken")
   -> compare refresh token
   -> new tokens generated
   -> cookies set
   -> response
```

Protected route:

```txt
Client/Postman
   -> request protected route
   -> authMiddleware
   -> read accessToken
   -> jwt.verify(accessToken)
   -> find user
   -> req.user = user
   -> next controller
```

## 23. Important Mongoose select notes

### select: false

In schema:

```js
password: {
  type: String,
  select: false,
}
```

Meaning:

Password normal query me nahi aayega.

### select("+password")

```js
User.findOne({ email }).select("+password");
```

Meaning:

Hidden password field ko include karo.

Used in login because password compare karna hota hai.

### select("+refreshToken")

```js
User.findById(id).select("+refreshToken");
```

Meaning:

Hidden refresh token field ko include karo.

Used in refresh token flow because database refresh token compare karna hota hai.

### select("-password -refreshToken")

```js
User.findById(id).select("-password -refreshToken");
```

Meaning:

Password and refresh token ko exclude karo.

Used when user data response me safe way me bhejna ho.

## 24. Important JWT notes

JWT means JSON Web Token.

JWT has 3 parts:

```txt
header.payload.signature
```

In this project payload me user id store hoti hai:

```js
{
  id: userId;
}
```

Token create:

```js
jwt.sign(payload, secret, options);
```

Token verify:

```js
jwt.verify(token, secret);
```

If token valid hai, decoded data milega.

If token invalid/expired hai, error throw hoga.

## 25. Common errors and meaning

### All fields are required

Meaning:

Name/email/password missing hai.

Register me:

```js
if (!name || !email || !password)
```

Login me:

```js
if (!email || !password)
```

### User email already exist

Meaning:

Same email se user already registered hai.

### Unauthorised access

Meaning:

Login email se user nahi mila.

### Invalid password

Meaning:

Email sahi hai but password wrong hai.

### Unauthorized user

Meaning:

Refresh token request me refresh token missing hai.

### Invalid refresh token

Meaning:

Cookie refresh token database wale refresh token se match nahi hua.

### Invalid or expired access token

Meaning:

Access token missing, invalid, ya expired hai.

## 26. Postman testing

### Register

Method:

```txt
POST
```

URL:

```txt
http://localhost:PORT/api/auth/register
```

Body:

```json
{
  "name": "Rohit",
  "email": "rohit@gmail.com",
  "password": "123456"
}
```

### Login

Method:

```txt
POST
```

URL:

```txt
http://localhost:PORT/api/auth/login
```

Body:

```json
{
  "email": "rohit@gmail.com",
  "password": "123456"
}
```

### Refresh token

Method:

```txt
POST
```

URL:

```txt
http://localhost:PORT/api/auth/refresh-token
```

Body:

```txt
No body needed if refreshToken cookie is present.
```

## 27. Small improvements you can do later

Right now all controller errors return `500`.

Better approach:

- missing fields -> `400`
- wrong email/password -> `401`
- user already exists -> `409`
- server/database error -> `500`

Example:

```js
return res.status(401).json({
  message: "Invalid email or password",
});
```

Also in production cookies should use:

```js
{
  httpOnly: true,
  secure: true,
  sameSite: "strict"
}
```

## 28. One-line summary

This project registers/logs in users, hashes passwords, creates JWT access and refresh tokens, stores refresh token in database, sends tokens in httpOnly cookies, and uses refresh token to generate new tokens when access token expires.
