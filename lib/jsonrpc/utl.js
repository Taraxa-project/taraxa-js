const Axios = require('../axio');
function send(data, ip, port) {
    ip = ip || "0.0.0.0"
    port = port || 777

    return new Promise((resolve, reject) => {
        Axios.post('/', data).then(
            response => {
                var result = response.data.result
                resolve(result)
            },
            err => {
                reject(err)
            }
        )
    })
}
function message(args) {
    jsonrpc = args.jsonrpc || "2.0"
    id = args.id || 1
    params = args.params || []
    method = args.method || ""
    return { "jsonrpc": jsonrpc, "method": method, "params": params, "id": id }
}

exports.send = send
exports.message = message