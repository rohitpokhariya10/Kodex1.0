# Image Upload Project Flow Notes

Ye project ek Express.js backend hai jisme client image upload karta hai aur backend us image ko ImageKit cloud par upload karke final image URL response me bhejta hai.

## Main Request Flow

```txt
Client/Postman
   |
   | POST /api/uploads
   | Body: form-data, file field
   v
server.js
   |
   v
src/app.js
   |
   v
src/routes/upload.routes.js
   |
   v
src/middlewares/multer.middleware.js
   |
   v
src/controllers/upload.controller.js
   |
   v
src/services/imagekit.service.js
   |
   v
ImageKit Cloud
   |
   v
JSON Response to Client
```

## 1. Client Request

Client ya Postman se request aati hai:

```txt
POST http://localhost:3000/api/uploads
Body type: form-data
Key: image
Value: uploaded file
```

Is request ka purpose hai image ko backend tak bhejna.

## 2. server.js

`server.js` project ka entry point hai.

Yahan:

- `.env` file ke variables load hote hain using `dotenv`.
- Express app import hota hai.
- Server port `3000` par start hota hai.

Request sabse pehle running server par aati hai, fir Express app ko forward hoti hai.

## 3. app.js

`src/app.js` Express app configure karta hai.

Important code:

```js
app.use(express.json());
app.use("/api/uploads", uploadRouter);
app.use(errorMiddleware);
```

Yahan Express check karta hai ki request ka URL `/api/uploads` se match ho raha hai ya nahi.

Agar request `/api/uploads` par hai, to request `uploadRouter` ke paas chali jaati hai.

## 4. upload.routes.js

`src/routes/upload.routes.js` route define karta hai.

```js
uploadRouter.post("/", upload.any(), uploadController);
```

Final route ban jaata hai:

```txt
POST /api/uploads/
```

Is route me pehle `upload.any()` middleware chalega, fir `uploadController`.

## 5. multer.middleware.js

`src/middlewares/multer.middleware.js` file upload handle karta hai.

Multer ka kaam:

- Request ke `form-data` ko read karna.
- Uploaded file ko process karna.
- File ko `req.files` me attach karna.

Yahan `memoryStorage()` use hua hai:

```js
const storage = multer.memoryStorage();
```

Iska matlab file local disk me save nahi hoti. File temporary RAM me buffer ke form me store hoti hai.

Example:

```js
req.files = [
  {
    originalname: "photo.png",
    mimetype: "image/png",
    buffer: "<file data>",
    size: 12345
  }
]
```

Memory storage isliye use kiya kyunki file ko direct ImageKit cloud par upload karna hai.

## 6. upload.controller.js

`src/controllers/upload.controller.js` request ko handle karta hai.

Controller file nikalta hai:

```js
const file = req.files?.[0];
```

`req.files[0]` isliye use hua kyunki route me `upload.any()` use kiya hai.

Agar file nahi milti, to error throw hota hai:

```js
throw new ApiError(400, "Image file is required...");
```

Agar file mil jaati hai, to folder decide hota hai:

```js
const folder = process.env.IMAGEKIT_FOLDER || "/uploads";
```

Fir controller ImageKit service ko call karta hai:

```js
const uploadedImage = await uploadToImageKit(file, folder);
```

Controller ka main kaam:

- File validate karna.
- Upload service ko call karna.
- Final response client ko bhejna.

## 7. imagekit.service.js

`src/services/imagekit.service.js` actual ImageKit upload logic handle karta hai.

Important code:

```js
const uploadResponse = await imageKit.upload({
  file: file.buffer,
  fileName: file.originalname,
  folder: folder,
});
```

Yahan:

- `file.buffer` image ka actual data hai.
- `file.originalname` original file name hai.
- `folder` ImageKit ke andar upload location hai.

Ye service ImageKit cloud par file upload karti hai aur useful data return karti hai.

## 8. imageKit.config.js

`src/config/imageKit.config.js` ImageKit SDK configure karta hai.

Credentials `.env` file se aate hain:

```js
publicKey: process.env.IMAGEKIT_PUBLIC_KEY
privateKey: process.env.IMAGEKIT_PRIVATE_KEY
urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
```

`timeout: 30 * 1000` ka matlab hai agar ImageKit 30 seconds me response nahi deta, to request fail ho jaayegi.

## 9. ImageKit Response

ImageKit upload complete hone ke baad response deta hai.

Service response ko filter karke sirf useful fields return karti hai:

```js
{
  fileId,
  name,
  url,
  thumbnailUrl,
  filePath,
  size,
  mimetype
}
```

## 10. Final Client Response

Controller client ko success response bhejta hai:

```js
return res.status(201).json({
  message: "File uploaded successfully",
  success: true,
  data: uploadedImage,
});
```

Example response:

```json
{
  "message": "File uploaded successfully",
  "success": true,
  "data": {
    "fileId": "abc123",
    "name": "photo.png",
    "url": "https://ik.imagekit.io/...",
    "thumbnailUrl": "https://ik.imagekit.io/...",
    "filePath": "/uploads/photo.png",
    "size": 12345,
    "mimetype": "image/png"
  }
}
```

## Error Flow

Agar file request me nahi aati:

```txt
Client request
   |
   v
Route
   |
   v
Multer
   |
   v
Controller
   |
   v
ApiError throw
   |
   v
error.middleware.js
   |
   v
Error response to client
```

Error response:

```json
{
  "message": "Image file is required. Please upload file with field name 'image'",
  "success": false
}
```

## Short Summary

```txt
Client image bhejta hai
-> Express request receive karta hai
-> Route match hota hai
-> Multer file ko RAM me store karta hai
-> Controller file validate karta hai
-> Service ImageKit par upload karti hai
-> ImageKit image URL return karta hai
-> Controller success JSON response bhejta hai
```

## Why Each Part Is Used

- `server.js`: Server start karne ke liye.
- `app.js`: Express app setup aur middleware connect karne ke liye.
- `upload.routes.js`: Upload API route define karne ke liye.
- `multer.middleware.js`: File ko request se extract karne ke liye.
- `upload.controller.js`: Request validation aur response handle karne ke liye.
- `imagekit.service.js`: ImageKit upload logic alag rakhne ke liye.
- `imageKit.config.js`: ImageKit credentials/config central place par rakhne ke liye.
- `ApiError.js`: Custom errors banane ke liye.
- `error.middleware.js`: Sabhi errors ko proper JSON response me convert karne ke liye.
