import { get } from "./axios";


// 侧边栏数据
export function getHomeInfoWrapperApi() {
    return get(`/b/homeInfo`).then(res => res.data)
}

// 获取首页文章列表
export function getArticleList() {
    return get(`/b/h/1`).then(res => res.data)
}

// 获取文章详情
export function getArticleDetails(id) {
    return get(`/b/d/${id}`).then(res => res.data)
}