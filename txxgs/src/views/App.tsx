import React,{useState, useEffect} from 'react';
import './App.css';
import {TotalType, AreaType} from '../utils/types'
import {getDisease} from '../services/index'

// 引入模块
import Header from '../components/Header'
import Area from '../components/Area'
import Trace from '../components/Trace'
import Hospital from '../components/Hospital';
import Truth from '../components/Truth';
import Tip from '../components/Tip';
import News from '../components/News';
import Chart from '../components/Chart';


const App = () => {
  // 疫情概况
  let [total, setTotal] = useState<TotalType>();
  // 疫情区域分布
  let [areaTree, setAreaTree] = useState<AreaType []>([]);
  // 每日数据
  let [dayList, setDayList] = useState([]);
  // 每日新增数据
  let [dayAddList, setDayAddList] = useState([]);

  // 请求疫情数据
  useEffect(()=>{
    getDisease().then((res:any)=>{
      res = JSON.parse(res.data);
      console.log('res...', res);
      let {chinaTotal, chinaAdd, lastUpdateTime, areaTree, chinaDayList, chinaDayAddList} = res;
      // 赋值数据
      setTotal({chinaTotal, chinaAdd, lastUpdateTime});
      setAreaTree(areaTree);
      setDayList(chinaDayList)
      setDayAddList(chinaDayAddList);
    })
  }, []);

  return (
    <div className="App">
        <Header total={total as TotalType}/>
      {/* 图表显示疫情 */}
      <Chart chinaDayAddList={dayAddList} chinaDayList={dayList}/>
      {/* 疫情速报 */}
      <News areaTree={areaTree.length?areaTree[0].children as AreaType[]:[]}/>
      {/* 疫情概况 */}
    
      {/* 疫情区域分布 */}
      <Area areaTree={areaTree}/>
      {/* 疫情的最新进展 */}
      <Trace/>
      {/* 辟谣信息 */}
      <Truth/>
      {/* 医疗救治医院查询 */}
      <Hospital/>
      {/* 防护须知 */}
      <Tip/>
    </div>
  );
}

export default App;