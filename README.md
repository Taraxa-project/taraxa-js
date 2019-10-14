# jstaraxa
Taraxa RPC javascript client

npm address [jstaraxa](https://www.npmjs.com/package/jstaraxa)

## install
npm install jstaraxa

## usage
default parameters
``` js
config={
    ip:"0.0.0.0",
    port:7777,
    jsonrpc:"2.0",
    id:1
}
```
example
``` js
const jstaraxa = require("jstaraxa")

jstaraxa.eth.blockNumber().then(console.log)

```
set config
``` js
const jstaraxa = require("jstaraxa")
jstaraxa.set({ip:"35.224.183.106",port:7777})

import {eth,taraxa,net}  from "jstaraxa"
eth.set({ip:"35.224.183.106",port:7777})
taraxa.set({ip:"35.224.183.106",port:7777})
net.set({ip:"35.224.183.106",port:7777})

jstaraxa.reset()
eth.reset()
taraxa.reset()
net.reset()

```
once call above any set, the whole package config will be influenced untill you reset it again.

## methods
- eth
``` js
eth.syncing()

eth.coinbase()

eth.mining()

eth.hashrate()

eth.gasPrice()

eth.accounts()

eth.getBalance(address, tag)

eth.blockNumber()

eth.getStorageAt(address, position, tag)

eth.getTransactionCount(address, tag)

eth.getBlockTransactionCountByHash(hash)

eth.getBlockTransactionCountByNumber(tag)

eth.getUncleCountByBlockHash(hash)

eth.getUncleCountByBlockNumber(tag)

eth.getCode(address, tag)

eth.sign(address, data, tag)

eth.sendTransaction(trx)

eth.sendRawTransaction(trx)

eth.call(trx, tag)

eth.estimateGas(trx, tag)

eth.getBlockByHash(hash, fullTransactions)

eth.getBlockByNumber(tag, fullTransactions)

eth.getTransactionByHash(hash)

eth.getTransactionByBlockHashAndIndex(hash, index)

eth.getTransactionByBlockNumberAndIndex(tag, index)

eth.getTransactionReceipt(hash)

eth.pendingTransactions()

eth.getUncleByBlockHashAndIndex(hash, index)

eth.getUncleByBlockNumberAndIndex(tag, index)

eth.newFilter(filter)

eth.newBlockFilter()

eth.newPendingTransactionFilter()

eth.uninstallFilter(id)

eth.getFilterChanges(id)

eth.getFilterLogs(id)

eth.getLogs(filter)

eth.getWork()

eth.submitWork(nonce, header_power_hash, mix_digest)

eth.submitHashrate(hash_rate, id)

eth.getProof(address, storage_keys, tag)
```

- taraxa
``` js
taraxa.getDagBlockByHash(hash, fullTransactions)

taraxa.getDagBlockByLevel(tag, fullTransactions)

taraxa.dagBlockLevel()

taraxa.dagBlockPeriod()

taraxa.dagBlockPeriod()
```

- net
``` js
net.version()

net.peerCount()

net.listening()
```