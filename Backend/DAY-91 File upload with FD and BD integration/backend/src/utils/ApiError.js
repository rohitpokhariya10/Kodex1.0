class ApiError extends Error{
    //throw new ApiError() me jo bhjenge vo constructor me receive hoga
    constructor(statusCode , message){
        super(message);

        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ApiError;