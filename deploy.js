const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'amazing abuse street vibrant become ball father tomorrow cute warfare arctic lunar',
    'https://rinkeby.infura.io/v3/c63045cc393d4377886cd33fa3e76fd6'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Account at 0', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data : bytecode, arguments : ['Hi There!']})
    .send({gas : '1000000', from: accounts[0]})
    console.log('Contract deployed at: ', result.options.address);
};
deploy();