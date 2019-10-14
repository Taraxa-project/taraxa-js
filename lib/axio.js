const axios = require('axios')

//全局设置
axios.defaults.baseURL = "http://35.224.183.106:7777"
axios.defaults.headers.post['Content-Type'] = 'application/json'

class Axios {
    static get(url, params) {
        return axios({
            method: "GET",
            url: url,
            params: params,
            crossDomain: true
        });
    };

    static post(url, params) {
        return axios({
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

module.exports = Axios;