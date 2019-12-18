const axios = require('axios')

let HOST = "0.0.0.0"
let PORT = 7777

const axio = axios.create({
    baseURL: "http://" + HOST + ":" + PORT.toString()
});
axio.defaults.headers.post['Content-Type'] = 'application/json'

class Axios {
    static set(params) {
        if (params.host) {
            if (params.host.startsWith('http')) {
                HOST = params.host
            } else {
                HOST = "http://" + params.host
            }
        }
        if (params.port) {
            PORT = params.port
            axio.defaults.baseURL = HOST + ":" + PORT.toString()
        } else {
            axio.defaults.baseURL = HOST
        }

    }

    static get(url, params) {
        return axio({
            method: "GET",
            url: url,
            params: params,
            crossDomain: true
        });
    };

    static post(url, params) {
        return axio({
            method: "POST",
            url: url,
            data: params,
            crossDomain: true
        });
    };

    static multhostle(requsetArray, callback) {
        axios.all(requsetArray).then(axios.spread(callback));
    };

}
Axios.host = '35.224.183.106'
Axios.port = 7777

module.exports = Axios;