const jsonrpc = require('../jsonrpc/utl')

const _jsonrpc = "2.0"
const id = 1

exports.blockNumber = () => {
    var data = jsonrpc.message({ method: "eth_blockNumber" })
    jsonrpc.send(data).then(rsp => {
        var result = parseInt(rsp)
        console.log(result)
    })
}

exports.syncing = () => {
    var data = jsonrpc.message({ method: "eth_syncing" })
    jsonrpc.send(data).then(rsp => {
        console.log(rsp)
    })
}

