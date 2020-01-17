const eth = require('../lib/eth')

let test = () => {
    eth.set({ host: "http://64.225.42.78:7777" })
    eth.getBlockByHash('0xc4714d5d3ac4b87602da4c46e301e491202035f81a1a4260a6988f8ef17ebb6b').then(console.log)
    //eth.blockNumber().then(console.log)
    //eth.getBalance('0x7dbd9065d38ffbbb27c884baeffca113eda3cb50').then(console.log)
    // eth.set({ host: "https://ropsten.infura.io/8EerjdeY73CYqLZXiNVB" }) //35.224.183.106:7777
    //eth.getBlockByNumber(0x1).then(console.log, console.log)
    //eth.getBalance('0xa16A181AD474C82D8753eB0C10e8DD4e5710314f').then(console.log, console.log)
    // tx = '0xc89e6a2080150dddd7acc773cc36845bd4ff871bb974956b77fa95ca8100ee28'
    // eth.call({ from: "0xa16A181AD474C82D8753eB0C10e8DD4e5710314f", to: "0xc8962Ea52243D562daFf88Ba84Ef89d05AA1CCb0", data: "0x4c00f3e8c89e6a2080150dddd7acc773cc36845bd4ff871bb974956b77fa95ca8100ee28" }).then(console.log, console.log)
}

exports.test = test