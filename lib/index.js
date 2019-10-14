const Axios = require('./axio');

function hello() {
    Axios.get('/api/block/latest').then((response) => {
        console.log(response.data)
    })
}

exports.hello = hello;