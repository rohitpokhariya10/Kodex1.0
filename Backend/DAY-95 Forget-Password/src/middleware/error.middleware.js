const errorMiddleware = (err, req, res, next) => {
  console.error("=================================");
  console.error("ERROR MESSAGE:", err.message);
  console.error("ERROR STACK:", err.stack);
  console.error("=================================");

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    message: message,
    success: false,
  });
};
module.exports = errorMiddleware;
