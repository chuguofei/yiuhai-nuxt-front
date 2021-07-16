import axios from 'axios'

// axios.defaults.baseURL = process.env.baseUrl;
axios.defaults.baseURL = "/api/";

// 公共请求参数
const commonParam = {

}


// 拦截请求
axios.interceptors.request.use(
    req => {
        return req
    },
    err => {
        console.log("错误了")
        return err
    }
)

// 拦截响应
axios.interceptors.response.use(
    res => {
        return res.data;
    },
    err => {
        console.log("错误了")
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