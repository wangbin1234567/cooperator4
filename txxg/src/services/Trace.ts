import axios from 'axios';
import jsonp from 'jsonp';
const inewsHost = 'https://view.inews.qq.com'; // '/fact'
// 获取疫情最新进展
export const getTrace = ()=>{
    return new Promise((resolve, reject)=>{
        jsonp(`${inewsHost}/g2/getOnsInfo?name=wuwei_ww_time_line`, {}, (err, data)=>{
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}