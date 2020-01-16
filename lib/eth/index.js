const jsonrpc = require('../jsonrpc')
const tag_check = jsonrpc.tag_check
const taraxa_rpc = jsonrpc.taraxa_rpc
const taraxa_rpc_int = jsonrpc.taraxa_rpc_int

exports.set = (params) => {
    jsonrpc.set(params)
}
exports.reset = () => {
    jsonrpc.reset()
}
exports.syncing = () => {
    return taraxa_rpc("eth_syncing")
}
exports.coinbase = () => {
    return taraxa_rpc("eth_coinbase")
}
exports.mining = () => {
    return taraxa_rpc("eth_mining")
}
exports.hashrate = () => {
    return taraxa_rpc_int("hash_rate")
}
//TODO
exports.gasPrice = () => {
    return taraxa_rpc("eth_gasPrice")
}


exports.accounts = () => {
    return taraxa_rpc("eth_accounts")
}
exports.getBalance = (address, tag) => {
    tag = tag_check(tag || "latest")
    return taraxa_rpc_int("eth_getBalance", [address, tag])
}
exports.blockNumber = () => {
    return taraxa_rpc_int("eth_blockNumber")
}

exports.getStorageAt = (address, position, tag) => {
    tag = tag_check(tag || "latest")
    return taraxa_rpc("eth_getStorageAt", [address, position, tag])
}
exports.getTransactionCount = (address, tag) => {
    tag = tag_check(tag || "latest")
    return taraxa_rpc_int("eth_getTransactionCount", [address, tag])
}

exports.getBlockTransactionCountByHash = (hash) => {
    return taraxa_rpc_int("eth_getBlockTransactionCountByHash", [hash])
}
exports.getBlockTransactionCountByNumber = (tag) => {
    return taraxa_rpc_int("eth_getBlockTransactionCountByNumber", [tag])
}
exports.getUncleCountByBlockHash = (hash) => {
    return taraxa_rpc("eth_getUncleCountByBlockHash")
}
exports.getUncleCountByBlockNumber = (tag) => {
    tag = tag_check(tag || "latest")
    return taraxa_rpc("eth_getUncleCountByBlockNumber")
}
exports.getCode = (address, tag) => {
    tag = tag_check(tag || "latest")
    return taraxa_rpc("eth_getCode", [address, tag])
}
exports.sign = (address, data, tag) => {
    return taraxa_rpc("eth_sign", [address, data, tag])
}
exports.sendTransaction = (trx) => {
    return taraxa_rpc("eth_sendTransaction", [trx])
}
exports.sendRawTransaction = (trx) => {
    return taraxa_rpc("eth_sendRawTransaction", [trx])
}
exports.call = (trx, tag) => {
    tag = tag_check(tag || "latest")
    return taraxa_rpc("eth_call", [trx, tag])
}
exports.estimateGas = (trx, tag) => {
    tag = tag_check(tag || "latest")
    return taraxa_rpc("eth_estimateGas", [trx, tag])
}
exports.getBlockByHash = (hash, fullTransactions) => {
    fullTransactions = fullTransactions || false
    return new Promise((resolve, reject) => {
        taraxa_rpc("eth_getBlockByHash", [hash, fullTransactions]).then(
            rsp => {
                var block_key_number = [
                    'difficulty', 'gasUsed', 'nonce', 'number', 'size', 'timestamp', 'totalDifficulty'
                ]
                block_key_number.forEach((key) => {
                    rsp[key] = parseInt(rsp[key])
                })
                resolve(rsp)
            },
            err => {
                reject(err)
            }
        )
    })

}
exports.getBlockByNumber = (tag, fullTransactions) => {
    tag = tag_check(tag || "latest")
    fullTransactions = fullTransactions || false
    return new Promise((resolve, reject) => {
        taraxa_rpc("eth_getBlockByNumber", [tag, fullTransactions]).then(
            rsp => {
                var block_key_number = [
                    'difficulty', 'gasUsed', 'nonce', 'number', 'size', 'timestamp', 'totalDifficulty'
                ]
                block_key_number.forEach((key) => {
                    rsp[key] = parseInt(rsp[key])
                })
                resolve(rsp)
            },
            err => {
                reject(err)
            }
        )
    })
}


exports.getTransactionByHash = (hash) => {
    return taraxa_rpc("eth_getTransactionByHash", [hash])
}
exports.getTransactionByBlockHashAndIndex = (hash, index) => {
    return taraxa_rpc("eth_getTransactionByBlockHashAndIndex", [hash, index])
}
exports.getTransactionByBlockNumberAndIndex = (tag, index) => {
    return taraxa_rpc("eth_getTransactionByBlockNumberAndIndex", [tag, index])
}
exports.getTransactionRecehostt = (hash) => {
    return taraxa_rpc("eth_getTransactionRecehostt", [hash])
}
exports.pendingTransactions = () => {
    return taraxa_rpc("eth_pendingTransactions")
}
exports.getUncleByBlockHashAndIndex = (hash, index) => {
    return taraxa_rpc("eth_getUncleByBlockHashAndIndex", [hash, index])
}
exports.getUncleByBlockNumberAndIndex = (tag, index) => {
    return taraxa_rpc("eth_getUncleByBlockNumberAndIndex", [tag, index])
}
exports.newFilter = (filter) => {
    return taraxa_rpc("eth_newFilter", [filter])
}
exports.newBlockFilter = () => {
    return taraxa_rpc("eth_newBlockFilter")
}
exports.newPendingTransactionFilter = () => {
    return taraxa_rpc("eth_newPendingTransactionFilter")
}
exports.uninstallFilter = (id) => {
    return taraxa_rpc("eth_ninstallFilter", [id])
}
exports.getFilterChanges = (id) => {
    return taraxa_rpc("eth_getFilterChanges", [id])
}
exports.getFilterLogs = (id) => {
    return taraxa_rpc("eth_getFilterLogs", [id])
}
exports.getLogs = (filter) => {
    return taraxa_rpc("eth_getLogs", [filter])
}
exports.getWork = () => {
    return taraxa_rpc("eth_getWork")
}
exports.submitWork = (nonce, header_power_hash, mix_digest) => {
    return taraxa_rpc("eth_submitWork", [nonce, header_power_hash, mix_digest])
}
exports.submitHashrate = (hash_rate, id) => {
    return taraxa_rpc("eth_submitHashrate", [hash_rate, id])
}
exports.getProof = (address, storage_keys, tag) => {
    return taraxa_rpc("eth_getProof", [address, storage_keys, tag])
}