import {get } from "./axios";

// 获取文章详情
export function getArticleDetails(id) {
    return get(`/b/d/${id}`).then(res => res.data)
}