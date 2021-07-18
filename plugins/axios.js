import { message as Message } from 'ant-design-vue';


export default function({ store, redirect, req, router, app: { $axios } }) {
    $axios.onRequest(config => {
        return config;
    });

    $axios.interceptors.response.use(
        response => {
            return response.data;
        },
        error => {
            if (process.client) {
                Message.error("出错啦");
            }
        }
    )
}