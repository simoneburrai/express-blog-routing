const express = require("express");
const app = express();
const port = 4000;

app.use(express.static("public"));



app.listen(port, (req, res) => {
console.log(`Server attivo nella porta ${port}`);
})

