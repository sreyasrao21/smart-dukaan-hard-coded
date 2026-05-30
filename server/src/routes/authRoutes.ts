import express from 'express';
import User from '../models/User';
import Product from '../models/Product';
import { starterProducts } from '../utils/starterProducts';

const router = express.Router();

// router.post('/login', async (req , res) => {
//     console.log("BODY RECEIVED:", req.body);
// });

router.post('/signup', async (req, res) => {

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
        
        try{
            const initialProducts = starterProducts.map((item:any)=>({
                shopKeeperId:user._id,
                name:item.name,
                price:item.price,
                stock:item.stock,
                unit:item.unit,
                icon:item.icon,
                category:item.category,
                
            }));
            await Product.insertMany(initialProducts);
        }
        catch(err){
            console.error('Product Seeding Failed',err);
        }

        return res.status(201).json({
            message: 'User created successfully',
            success: true,
            user: savedUser
        });

    } catch (error: any) {
        return res.status(500).json({
            message: 'Error creating user',
            success: false,
            error: error.message
        });
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
            user: user._id,
        });
    }
    catch(error){
        res.status(500).json({message:'Error validating User', error});
    }
});

export default router;