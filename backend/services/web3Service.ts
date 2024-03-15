//interact with external services 

const Web3 = require('web3');
const web3 = new Web3

function verifySignature(message, signature, expectedAddress) {
    const signingAddress = web3.eth.accounts.recover(message, signature);
    return signingAddress === expectedAddress;
}