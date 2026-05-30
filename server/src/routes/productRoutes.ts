import express from "express";
import Product from "../models/Product";

const router = express.Router();

router.get('/:shopKeeperId', async (req,res)=>{

    try{
        const products = await Product.find({
            shopKeeperId: req.params.shopKeeperId,
        });

        res.json({
            success:true,
            products,
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Error fetching Products",
        });
    }

});

export default router;