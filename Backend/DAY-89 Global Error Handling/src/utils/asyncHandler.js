const asyncHandler = (requestHandler) =>{
return (req , res , next)=>{
    Promise.resolve(requestHandler(req , res , next).catch((error)=> next(error)))
}
}






module.exports = asyncHandler;
//async dunction they return promise
//sync function doest not return promise

//This function handles sync/async code both
// const asyncHandler = (requestHandler) => {
//   return (req, res, next) => {
//     return Promise.resolve()//jo bhi hai us promise me badaldo 
//       .then(() => requestHandler(req, res, next))//.then islie lagta hai ki resolved promise ko handle krne ke lie -->agar promise fullilled hua toh .then me uska result ayega and promise reject hua tuh .catchj me jayega
//       .catch(next);
//   };
// };

module.exports = asyncHandler;

// बिल्कुल, तुमने बिल्कुल सही सारांश निकाला! यही वजह है कि हम Promise.resolve() का इस्तेमाल करते हैं। इससे हमें किसी अलग try-catch की ज़रूरत नहीं पड़ती। चाहे हमारा handler synchronous हो या asynchronous, हम उसे एक promise में बदल देते हैं, और फिर .then() और .catch() से आसानी से हर तरह का error या result संभाल लेते हैं।