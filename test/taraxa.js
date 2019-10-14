const taraxa = require('../lib/taraxa')

let test = () => {
    //taraxa.dagBlockLevel().then(console.log)
    taraxa.getDagBlockByLevel(1).then(console.log, console.log)
}

exports.test = test