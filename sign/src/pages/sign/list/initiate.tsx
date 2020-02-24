import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form, Icon  } from '@tarojs/components'
import './initiate.scss'
import { connect } from '@tarojs/redux'

type PageStateProps = {
  lists: Array<{
    [key:string]: any
  }>
}
type PageDispatchProps = {
    setItem: (params) => void
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
    lists: state.sign.lists
  }
}, dispatch=>{
  return {
    setItem: (params) =>{
        dispatch({
          type: 'SIGN_ITEM',
          payload: params
        })
      }
  }
})
class SignList extends Component<{}, PageState> {
  config: Config = {
    navigationBarTitleText: '面试列表'
  }
  componentDidShow () { }
  componentDidHide () { }
  handleItem(item){
    console.log(item)
      this.props.setItem(item) 
    wx.navigateTo({
     url: '/pages/sign/details/index'
   })
 }
  render () {
    return (
        <View className="contain">
           {
             this.props.lists.map((item,index)=>{
                 return <View key={index} className="main" onClick={this.handleItem.bind(this, item)}>
                     <View className="title"><Text className="company">{item.company}</Text><Text className="start">{item.status?'未开始':'已放弃'}</Text></View>
                     {/* <View>{item.address.title?item.address.address:item.address}</View> */}
                     <View className="footer"><Text className="time">面试时间：{item.start_time}</Text><Text className="remind">未提醒</Text></View>
                 </View>
             })
           }
        </View>  
    )
  }
}


export default SignList as ComponentClass;