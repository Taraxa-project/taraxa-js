const eth = require('../lib/eth')

let test = () => {
    //eth.blockNumber().then(console.log)
    //eth.getBalance('0x7dbd9065d38ffbbb27c884baeffca113eda3cb50').then(console.log)
    eth.set({ host: "https://ropsten.infura.io/8EerjdeY73CYqLZXiNVB" }) //35.224.183.106:7777
    eth.getBlockByNumber(0x1).then(console.log, console.log)
}

exports.test = test