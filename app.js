const express = require("express");
const app = express();
const port = 4000;
const postRouter = require("./routers/posts.js");

//Setted static folder
app.use(express.static("public"));

//ROUTES
app.get("/", (req, res) => {
res.send("Questa è la home");
})
//Posts file route importing
app.use("/posts", postRouter);



app.listen(port, (req, res) => {
console.log(`Server attivo nella porta ${port}`);
})

