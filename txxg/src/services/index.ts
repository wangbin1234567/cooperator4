import axios from 'axios';
import jsonp from 'jsonp';
import {TruthType} from '../utils/types'


const factHost = '//fact.txxg.jasonandjay.com'; // '/fact'
const apiHost = '//api.txxg.jasonandjay.com'; // '/api'
const wechatHost = '//wechat.txxg.jasonandjay.com'; // '/fact'
const inewsHost = '//view.inews.qq.com'; // '/fact'

// 获取全国省份列表
export const getHospitalProvince = ()=>{
    return axios.post(`${wechatHost}/api/THPneumoniaService/getHospitalProvince`,{
        service: 'THPneumoniaOuterService',
        args: {req:{}},
        func: 'getHospitalProvince',
        context: {channel: 'AAEEviDRbllNrToqonqBmrER'}
    })
}

// 最新疫情数据
export const getDisease = ()=>{
    return new Promise((resolve, reject)=>{
        jsonp(`${inewsHost}/g2/getOnsInfo?name=disease_h5`, {}, (err, data)=>{
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

//预防指南
// export const getGuide = ()=>{
//     return new Promise((resolve, reject)=>{
//         jsonp(`/baike/api/jsonp/GetDocsByTag?appid=2000000000000050&adtag=txxw&name=94699&offset=0&count=5`, {}, (err, data)=>{
//             if (err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// 获取分页辟谣信息列表
export const getTruth = (params: TruthType = {page:0})=>{
    return new Promise((resolve, reject)=>{
        jsonp(`${factHost}/loadmore?page=${params.page}`, {}, (err, data)=>{
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
