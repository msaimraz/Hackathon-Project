const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const authentication = require("../middleware/authentication");
require("../db/conn");

router.use(cookieParser());

router.get("/", (req, res) => {
    res.send("Hello World! router");
});

router.post("/register", async (req, res) => {
    const { cnic, rollnum, password } = req.body;

    if (!cnic || !rollnum || !password) {
        return res.status(422).json({ error: "Something Missing" });
    }
    try {
        const userExist = await User.findOne({ rollnum: rollnum });
        if (userExist) {
            return res.status(422).json({ error: "Roll Number Exist" });
        } else {
            const user = new User({ cnic, rollnum, password });

            await user.save();

            res.status(201).json({ message: "register Succesfully" });

        }
    } catch (err) {
        console.log(err);
    }
});

// Login Route

router.post("/signin", async (req, res) => {
    // console.log(req.body);
    // res.json({message:"done"})
    try {
        let token;
        const { rollnum, password } = req.body;

        if (!+rollnum || !password) {
            return res.status(400).json({ error: "Plz fill the data" })
        }
        const userLogin = await User.findOne({ rollnum: rollnum });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                // max 30 Days
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "SignIn Error" })
            } else {
                res.json({ message: "SignIn Succesfully" })
            }
        } else {
            res.status(400).json({ error: "SignIn Error" })
        }

    } catch (err) {
        console.log(err);
    }
});

// Course/Home
router.get('/getdata', authentication, (req, res) => {
    res.send(req.rootUser);
});
// // Course {Title}
router.post('/courses', authentication, async (req, res) => {
    try {
        const { cnic, rollnum, course } = req.body;

        if (!cnic || !rollnum || !course) {
            console.log("Enrolment error");
            return res.json({ error: "Please fill the Enrolment form" })
        }
        const enrollform = await User.findOne({ _id: req.userID });

        if (enrollform) {

            const selectedCourse = await enrollform.aadcourse(cnic, rollnum, course);

            await enrollform.save();

            res.status(201).json({ message: "Enrolment Success" })
        }

    } catch (error) {
        console.log(error);
    }
});

// Logout Us
router.get('/logout', authentication, (req, res) => {
    console.log('Logout');
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('User Logout');
});

module.exports = router;
