import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (userData) => {
    const newUser = await prisma.user.create({
        data: userData,
    })
    return newUser;
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

export const updateSubscription = async (subscriptionId, updateData) => {

    return await prisma.subscriber.update({
        where: {
            id: subscriptionId,
        },
        data: updateData,
    });
    return updateSubscription;
}
export const deleteSubscription = async (subscriptionId: number) => {

    return await prisma.subscriber.delete({
        where: {
            id: subscriptionId,
        },
    })
}

export const updateUserProfile = async (userId, updateData) => {
    return await prisma.user.update({
        where: {
            id: userId,
        },
        data: updateData,
    })
}
export const getUserEthereumAddress = async (ethereumAddress) => {
    const user = await prisma.user.findUnique({
        where: {  ethereumAddress },
    });
    return user;
}