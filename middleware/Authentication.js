import jwt from 'jsonwebtoken'
import { User } from '../models/User.js';

export const isAuthenticated = async (req,res,next) => {
    const token = req.header("Auth");
    // console.log("Token is : ",token);
    if(!token) {
        return res.json({
            message:"Login First",
        })
    }

    const decoded = jwt.verify(token, process.env.JWT );
    
    const id = decoded.user;

    let user = await User.findById(id);

    if(!user) {
        return res.json({
            message:"User not find",
        })
    }

    // saving user globally
    req.user = user;

    next();    
}