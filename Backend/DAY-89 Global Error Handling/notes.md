In your current code, do you need asyncHandler?

If you are using Express 5, then for normal async controllers like your loginController, asyncHandler is mostly optional.

If you are using Express 4, then asyncHandler is important.



###################################################################################################################################################################################################################################################
1. req.cookies.refreshToken can crash

If req.cookies is undefined, this will crash:

let refreshToken = req.cookies.refreshToken;

Use:

let refreshToken = req.cookies?.refreshToken;