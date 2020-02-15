import React, {useState, useEffect} from 'react'
import {getTruth} from '../services/index'
import styles from './Truth.module.scss'
import { Carousel, WingBlank } from 'antd-mobile';
import { TruthType1 } from '../utils/types';

const Truth = ()=>{
    // 定义全国医院数据
    let [truth, setTruth] = useState<TruthType1[]>([]);
    let [data,setData] = useState<any[]>([])
    let [imgHeight,setHeigth]=useState<any>(0)
    let [slideIndex,setIndex]=useState<any>(0)
    // 获取全国医院数据
    useEffect(()=>{
        getTruth().then((res:any)=>{
            console.log('res...', res);
            if(res.code == 0){
                setTruth(res.content);
            }
        })
    }, []);
      useEffect(()=>{
       setData(['1', '2', '3'])
       setHeigth(176) 
    }, []);
      useEffect(()=>{
        setTimeout(() => {
            setData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
          }, 100);
    }, []);
    return <>
    <div className={styles.rumor}>
         <div className={styles.sectionTitle}>
        辟谣信息
                <div className={styles.rumor_more}></div>
         </div>
         <div className={styles.ru_box}>
         <WingBlank>
        <Carousel className={styles.space_carousel}
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.83}
          autoplay
          infinite
          beforeChange={(from: number, to: number) => console.log(`slide from ${from} to ${to}`)}
          afterChange={(index: number) => setIndex(index)}
        >
          {/* {data.map((val: string | number | undefined, index: any) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: slideIndex === index ? -10 : 0,
                height: imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  setHeigth('auto');
                }}
              />
            </a>
          ))} */}
          {
              truth.map((val,index)=>{
                  return <div className={styles.rumor_card} key={index}>
                       <div className={styles.rumor_icon}></div>
                       <div className={styles.rumor_title}>
                           {val.title}
                       </div>
                       <div className={styles.rumor_content}>
                          {val.abstract}
                       </div>
                       <p className={styles.more}>查看详情</p>
                       <div className={styles.rumor_fake_img}></div>
                  </div>  
              })
          }
        </Carousel>
      </WingBlank>
         </div>
    </div>
    </>
}


export default Truth