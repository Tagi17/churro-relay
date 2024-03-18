import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const checkSubscription = (userId) => {
    // Connect to your database
    // Construct the SQL query to insert a new record
    // Use subscriptionData to populate the query parameters
    // Execute the query
    // Return the result or the created subscription object
    
}
export const createSubscription = async (subscriptionData) => {

    const subscription = await prisma.subscriber.create({
        data: {
            name: subscriptionData.name, 
            dateJoined: subscriptionData.dateJoined,
            userId: subscriptionData.userId
        },
    });
    return subscription;
}

export const getSubscriptionByUserId = async (userId: number) => {
    return await prisma.subscriber.findMany({
        where: { 
            userId: userId, 
        },
    })
}

export const updateSubscription = (subscriptionId, updateData) => {
    // Connect to your database
    // Construct the SQL query to update a subscription record by subscriptionId
    // Use updateData to populate the query parameters for fields to update
    // Execute the query
    // Return the result or the updated subscription object
}
export const deleteSubscription = async (subscriptionId: number) => {

    return await prisma.subscriber.delete({
        where: {
            id: subscriptionId,
        },
    })
}

