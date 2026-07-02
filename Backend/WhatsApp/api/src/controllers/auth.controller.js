import * as userDao from "../dao/user.dao.js";
import * as sessioDao from "../dao/session.dao.js";
import * as authUtils from "../utils/auth.utils.js";

// POST /api/register
export const registerUser = async (req, res) => {
    try {
        console.log("hi")
        const { username, email, password } = req.body;

        const isUserExist = await userDao.getUserByEmailOrUsername({ username, email });

        if (isUserExist) {
            return res.status(409).json({
                message: "User already registered with this credential",
            });
        }

        const user = await userDao.createUser({ username, email, password });

        const accessToken = authUtils.generateAccessToken(user._id);
        const refreshToken = authUtils.generateRefreshToken(user._id);

        await sessioDao.createSession({ username, refreshToken , user});

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
            accessToken,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: error.message,
        });
    }
};

