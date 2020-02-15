import axios from 'axios';
// import jsonp from 'jsonp';
const wechatHost = '//wechat.txxg.jasonandjay.com'; // '/fact'
// 获取全国医院列表
export const getHospital = (provinceName: string)=>{
    return axios.post(`${wechatHost}/api/THPneumoniaService/getHospitalCityByProvince`,{
        service: 'THPneumoniaOuterService',
        args: {req:{province: provinceName}},
        func: 'getHospitalCityByProvince',
        context: {channel: 'AAEEviDRbllNrToqonqBmrER'}
    })
}
