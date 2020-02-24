import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form, Icon  } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'

type PageStateProps = {
  itemList: {
    [key:string]: any
  }
  list: Array<{
    [key:string]: any
  }>
}
type PageDispatchProps = {
  setStatus: (params) => void
  setList: (params) => void
}
type PageOwnProps = {}

type PageState = {
  
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SignList {
  props: IProps;
}

@connect(state=>{
  return {
    itemList: state.sign.itemList,
    list: state.sign.list
  }
}, dispatch=>{
  return {
    setStatus: (params)=>{
      dispatch({
        type: 'SIGN_ITEM',
        payload: params
      })
    },
    setList: (params)=>{
      dispatch({
        type: 'SIGN_LIST',
        payload: params
      })
    }
  }
})
class SignList extends Component<{}, PageState> {
  config: Config = {
    navigationBarTitleText: this.state.info
  }

  state={
    info: ''
  }

  componentDidShow () {
    this.setState({
       info: this.props.itemList.company
    })
  }

  componentDidHide () { }

  handleStatus(){
     let str={...this.props.itemList}
     str.status=0
     this.props.setStatus(str)
     this.props.list.map(item=>{
       if(item.id==this.props.itemList.id){
         item.status=0
       }
      }
      )
     this.props.setList(this.props.list)
  }
  
  render () {
    console.log('this.props...111111111', this.props.itemList);
    return (
      <View className='wrap'>
        <View className="top">
        <View>面试地址：</View>
        <View>面试时间：{this.props.itemList.start_time}</View>
        <View>联系方式：{this.props.itemList.phone}</View>
        <View>是否提醒：未提醒</View>
        <View>面试状态：{this.props.itemList.status?'未开始':'已放弃'}</View>
        <View className={this.props.itemList.status?'active':'disActive'}>取消提醒：</View>
        </View>
        <View className="operate"><Text className={this.props.itemList.status?'active':'disActive'}>去打卡</Text><Text onClick={this.handleStatus.bind(this)} className={this.props.itemList.status?'active':'disActive'}>放弃面试</Text></View>
      </View>
    )
  }
}


export default SignList as ComponentClass;