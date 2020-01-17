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
            let ip = IP
            let port = PORT
            if (params.ip) {
                ip = params.ip
            }
            if (params.port) {
                port = params.port
            }
            axio.defaults.baseURL = "http://" + ip + ":" + port.toString()
        }

    }

    static reset(params) {
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

    static multhostle(requsetArray, callback) {
        axios.all(requsetArray).then(axios.spread(callback));
    };

}

module.exports = Axios;