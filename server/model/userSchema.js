const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
    cnic: {
        type: Number,
        required: true
    },
    rollnum: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    courses: [
        {
            cnic: {
                type: Number,
                required: true
            },
            rollnum: {
                type: Number,
                required: true
            },
            course: {
                type: String,
                required: true
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

})

// Password bcrypt hashing

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});
// JWT Token

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
};

userSchema.method.addCours = async function (cnic, rollnum, course) {
    try {
        this.courses = this.courses.concat({ cnic, rollnum, course });
        await this.save();
        return this.courses;
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;