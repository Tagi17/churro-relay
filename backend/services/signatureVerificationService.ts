//interact with external services

import express from 'express';

const { ethers } = require("ethers");

const router = express.Router();

// function verifySignature(message, signature, expectedAddress) {
//     const signingAddress = web3.eth.accounts.recover(message, signature);
//     return signingAddress === expectedAddress;
// }

router.post('/verifySignature', async (req, res) => {
    const { ethereumAddress, message, signature } = req.body;
    try {
        const signatureAddress = ethers.utils.verifyMessage(message, signature);

        if(ethereumAddress.toLowerCase() == signatureAddress.toLowerCase()) {
            res.json({ verfied: true });
        } else {
            res.status(401).json({ verified: false, message: "Signature verification failed"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error proccessing signature verification" });
    }
});
export default router;