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
exports.version = () => {
    return taraxa_rpc("net_version")
}
exports.peerCount = () => {
    return taraxa_rpc_int("net_peerCount")
}
exports.listening = () => {
    return taraxa_rpc("net_listening")
}