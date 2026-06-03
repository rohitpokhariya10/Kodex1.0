const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Server health is fine",
    success: true,
  });
});

let port = 3000 || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Implement SSE (Server-Sent Events).
app.get("/sse", (req, res) => {
    // These headers keep the connection open and stream data in chunks instead of sending it all at once.
  res.setHeader("content-type", "text/event-stream");
  res.setHeader("cache-control", "no-cache");
  res.setHeader("connection", "keep-alive");

  let interval = setInterval(() => {
    res.write("data: Hello Rohit from server\n\n");
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    res.end();// Tell the server to close this SSE connection.
  }, 10000);
});
