import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form, Icon  } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import {getSignListAction} from '../../../actions/sign'



type PageStateProps = {
  list: Array<{
    [key:string]: any
  }>
}
type PageDispatchProps = {
  getSignList: (params) => void
}
type PageOwnProps = {}

type PageState = {
  params:{
    status: number,
    page: number,
    pageSize: number,
  }
  currentIndex:number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SignList {
  props: IProps;
}

@connect(state=>{
  return {
    list: state.sign.list
  }
}, dispatch=>{
  return {
    getSignList: (params)=>{
      dispatch(getSignListAction(params))
    }
  }
})
class SignList extends Component<{}, PageState> {
  config: Config = {
    navigationBarTitleText: '面试列表'
  }

  state={
    params:{
      status: 2,
      page: 1,
      pageSize: 10,
    },
    tabList:[
      {
        id:0,
        text:'未打卡'
      },
      {
        id:1,
        text:'已打卡'
      },
      {
        id:2,
        text:'已放弃'
      },
      {
        id:3,
        text:'全部'
      }
    ],
    currentIndex:0
  }

  componentDidShow () {
    let params = {...this.state.params};
    if (params.status === 2){
      delete params.status;
    }
    this.props.getSignList(params);
  }

  componentDidHide () { }
  changColr = (index)=>{
    this.setState({
      currentIndex:index
    })
  }

  render () {
    let {list} = this.props;
    console.log(list,'list');
    
    let isBox1Show=this.state.currentIndex==0 ? 'block' : 'none';
    let isbox2Show=this.state.currentIndex==1 ? 'block' : 'none';
    let isbox3Show=this.state.currentIndex==2 ? 'block' : 'none';
    let isbox4Show=this.state.currentIndex==3 ? 'block' : 'none';

    return (
      <View className='wrap'>
          <View className="tab">
          {
            this.state.tabList.map((item,index)=>{
            let tabStyle=item.id==this.state.currentIndex ? 'active' : '';
            return <Text key={index} onClick={()=>this.changColr(index)} className={tabStyle}>{item.text}</Text>
            })
          }
          </View>
          <View className="hr"></View>
          <View className="newsList">
                    <View className={isBox1Show} >
                     未打卡
                    </View>  
                    <View className={isbox2Show}>
                    已打卡
                    </View>
                    <View className={isbox3Show}>
                      已放弃
                    </View>
                    <View className={isbox4Show}>
                      全部
                    </View>
          </View>
      </View>
    )
  }
}


export default SignList as ComponentClass;
