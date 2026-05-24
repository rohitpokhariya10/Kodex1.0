class ApiError extends Error{
    constructor(statusCode , message){
        super(message);

        // Store HTTP status so the global error middleware can use it.
        this.statusCode = statusCode;
        this.success = false;
        //Error.captureStackTrace(this , this.constructor);
    }
}

module.exports = ApiError;
