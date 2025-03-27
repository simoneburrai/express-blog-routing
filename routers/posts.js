const posts = require("../data/arrayposts.js");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send(posts);
})

router.get("/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const currentPost = posts[id-1];
	if( isNaN(id) || id < 1){
		res.send("Inserire un numero compreso tra 1 e 5")
	}
	if(id<=posts.length){
		res.send(currentPost);
	}else {
		res.send(`Ci sono solo ${posts.length} post`);
	}
})

router.post("/", (req, res) => {
	res.send("Stiamo creando un nuovo elemento");
})

router.put("/:id", (req, res) => {
	res.send("Stiamo modificando interamente l'elemento");	
});

router.patch("/:id", (req, res) => {
	res.send("Stiamo modificando parzialmente l'elemento");
});

router.delete("/:id", (req, res) => {
	res.send("Stiamo eliminando/distruggendo l'elemento");
});

module.exports = router;
