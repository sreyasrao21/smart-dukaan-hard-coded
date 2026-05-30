import express from 'express';
import cors from 'cors';
import {connectDB} from './db';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/",(req,res)=>{
    res.send("API running");
});

app.post("/test", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Received successfully",
        data: req.body,
    });
});

const PORT= 5000;

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
});
