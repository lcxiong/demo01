import axios from "../index";
import { serverMoudle } from '../fetch';

export const my = {
    Login(params: any) {
        return axios({
            url: '/WXServer/Login',
            method: 'post',
            data: serverMoudle(params) || {}
        });
    },
};

