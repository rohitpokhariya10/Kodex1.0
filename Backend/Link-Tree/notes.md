#
46:29 code Start Backend
#
object key dynamic then we use brackect notation --> process.env[name]
#
Step 2: What does ?? mean?
This is called the Nullish Coalescing Operator.
a ?? b
means:
If a is null or undefined, use b.

# express validator

1.

#
Jab validation fail hoti hai, express-validator internally ek error object banata hai:

# note : if validators me koi error nhi ata tuh ye array empty rheti hai like this ---> errors : [] and error ane par ----> 
errors : [
    {
  type: "field", // express-validator: normal field validation error
  value: "", // req.body.username ki value
  msg: "Username must be 3 to 30 characters", // tumhari withMessage()
  path: "username", // body("username") se
  location: "body" // body(...) use kiya hai isliye
}
]

# new authentication knowledge
Access token  → response JSON → Authorization header
Refresh token → httpOnly cookie

# Global Error handler middleware flow
Unknown URL request
→ 404 middleware creates AppError
→ next(error)
→ global errorHandler catches it
→ sends JSON response