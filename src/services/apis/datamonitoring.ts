import axios from '../index'
import {serverMoudle} from '../fetch'

export const datamonitoring = {
    getDatamonitoring(params:object){
        return axios({
            url: '/WXMonitor/GetList',
            method: 'post',
            data: serverMoudle(params) || {}
        })
    }
}