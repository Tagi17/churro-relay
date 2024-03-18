//defines routes/endpoints

import { createSubscription } from '../services/subscriptionService';
import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
    
})
router.post('/subscriptions', async (req, res) => {
    try {
        const subscription = await createSubscription(req.body);
        res.json(subscription);
    } catch (error){
    res.status(201).json({ error: "Error occured while creating subscription"});
    }
})
// router.post('/', validateSubscription, isAuthorized, async (req, res) => {
//     const result = await createSubscription(req.body);
//     res.status(201).json(result);
// })
router.put('/', (req, res) => {
    
})
router.delete('/', (req, res) => {
    
})