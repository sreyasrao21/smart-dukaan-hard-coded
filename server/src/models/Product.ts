import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        shopKeeperId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
            index:true,
        },
        name:{
            type : String,
            required: true,
        },
        price:{
            type:Number,
            required: true,
        },
        costPrice:{
            type:Number,
        },
        stock:{
            type:Number,
            required:true,
        },
        category:{
            type:String,
        },
        unit:{
            type:String,
        },
        icon:{
            type:String,
        },
        normalizedName:{
            type:String,
        },
        hsnCode:{
            type:String,
        },
        gstRate:{
            type:Number
        },
    },
    {
        timestamps:true
    }
);

export default mongoose.model('Product' , productSchema);