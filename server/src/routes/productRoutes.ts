import express from "express";
import Product from "../models/Product";
import jwt from 'jsonwebtoken';

const router = express.Router();

// GET /api/products/:shopKeeperId? - if Authorization header with Bearer token is provided,
// the token's userId is used; otherwise the shopKeeperId param is used (legacy).
router.get('/:shopKeeperId?', async (req, res) => {
    try {
        let shopKeeperId = (req.params as any).shopKeeperId as string | undefined;

        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            const secret = process.env.JWT_SECRET;
            if (!secret) {
                return res.status(500).json({ success: false, message: 'Server JWT secret not configured' });
            }
            try {
                const payload = (jwt as any).verify(token, secret!) as any;
                shopKeeperId = payload.userId;
            } catch (err) {
                return res.status(401).json({ success: false, message: 'Invalid token' });
            }
        }

        if (!shopKeeperId) {
            return res.status(400).json({ success: false, message: 'shopKeeperId missing' });
        }

        const products = await Product.find({ shopKeeperId });

        res.json({ success: true, products });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error fetching Products' });
    }
});

export default router;