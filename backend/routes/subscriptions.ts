//defines routes/endpoints

import { createSubscription, createUser, deleteSubscription, getSubscriptionByUserId, updateSubscription, updateUserProfile } from '../services/subscriptionService';

import express from 'express';
import { generateAndSaveApikeyForUser } from '../services/userService';

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
router.get('/protectedRoute', async (req, res) => {

})
router.post('/subscriptions', validateSubscription, async (req, res) => {
    const errors = validateResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const subscription = await createSubscription(req.body);
        res.json(subscription);
    } catch (error){
    res.status(201).json({ error: "Error occured while creating subscription"});
    }
})
router.post('/users', async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await createUser(userData);
        const apiKey = await generateAndSaveApikeyForUser(newUser.id);
        res.status(201).json({ userId: newUser.id, apiKey })       
    }
    catch (error) {
        res.status(500).json({ message: 'Error '})
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
router.patch('/users/:userId', isAuthorized, async (req, res) => {
    try {
        const userId = parseInt(req.params.userId);
        if (isNaN(userId)) {
            return res.status(400).json({ message: 'Invalidate user ID' });
        }
        const updateData = req.body;

        const updatedUser = await updateUserProfile(userId, updateData)
        res.body(updatedUser)
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user profile '});
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