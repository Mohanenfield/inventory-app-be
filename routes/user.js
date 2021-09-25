const router = require("express").Router();

router.get("/users", (req,res)=>{
    res.send("users is successfull")
});

router.post("/add", (req,res)=>{
    const username = req.body.username;
    res.send("username is " + username);
})

module.exports=router;