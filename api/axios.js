import axios from 'axios'

axios.defaults.baseURL = '/api/'

// 公共请求参数
const commonParam = {

}

// get方法
export function get(url, data = {}) {
    let params = Object.assign(data, commonParam);
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
    })
}