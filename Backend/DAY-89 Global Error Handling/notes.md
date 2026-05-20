# DAY-89 Global Error Handling - Revision Notes

These notes are written for fast future revision. Read from top to bottom once, then use the quick sections when debugging.

---

## 1. Project Idea In One Line

This project is an Express 5 auth API with:

- user register
- user login
- access token + refresh token
- protected route using JWT middleware
- refresh access token
- logout
- global error handling middleware

Main concept:

```txt
Route -> Controller -> Service -> Model/DB
                  errors -> Global Error Middleware
```

---

## 2. Important Files And Their Work

### server.js

Entry point of the app.

Work:

1. Loads `.env` using `dotenv`.
2. Imports `app`.
3. Connects MongoDB using `connectDB()`.
4. Starts server using `app.listen()`.

Flow:

```txt
server.js
  -> connectDB()
  -> app.listen(PORT)
```

---

### src/app.js

Creates Express app and attaches middleware/routes.

Current important lines:

```js
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use(errorMiddleware);
```

Meaning:

- `express.json()` reads JSON body from request.
- `cookieParser()` reads cookies and creates `req.cookies`.
- `/api/auth` means all auth routes start with `/api/auth`.
- `errorMiddleware` must be at the end, after routes.

Why error middleware at end?

Because Express sends errors to the last error-handling middleware:

```txt
request -> routes/controllers -> if error -> errorMiddleware
```

---

### src/config/db.js

Connects MongoDB using `mongoose.connect()`.

It reads:

```js
process.env.MONGO_URI
```

Important:

Your error message says `MONGODB_URI is missing`, but code checks `MONGO_URI`.
Keep env name and error message same to avoid confusion.

---

## 3. User Model

File:

```txt
src/models/user.model.js
```

Fields:

- `username`
- `email`
- `password`
- `refreshToken`

Important schema features:

### password has `select: false`

```js
password: {
  select: false,
}
```

Meaning:

By default, password will not come from DB queries.

Example:

```js
User.findOne({ email });
```

This will not include password.

So for login, you must do:

```js
User.findOne({ email }).select("+password");
```

### refreshToken also has `select: false`

```js
refreshToken: {
  select: false,
}
```

Meaning:

By default, refresh token will not come from DB.

So during refresh token validation:

```js
User.findById(decode.id).select("+refreshToken");
```

### Password hashing

This pre-save hook runs before saving user:

```js
userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});
```

Meaning:

- If password is new/changed, hash it.
- If password is not changed, do nothing.
- This prevents hashing an already hashed password again.

### comparePassword method

```js
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
```

Meaning:

- Incoming plain password is compared with hashed DB password.
- Returns `true` or `false`.

---

## 4. Token Utility

File:

```txt
src/utils/token.js
```

Functions:

```js
generateAccessToken(userId)
generateRefreshToken(userId)
```

Both create JWTs with:

```js
{ id: userId }
```

Access token uses:

```js
process.env.ACCESS_TOKEN_SECRET
process.env.ACCESS_TOKEN_EXPIRY
```

Refresh token uses:

```js
process.env.REFRESH_TOKEN_SECRET
process.env.REFRESH_TOKEN_EXPIRY
```

Simple difference:

```txt
Access Token  -> short life, used to access protected routes
Refresh Token -> longer life, used to generate new access token
```

---

## 5. ApiError

File:

```txt
src/utils/apiError.js
```

Used to create custom errors:

```js
throw new ApiError(401, "Unauthorized request");
```

Why use this?

Because your global error middleware can read:

```js
err.statusCode
err.message
```

Important naming note:

Your file is `apiError.js`, but in `auth.middleware.js` import is:

```js
require("../utils/ApiError")
```

On Windows this may work because Windows paths are case-insensitive.
On Linux deployment it can fail.

Best practice:

```js
const ApiError = require("../utils/apiError");
```

---

## 6. Global Error Handling Middleware

File:

```txt
src/middleware/error.middleware.js
```

Current idea:

```js
const errorMiddleware = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    message: message,
  });
};
```

