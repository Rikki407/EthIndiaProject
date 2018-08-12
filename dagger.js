var EthDagger = require('eth-dagger');
var web3 = require('web3')



// connect to Dagger ETH main network (network id: 1) over web socket
const url = 'mqtt://localhost:1883';

const dagger = new EthDagger('mqtt://localhost:1883');

// Use mqtt protocol for node (socket)
// var dagger = new Dagger('mqtts://mainnet.dagger.matic.network'); // dagger server
// get new block as soon as it gets created
dagger.on('latest:block', function(result) {
    console.log('New block created: ', result);
});

// get only block number (as it gets create