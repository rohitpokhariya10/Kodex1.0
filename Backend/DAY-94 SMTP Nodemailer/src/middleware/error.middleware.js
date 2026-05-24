// Global error handler: sends a consistent response for ApiError and unknown errors.
const errorMiddleware = (err , req , res , next)=>{
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        message:message
    });
}

module.exports = errorMiddleware;
