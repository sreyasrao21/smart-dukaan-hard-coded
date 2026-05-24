import express from 'express';
import User from '../models/User';

const router = express.Router();

// router.post('/login', async (req , res) => {
//     console.log("BODY RECEIVED:", req.body);
// });

router.post('/signup', async (req, res) => {
    console.log("🔥 SIGNUP HIT");
    console.log("BODY:", req.body);

    const { name, email, username, phoneNumber, password } = req.body;

    try {
        const user = new User({
            name,
            email,
            username,
            phoneNumber,
            password
        });

        const savedUser = await user.save();

        console.log("✅ SAVED USER:", savedUser);

        return res.status(201).json({
            message: 'User created successfully',
            success: true,
            user: savedUser
        });

    } catch (error: any) {
        console.log("❌ SIGNUP ERROR:", error);
        return res.status(500).json({
            message: 'Error creating user',
            success: false,
            error: error.message
        });
    }
});

router.post('/signup1', async (req, res) => {
    const { name, email, username, phoneNumber, password } = req.body;

    try {
        const user = new User({
            name,
            email,
            username,
            phoneNumber,
            password
        });

        await user.save();

        res.status(201).json({
            message: 'User created successfully',
            success:true,
            user
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', success: false , error });
    }
});

router.post('/login', async (req , res) => {
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username});

        if(!user){
            return res.status(400).json({
                message:"User not found",
                success:false,
            });
        }

        if(user.password !== password){
            return res.status(400).json({
                message:"Invalid Password",
                success:false,
            })
        }
        
        return res.status(200).json({
            message:"Login Successful!",
            success: true,
        });
    }
    catch(error){
        res.status(500).json({message:'Error validating User', error});
    }
});

export default router;