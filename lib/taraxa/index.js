const jsonrpc = require('../jsonrpc')

const tag_check = jsonrpc.tag_check
const taraxa_rpc = jsonrpc.taraxa_rpc
const taraxa_rpc_int = jsonrpc.taraxa_rpc_int

let block_hex2int = (block) => {
    var keys = [
        'level', 'period', 'number', 'timestamp'
    ]
    keys.forEach((key) => {
        if(block[key]){
            block[key] = parseInt(block[key])
        }
    })
    return block
}

exports.set = (params) => {
    jsonrpc.set(params)
}
exports.reset = () => {
    jsonrpc.reset()
}
exports.getDagBlockByHash = (hash, fullTransactions) => {
    fullTransactions = fullTransactions || false
    return new Promise((resolve, reject) => {
        taraxa_rpc("taraxa_getDagBlockByHash", [hash, fullTransactions]).then(
            rsp => {
                resolve(block_hex2int(rsp))
            },
            err => {
                reject(err)
            }
        )
    })

}
exports.getDagBlockByLevel = (tag, fullTransactions) => {
    fullTransactions = fullTransactions || false
    tag = tag_check(tag)
    return new Promise((resolve, reject) => {
        taraxa_rpc("taraxa_getDagBlockByLevel", [tag, fullTransactions]).then(
            rsp => {
                var result = rsp.map(block => block_hex2int(block))
                resolve(result)
            },
            err => {
                reject(err)
            }
        )
    })
}
exports.dagBlockLevel = () => {
    return taraxa_rpc_int("taraxa_dagBlockLevel")
}
exports.dagBlockPeriod = () => {
    return taraxa_rpc_int("taraxa_dagBlockPeriod")
}
exports.blockNumber = () => {
    return taraxa_rpc_int("taraxa_blockNumber")
}