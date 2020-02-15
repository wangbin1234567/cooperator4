import React, {useState, useEffect} from 'react'
// import {getGuide} from '../services/index'
import styles from './Handbook.module.scss'
interface DocsType {
    title: string
    abs: string
    h5url: string
    image: string
    author_info: {
        name: string
        icon: string
        title: string
        department: string
        hospital: string
    }
}

const Handbook = ()=>{
    // 定义全国医院数据
    // let [docs, setDocs] = useState<DocsType[]>([]);
    // 获取全国医院数据
    useEffect(()=>{
        // getGuide().then((res:any)=>{
        //     console.log(res,11111111111111111111111111)
        // res = res.data;
        // if(res.code == 0){
        //     setDocs(res.docs);
        // }
        // })
    }, []);
    
    return <>
    <div className={styles.yidian}>
        <div className={styles.sectionTitle}>预防手册
          <div className={styles.yidianIcon}></div>
        </div>
        <div className={styles.yidian_flex_title}>
            <div className={styles.tab_button}>预防指南</div>
            <div className={styles.tab_button}>检查诊断</div>
        </div>
        <div>
            <ul className={styles.yidian_ul}>
                <li className={styles.yidian_li}>水果摊老板确诊了，我之前买了他的水果，会有问题吗？</li>
            </ul>
        </div>
    </div>
    </>
}


export default Handbook