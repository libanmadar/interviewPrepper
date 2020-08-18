const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const blogRoutes = require("./blogs")

// User Routes 
router.use("/users", userRoutes);

// Blog Routes 

router.use("/blogs", blogRoutes);

//otherwise render the html page 

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
