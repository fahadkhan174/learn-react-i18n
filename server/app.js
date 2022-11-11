const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").Server(app);
app.use(cors({ credentials: false }));
app.use("/public", express.static("./public")); //I make my public folder static

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen("4000", () => {
  console.log("Server is now running on port 4000");
});
