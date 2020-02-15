import React, { useState, useEffect } from 'react'
import { getTrace } from '../services/index'
import styles from './Trace.module.scss'

interface TraceType {
    time: string,
    create_time: string,
    source: string,
    desc: string,
    title: string
}

const Trace = () => {
    // 定义最新进展
    let [trace, setTrace] = useState<TraceType[]>([]);

    // 获取最新进展数据
    useEffect(() => {
        getTrace().then((res: any) => {
            let data = JSON.parse(res.data) as TraceType[];
            console.log('获取最新进展数据mmmmm', data)
            data.sort((a, b) => {
                if (a.time > b.time) {
                    return -1;
                } else {
                    return 1;
                }
            })
            setTrace(data.splice(0, 6));//只显示一部分数据
        })
    }, []);

    // console.log('获取最新进展数据trace...', trace);
    return <div className={styles.box}>
        <div className={styles.boxtitle}>
            <div className={styles.h3}>
                最新进展
            <div className={styles.titleqq}>
                    <span className={styles.hotzhuizhong}></span>
                    <span className={styles.timelineMore}></span>
                </div>
            </div>
        </div>
        <div className={styles.detailbox}>
        <div className={styles.timesline}></div>
        {
            trace.map((item, index) => {
                return <div className={styles.detailconcent} key={index}>
                    <div className={styles.timeIcon}></div>
                    <div className={styles.detailNew}>
                        <p className={styles.detailtime}>{item.time}</p>
                    </div>
                    <div className={styles.fontsize}>
                        <h4 className={styles.detailtitle}>{item.title}</h4>
                        <p className={styles.detaildesc}>{item.desc}</p>
                        <h4 className={styles.detailsource}>来源：{item.source}</h4>
                    </div>
                </div>
            })
        }</div>
    </div>
}


export default Trace