Meaning:

- If error has `statusCode`, use it.
- Otherwise use `500`.
- Send message in JSON response.

Example:

```js
throw new ApiError(401, "Invalid token");
```

Response:

```json
{
  "message": "Invalid token"
}
```

### Express 5 Error Behavior

You are using Express:

```json
"express": "^5.2.1"
```

In Express 5:

- sync throw goes to GEHM
- async throw goes to GEHM
- rejected promise goes to GEHM

So this works:

```js
const controller = async (req, res) => {
  throw new ApiError(401, "Error");
};
```

You do not strictly need `asyncHandler` in Express 5.

But in Express 4, async errors needed:

```js
asyncHandler(...)
```

or:

```js
try {
  ...
} catch (error) {
  next(error);
}
```

---

## 7. asyncHandler

File:

```txt
src/utils/asyncHandler.js
```

Purpose:

It wraps async route handlers and forwards errors to GEHM.

In Express 5, it is optional for normal async controllers.

Correct pattern:

```js
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    return Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};
```

Note:

If keeping `asyncHandler`, make sure implementation is correct.

Wrong pattern:

```js
Promise.resolve(requestHandler(req, res, next).catch(next));
```

Why wrong?

Because it assumes `requestHandler(...)` always returns a promise before `.catch()` is called.

---

## 8. Auth Routes

File:

```txt
src/routes/auth.routes.js
```

Routes:

```txt
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh-access-token
GET  /api/auth/get-me
POST /api/auth/logout
```

Protected route:

```js
authRouter.get("/get-me", verifyJWT, getMeController);
```

Meaning:

```txt
Request -> verifyJWT -> getMeController
```

If JWT is valid, `verifyJWT` adds:

```js
req.user = user;
```

Then `getMeController` sends `req.user`.

---

## 9. Register Flow

Route:

```txt
POST /api/auth/register
```

Controller:

```txt
registerController
```

Service:

```txt
registerUserService
```

Full flow:

```txt
Client sends username, email, password
  -> controller receives req.body
  -> service checks if email already exists
  -> service creates user
  -> model pre-save hook hashes password
  -> service generates access token
  -> service generates refresh token
  -> service saves refresh token in DB
  -> controller stores both tokens in httpOnly cookies
  -> response sends user info
```

Important code idea:

```js
const isUserExist = await User.findOne({ email });
```

If user exists:

```js
throw new ApiError(409, "User already exists");
```

After creating user:

```js
newUser.refreshToken = refreshToken;
await newUser.save({ validateBeforeSave: false });
```

### What is `validateBeforeSave: false`?

```js
await user.save({ validateBeforeSave: false });
```

Meaning:

Save document, but do not run schema validations again.

Useful when:

- you only update token
- you do not want password/email validations to run again

---

## 10. Login Flow

Route:

```txt
POST /api/auth/login
```

Controller:

```txt
loginController
```

Service:

```txt
loginUserService
```

Full flow:

```txt
Client sends email and password
  -> service finds user by email and includes password
  -> service checks if user exists
  -> service compares password using bcrypt
  -> if password correct, generate new access token
  -> generate new refresh token
  -> save latest refresh token in DB
  -> controller sets cookies
  -> response sends user info
```

Important:

Because password has `select: false`, login needs:

```js
let isUserExist = await User.findOne({ email }).select("+password");
```

Password check:

```js
let isCheckPassword = await isUserExist.comparePassword(password);
```

If wrong password:

```js
throw new ApiError(401, "Invalid password");
```

Token rotation on login:

```txt
Every login creates new access token and refresh token.
Latest refresh token is saved in DB.
Old refresh token becomes useless.
```

---

## 11. Verify JWT Middleware

File:

```txt
src/middleware/auth.middleware.js
```

Purpose:

Protect routes like `/get-me`.

Flow:

```txt
Read access token from cookie or Authorization header
  -> if missing, throw 401
  -> verify token using ACCESS_TOKEN_SECRET
  -> find user by decoded id
  -> if user not found, throw 401
  -> attach user to req.user
  -> call next()
```

