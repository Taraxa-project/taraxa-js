# taraxa-js
Taraxa RPC javascript client  

taraxa-js npm address: [taraxa-js](https://www.npmjs.com/package/taraxa-js)  

Taraxa official website: [taraxa.io](https://taraxa.io)  

## install
```
npm install taraxa-js
```

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
const taraxa = require("taraxa-js")

taraxa.eth.blockNumber().then(console.log)

```
set config
``` js
const taraxa = require("taraxa-js")
taraxa.set({ip:"35.224.183.106",port:7777})

import {eth,taraxa,net}  from "taraxa-js"
eth.set({ip:"35.224.183.106",port:7777})
taraxa.set({ip:"35.224.183.106",port:7777})
net.set({ip:"35.224.183.106",port:7777})

taraxa.reset()
eth.reset()
taraxa.reset()
net.reset()

```
once call above any set, the whole package config will be influenced until you reset it again.

## methods
- eth
``` js
eth.syncing()

eth.coinbase()

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

eth.sendTransaction(trx)

eth.sendRawTransaction(trx)

eth.call(trx, tag)

eth.estimateGas(trx, tag)

eth.getBlockByHash(hash, fullTransactions)

eth.getBlockByNumber(tag, fullTransactions)

eth.getTransactionByHash(hash)

eth.getTransactionByBlockHashAndIndex(hash, index)

eth.getTransactionByBlockNumberAndIndex(tag, index)

eth.getTransactionRecehostt(hash)

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
```

- taraxa
``` js
taraxa.getDagBlockByHash(hash, fullTransactions)

taraxa.getDagBlockByLevel(tag, fullTransactions)

taraxa.getScheduleBlockByPeriod(period)

taraxa.dagBlockLevel()

taraxa.dagBlockPeriod()

taraxa.blockNumber()

taraxa.protocolVersion()
```

- net
``` js
net.version()

net.peerCount()

net.listening()
```