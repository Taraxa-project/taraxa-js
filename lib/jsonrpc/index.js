const Axios = require('../axio');
let send = (data, ip, port) => {
    ip = ip || "0.0.0.0"
    port = port || 777
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
    jsonrpc = args.jsonrpc || "2.0"
    id = args.id || 1
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

exports.send = send
exports.message = message