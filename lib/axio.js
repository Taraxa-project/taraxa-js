const axios = require('axios')

let IP = "0.0.0.0"
let PORT = 7777

const axio = axios.create({
    baseURL: "http://" + IP + ":" + PORT.toString()
});
axio.defaults.headers.post['Content-Type'] = 'application/json'

class Axios {
    static set(params) {
        if (params.host) {
            axio.defaults.baseURL = params.host
        } else {
            if (params.ip) {
                IP = params.ip
            }
            if (params.port) {
                PORT = params.port
            }
            axio.defaults.baseURL = "http://" + ip + ":" + PORT.toString()
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