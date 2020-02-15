import React, {useState, useEffect} from 'react'
import {getHospitalProvince} from '../services/index'
import {getHospital} from '../services/Hospital'
import styles from './Hospital.module.scss'
interface ProType {
    provinceName: string
    citys: any[],
    cityCnt: number,
    active?: boolean,
}
interface cityType {
    cityCode: string,
    cityName: string,
    count: number,
}
const Hospital = ()=>{
    // 定义全国医院数据
    let [provinces, setProvinces] = useState<ProType[]>([]);
    let [data,setdata] = useState<cityType[]>([])
    let [curIndex,setIndex]=useState<number>(0)
    // 获取全国医院数据
    useEffect(()=>{
        getHospitalProvince().then((res:any)=>{
        res = res.data;
        if(res.code == 0){
            setProvinces(res.args.rsp.provinces);
            console.log(res.args.rsp.provinces)
       }
     })
    }, []);
    useEffect(()=>{
        getHospital('北京').then((res:any)=>{
           res = res.data;
           if(res.code == 0){
               setdata(res.args.rsp.info.citys)
            //    let data = res.args.rsp.info
            //    console.log(res.args.rsp.info)
               console.log(res,'212')
          }
        })
       },[])
  
    const expandProvince = (index: number,provinceName: string)=>{
        console.log(index,provinceName)
        let newProvinces = [...provinces];
        newProvinces[index].active = !provinces[index].active;
        setProvinces(newProvinces) 
        getHospital(provinceName).then((res:any)=>{
            res = res.data;
            if(res.code == 0){
                // let newData=[...data]
                // res.args.rsp.info.citys.map((item: cityType)=> {
                //     newData.push(item)
                // });
                // setdata([...new Set(newData)])
                setdata(res.args.rsp.info.citys)
           }
        })
        setIndex(index)
    }

    return <>
    <div className={styles.prevent}>
        <div className={styles.sectionTitle}>医疗救治医院查询
          <div className={styles.healthIcon}></div>
        </div> 
        <div className={styles.hospital}>{
            provinces.map((item, index)=>{
                return <div className={styles.hotelItemWrap} key={index} >
                <div className={styles.hotelProvince} onClick={()=>expandProvince(index,item.provinceName)}>
                    <div className={styles.name}>{item.provinceName}</div>
                    <div className={item.active?styles.activeCount:styles.count}></div>
                </div>
                <div className={item.active?styles.activeIndex:styles.index}>
                {
                               data.map((item,index)=>{
                                   return(
                                       <div key={index} className={styles.hotelCity}>
                                         <div className={styles.names}>
                                            {item.cityName} 
                                         </div> 
                                         <div className={styles.counts}> 
                                                {item.count}家
                                            <span>
                                               进入查询
                                            </span>
                                         </div>
                                       </div>
                                   )
                               })
                }
                </div>
             </div>
            })
        }</div>
    </div>
    </>
}


export default Hospital
