//defines routes/endpoints

import { createSubscription, deleteSubscription, getSubscriptionByUserId, updateSubscription } from '../services/subscriptionService';

import express from 'express';

const router = express.Router();


router.get('/userId', async (req, res) => {
    try {
        const userId = parseInt(req.params.userId);
        if(isNaN(userId)) {
            return res.status(400).json( { message: 'Invalid user ID' });
        }
        const subscriptions = await getSubscriptionByUserId(userId);
        res.json(subscriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching subscriptions '});
    }
})
router.post('/subscriptions', async (req, res) => {
    try {
        const subscription = await createSubscription(req.body);
        res.json(subscription);
    } catch (error){
    res.status(201).json({ error: "Error occured while creating subscription"});
    }
})
router.patch('/subscriptionId', async(req, res) => {
    try {
        const subscriptionId = parseInt(req.params.subscriptionId);
        if (isNaN(subscriptionId)) {
            return res.status(400).json({ message: 'Invalid subscription Id' })
        }
        const updatedSubscription = await updateSubscription(subscriptionId, req.body);
        res.json(updatedSubscription);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating subscription'});
    }
    
})
router.delete('/subscriptionId', async(req, res) => {
    try {
        const subscription = await deleteSubscription(req.params.subscriptionId);
        res.json(subscription);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting subscription'})
    }
})