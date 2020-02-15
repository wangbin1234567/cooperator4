import React, {useState, useEffect} from 'react'
import {getTruth} from '../services/index'

interface ProType {
    provinceName: string
    citys: any[],
    cityCnt: number
}

const Truth = ()=>{
    // 定义全国医院数据
    let [truth, setTruth] = useState([]);

    // 获取全国医院数据
    useEffect(()=>{
        getTruth().then((res:any)=>{
            console.log('res...', res);
            // res = res.data;
            // if(res.code == 0){
            //     setProvinces(res.args.rsp.provinces);
            // }
        })
    }, []);
    
    return <>
        <h3>辟谣信息</h3>
    </>
}


export default Truth