Token reading:

```js
const token =
  req.cookies?.accessToken ||
  req.header("Authorization")?.replace("Bearer ", "");
```

This supports both:

```txt
Cookie: accessToken=...
```

and:

```txt
Authorization: Bearer <token>
```

Verify token:

```js
decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
```

If token is invalid/expired, `jwt.verify()` throws error.
In Express 5, that error goes to GEHM.

Find user:

```js
const user = await User.findById(decodedToken.id).select(
  "-password -refreshToken"
);
```

Meaning:

Return user without password and refreshToken.

Attach user:

```js
req.user = user;
```

Then:

```js
next();
```

---

## 12. Get Me Flow

Route:

```txt
GET /api/auth/get-me
```

Route setup:

```js
authRouter.get("/get-me", verifyJWT, getMeController);
```

Flow:

```txt
Client sends access token
  -> verifyJWT validates token
  -> verifyJWT attaches user to req.user
  -> getMeController returns req.user
```

Controller:

```js
const getMeController = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
```

---

## 13. Refresh Access Token Flow

Route:

```txt
POST /api/auth/refresh-access-token
```

Purpose:

When access token expires, use refresh token to generate a new access token.

Full flow:

```txt
Client sends refreshToken cookie
  -> service checks refresh token exists
  -> service verifies refresh token using REFRESH_TOKEN_SECRET
  -> service finds user by decoded id and includes refreshToken
  -> service compares DB refresh token with cookie refresh token
  -> if same, generate new access token
  -> generate new refresh token
  -> save new refresh token in DB
  -> controller replaces old cookies with new tokens
```

Important:

```js
let { refreshToken } = data;
```

If missing:

```js
throw new ApiError(401, "Unauthorized request: refresh token is missing");
```

Verify:

```js
let decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
```

Find user with refresh token:

```js
let user = await User.findById(decode.id).select("+refreshToken");
```

Compare:

```js
if (user.refreshToken !== refreshToken) {
  throw new ApiError(401, "Refresh token is invalid or expired");
}
```

Why compare with DB?

Because only the latest refresh token should be valid.
This helps reject old/reused tokens.

---

## 14. Logout Flow

Route:

```txt
POST /api/auth/logout
```

Controller:

```txt
logoutController
```

Service:

```txt
logOutUserService
```

Full flow:

```txt
Client sends refreshToken cookie
  -> service finds user with that refresh token
  -> service removes refreshToken from DB
  -> controller clears accessToken cookie
  -> controller clears refreshToken cookie
  -> response says logout successful
```

Important service code:

```js
const user = await User.findOneAndUpdate(
  { refreshToken },
  {
    $unset: {
      refreshToken: 1,
    },
  },
  { new: true }
);
```

Meaning:

- Find user whose `refreshToken` matches.
- Remove `refreshToken` field from DB document.
- Return updated user because `{ new: true }`.

### findOneAndUpdate Basic Syntax

```js
const result = await User.findOneAndUpdate(
  filter,
  update,
  options
);
```

Parts:

```txt
filter  -> kisko find karna hai?
update  -> kya change karna hai?
options -> update ke baad kya behavior chahiye?
```

Example:

```js
User.findOneAndUpdate(
  { refreshToken },
  { $unset: { refreshToken: 1 } },
  { new: true }
);
```

---

## 15. Cookies

Your controllers set cookies like:

```js
.cookie("accessToken", accessToken, {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
})
```

Meaning:

### httpOnly: true

Frontend JavaScript cannot read cookie.
This is safer against XSS token stealing.

### secure: false

Cookie works on HTTP during local development.

For production HTTPS:

```js
secure: true
```

### sameSite: "lax"

Helps reduce CSRF risk while still allowing normal navigation.

---

## 16. Access Token vs Refresh Token

### Access Token

Used for protected routes.

Example:

```txt
GET /api/auth/get-me
```

Usually short expiry.

Stored in:

```txt
accessToken cookie
```

### Refresh Token

Used to generate a new access token.

Example:

```txt
POST /api/auth/refresh-access-token
```

