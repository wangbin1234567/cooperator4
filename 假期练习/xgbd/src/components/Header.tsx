import React, { useState, useEffect } from 'react'
import { TotalType } from '../utils/types'
import styles from './Header.module.scss'
const Header = (props: { total: TotalType }) => {
    console.log('total...', props.total)
    let t1 = props.total && props.total.lastUpdateTime
    let startDate: any = new Date(t1 && t1.replace(/-/g, "/"))
    let endDate: any = new Date()
    let dateDiff = endDate.getTime() - startDate.getTime() //获取时间差毫秒
    let hourLevel = dateDiff % (24 * 60 * 60 * 1000)
    let minutesLevel = hourLevel % (60 * 60 * 1000)
    let minutes = Math.floor(minutesLevel / (60 * 1000))
    return <>
        {
            props.total &&
            <div>
                <div className={styles.head}>
                    <div className={styles.jump}></div>
                    <div className={styles.jump_zhuizong}></div>
                    <div className={styles.bottom}>
                        <p className={styles.qs}>
                            数据来源：国家及各地卫健委每日信息发布
            </p>
                    </div>
                </div>
                <div className={styles.topdataWrap}>
                    <div className={styles.timeNum}>
                        <div className={styles.bottom}>
                            <p className={styles.d}>
                                统计截至&nbsp;
                            <span>{props.total.lastUpdateTime}</span>&nbsp;
                         <em>更新于</em>
                                <span>{minutes}分钟</span>前
                   </p>
                        </div>
                    </div>
                    <div className={styles.recentNumber}>
                        <div className={styles.icbar}>
                            <div className={styles.add}>
                                较上日
                            <span>+{props.total.chinaAdd.confirm}</span>
                            </div>
                            <div className={styles.number}>{props.total.chinaTotal.confirm}</div>
                            <div className={styles.text}>全国确诊</div>
                        </div>
                        <div className={styles.icbar}>
                            <div className={styles.add}>
                                较上日
                        <span>+{props.total.chinaAdd.suspect}</span>
                            </div>
                            <div className={styles.number}>{props.total.chinaTotal.suspect}</div>
                            <div className={styles.text}>疑似病例</div>
                        </div>
                        <div className={styles.icbar}>
                            <div className={styles.add}>
                                较上日
                     <span>+{props.total.chinaAdd.heal}</span>
                            </div>
                            <div className={styles.number}>{props.total.chinaTotal.heal}</div>
                            <div className={styles.text}>治愈人数</div>
                        </div>
                        <div className={styles.icbar}>
                            <div className={styles.add}>
                                较上日
                            <span>+{props.total.chinaAdd.dead}</span>
                            </div>
                            <div className={styles.number}>{props.total.chinaTotal.dead}</div>
                            <div className={styles.text}>死亡人数</div>
                        </div>
                    </div>

                </div>
                <div className={styles.qt_enter}>
                    <p><span className={styles.icon_plot}>小区查询</span></p>
                    <p><span className={styles.icon_train}>同乘查询</span></p>
                </div>
            </div>
        }
    </>
}


export default Header
