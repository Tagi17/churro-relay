import {PrismaClient, PrismaClientExtends} from '@prisma/client';

import crypto from "crypto";

const prisma = new PrismaClient();

export async function generateAndSaveApikeyForUser(userid: number) {
    
    const apiKey = crypto.randomBytes(32).toString('hex');

    await prisma.user.update({
        where: { 
            id: userid 
        },
        data: { 
            apiKey 
        },
    });

    return apiKey;
}