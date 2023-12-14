import User from "../models/user.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


export const register = async (req,res)=>{
    
    try {
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword
        })

        await newUser.save()

        res.status(201).send("User created successfully")

    } catch (error) {
        res.status(500).json({
            message : "Unable to create user"
        })
    }

}

export const login = async (req,res)=>{
    
    try {

        const {username, password } = req.body

        const user = await User.findOne({username})

        if(!user) {
            return res.status(401).json({
                message : "User not registered"
            })
        }

        const verifyPassword = await bcrypt.compare(password,user.password)

        if(!verifyPassword) {
            return res.status(403).json({
                message : "Incorrect username or password"
            })
        }

        const token = jwt.sign({id: user._id, isAdmin : user.isAdmin}, process.env.JWT_SECRET)
        const expires = new Date();
        expires.setDate(expires.getDate() + 2);
        
        res.cookie("access_token", token, {
            httpOnly : true,
            expires
        }).status(200).json({
            message : "User logged in successfully",
        })

    } catch (error) {
        res.status(500).json({
            message : "Unable to login user"
        })
    }

}