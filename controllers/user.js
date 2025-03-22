
import { User } from '../models/User.js'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


export const Registeration = async (req,res) => {
    const{name,email,password} = req.body
        if(name=="" || email=="" || password==""){
            return res.json({
                message:"all fields required"
            })
        }
        let user = await User.findOne({email})
        if(user) {
            return res.json({
                message:"User already exit",
                success:false,
            })
        }
        // hashing password
    
        const hashPas = await bcrypt.hash(password,10);
    
        // creating user
        user = await User.create({ name , email , password : hashPas });
        res.json({
            message:"User created successfully...",
            success:true,
            user
        })
    }

export const login = async (req,res) => {
    const { email , password } = req.body;

    if(email=="" || password==""){
        return res.json({
            message:"all fields required"
        })
    }

    const user = await User.findOne({email});

    if(!user) {
        return res.json({
            message:"User not found",
            success:false,
        })
    }

    const checkPas = await bcrypt.compare(password,user.password);

    if(!checkPas) {
        return res.json({
            message:"Password not correct",
            success:false,
        })
    }

    const token = jwt.sign({user:user._id} , process.env.JWT ,{
        expiresIn:'1d',
    })

    res.json({
        message:"Login Successfully",
        success:true,
        token,
    })

}