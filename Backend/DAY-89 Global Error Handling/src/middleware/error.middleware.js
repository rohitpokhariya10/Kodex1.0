const errorMiddleware = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
//    console.error("Error" , message);
  return res.status(statusCode).json({
    message: message,
  });
};

module.exports = errorMiddleware;
