const axios = require('axios')

let IP = "0.0.0.0"
let PORT = 7777

const axio = axios.create({
    baseURL: "http://" + IP + ":" + PORT.toString()
});
axio.defaults.headers.post['Content-Type'] = 'application/json'

class Axios {
    static set(params) {
        if (params.ip) {
            IP = params.ip
        }
        if (params.port) {
            port = params.port
        }
        axio.defaults.baseURL = "http://" + IP + ":" + PORT.toString()
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

    static multiple(requsetArray, callback) {
        axios.all(requsetArray).then(axios.spread(callback));
    };

}
Axios.ip = '35.224.183.106'
Axios.port = 7777

module.exports = Axios;