Usually longer expiry.

Stored in:

```txt
refreshToken cookie
DB user.refreshToken
```

Why store refresh token in DB?

So logout/token rotation can invalidate old refresh tokens.

---

## 17. Why Refresh Token Rotation Is Useful

Your app rotates refresh token during:

- login
- refresh access token

Meaning:

```txt
Every time a new refresh token is created, it replaces old one in DB.
```

Security benefit:

If someone steals an old refresh token, it will fail because DB has latest token only.

---

## 18. Common Error Cases

### Register

User already exists:

```txt
409 User already exists
```

### Login

User not found:

```txt
404 User not registered
```

Wrong password:

```txt
401 Invalid password
```

### Verify JWT

Missing access token:

```txt
401 Unauthorized request: access token is missing
```

Invalid/expired token:

```txt
JWT error from jsonwebtoken
```

Better GEHM can convert it to:

```txt
401 Invalid or expired access token
```

### Refresh Token

Missing refresh token:

```txt
401 Unauthorized request: refresh token is missing
```

Token not matching DB:

```txt
401 Refresh token is invalid or expired
```

### Logout

Missing refresh token:

```txt
401 Unauthorized request: refresh token is missing
```

Invalid refresh token:

```txt
401 Invalid refresh token
```

---

## 19. Best Debugging Checklist

When auth is not working, check in this order:

1. Is server running?
2. Is MongoDB connected?
3. Is `.env` loaded?
4. Are token secrets present?
5. Is request body valid JSON?
6. Is `cookieParser()` used before routes?
7. Is cookie actually coming in request?
8. Is access token expired?
9. Is refresh token matching DB?
10. Is `errorMiddleware` placed after routes?
11. Is file import case correct, like `apiError.js` vs `ApiError.js`?

---

## 20. Important Environment Variables

Expected variables:

```env
PORT=3000
MONGO_URI=your_mongodb_url
ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=7d
```

Remember:

Secret names used in code must exactly match `.env`.

---

## 21. Quick Full Auth Flow Revision

### Register

```txt
POST /register
body -> username, email, password
creates user -> hashes password -> creates AT/RT -> saves RT in DB -> sends cookies
```

### Login

```txt
POST /login
body -> email, password
find user with password -> compare password -> creates new AT/RT -> saves RT -> sends cookies
```

### Get Me

```txt
GET /get-me
accessToken cookie/header -> verifyJWT -> req.user -> response user
```

### Refresh

```txt
POST /refresh-access-token
refreshToken cookie -> verify RT -> compare with DB RT -> create new AT/RT -> save new RT -> send cookies
```

### Logout

```txt
POST /logout
refreshToken cookie -> remove RT from DB -> clear cookies
```

---

## 22. Short Hinglish Summary

Project ka main funda:

```txt
Controller request/response handle karta hai.
Service business logic handle karti hai.
Model database structure handle karta hai.
Middleware request ke beech me checking karta hai.
GEHM saare errors ko final response me convert karta hai.
```

Auth ka main funda:

```txt
Access token se protected route access hota hai.
Refresh token se new access token banta hai.
Refresh token DB me store hota hai taaki logout/rotation possible ho.
```

Express 5 ka main funda:

```txt
Async controller/middleware me throw kiya hua error automatically GEHM me ja sakta hai.
Express 4 me asyncHandler ya try-catch needed hota tha.
```

---

## 23. Things To Improve Later

Useful future improvements:

1. Make all `ApiError` imports lowercase:

```js
require("../utils/apiError");
```

2. Improve GEHM for JWT errors:

```js
if (err.name === "JsonWebTokenError") {
  statusCode = 401;
  message = "Invalid token";
}

if (err.name === "TokenExpiredError") {
  statusCode = 401;
  message = "Token expired";
}
```

3. In production cookies, use:

```js
secure: true
```

4. Return `success: false` from error middleware:

```js
return res.status(statusCode).json({
  success: false,
  message,
});
```

5. Add input validation for register/login body.

6. Add protected logout if you want logout to require access token also.

