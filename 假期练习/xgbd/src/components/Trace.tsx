import React, { useState, useEffect } from 'react'
import { getTrace } from '../services/index'
import './Trace.module.css'

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
            data.sort((a, b) => {
                if (a.time > b.time) {
                    return -1;
                } else {
                    return 1;
                }
            })
            setTrace(data);
        })
    }, []);
    let data = trace.slice(0, 10);
    return <div id="news">
        <div className="titleWarp newsTitleWarp">
            <div className="title sectionTitle flexjinzhan">最新进展<div className="hotzhuizhong">
                <div>
                    <span className="timelineMore"></span>
                </div>
            </div>
                <div className="timeLine"></div>
            </div>
        </div>
        <div className="timeLine"></div>
        {
            data.map((item,index) => {
                return <div className="singleNew" key={index}>
                        <div className="timeIcon"></div>
                        <div className="times">
                            <span className="pass">{item.time}</span>
                            <div className="newest"></div>
                        </div>
                        <div className="news-box">
                            <div className="title">{item.title}</div>
                            <div className="desc">{item.desc}</div>
                            <div className="source">来源：{item.source}</div>
                        </div>
                    </div>
            })
        }
    </div>
}


export default Trace
