const imagekit = require("imagekit");

const imageKit = new imagekit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,

  timeout: 30 * 1000, //timeout ka matlab: agar ImageKit response 30 seconds me nahi aaya, request fail ho jaayegi.
});

module.exports = imageKit;
