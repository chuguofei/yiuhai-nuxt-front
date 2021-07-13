import axios from 'axios'

axios.defaults.baseURL = process.env.baseUrl;

// 公共请求参数
const commonParam = {

}


// 拦截请求
axios.interceptors.request.use(
    req => {
        console.log(req)
        return req
    },
    err => {
        return err
    }
)

// 拦截响应
axios.interceptors.response.use(
    res => {
        return res
    },
    err => {
        return err
    }
)


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