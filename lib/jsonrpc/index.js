const Axios = require('../axio');

let JSONRPC = "2.0"
let ID = 1

let set = (params) => {
    if (params.ip) {
        Axios.set({ ip: params.ip })
    }
    if (params.host) {
        Axios.set({ host: params.host })
    }
    if (params.port) {
        Axios.set({ port: params.port })
    }
    if (params.jsonrpc) {
        JSONRPC = params.jsonrpc
    }
    if (params.id) {
        ID = params.id
    }
}

let reset = () => {
    Axios.reset()
    JSONRPC = "2.0"
    ID = 1
}
let send = (data, host, port) => {
    return new Promise((resolve, reject) => {
        Axios.post('/', data).then(
            response => {
                var result = response.data.result
                if (result !== undefined) {
                    resolve(result)
                } else {
                    reject(response.data)
                }

            },
            err => {
                reject(err)
            }
        )
    })
}
let message = (args) => {
    jsonrpc = args.jsonrpc || JSONRPC
    id = args.id || ID
    params = args.params || []
    method = args.method || ""
    return { "jsonrpc": jsonrpc, "method": method, "params": params, "id": id }
}

exports.tag_check = (tag) => {
    if (typeof (tag) == "string") {
        var d = parseInt(tag)
        if (isNaN(d)) {
            return tag
        } else {
            return '0x' + d.toString(16)
        }
    }
    if (typeof (tag) == "number") {
        return '0x' + tag.toString(16)
    }
}

exports.taraxa_rpc = (method, params) => {
    params = params || []
    var data = message({ method: method, params: params })
    console.log(data)
    return send(data)
}

exports.taraxa_rpc_int = (method, params) => {
    params = params || []
    var data = message({ method: method, params: params })
    return new Promise((resolve, reject) => {
        send(data).then(
            rsp => {
                resolve(parseInt(rsp))
            },
            err => {
                reject(err)
            }
        )
    })
}

exports.set = set
exports.reset = reset
exports.send = send
exports.message = message