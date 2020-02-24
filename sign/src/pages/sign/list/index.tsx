import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form, Icon  } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import {getSignListAction} from '../../../actions/sign'
import { ITouchEvent } from '@tarojs/components/types/common'



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
  status: number,
  page: number,
  pageSize: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SignList {
  props: IProps;
}

const headers = ['未开始','已开始','已放弃','全部']

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
    status: 2,
    page: 1,
    pageSize: 10
  }

  componentDidShow () {
    let {page, status, pageSize} = this.state;
    let params = {page, status, pageSize};
    if (params.status === 2){
      delete params.status;
    }
    this.props.getSignList(params);
  }

  componentDidHide () { }

  changeStatus = (e:ITouchEvent)=>{
    this.setState({
      status: e.target.dataset.status
    })
  }

  goDetail = (e: ITouchEvent)=>{
    wx.navigateTo({url:'/pages/sign/detail/index?id='+e.currentTarget.dataset.id});
  }

  render () {
    console.log('list...', this.props.list);
    return (
      <View className='wrap'>
        <View className='header'>{
          headers.map((item, index)=>{
            return <Text key={index} data-status={index-1} className={index-1 == this.state.status?'active':''} onClick={this.changeStatus}>{item}</Text>
          })
        }</View>
        <View className="list">{
          this.props.list.map((item)=>{
            return <View onClick={this.goDetail} data-id={item.id}>
              <Text>{item.company}</Text>
              <Text>{JSON.parse(item.address).address}</Text>
              <Text>{new Date(item.start_time).toString()}</Text>
            </View>
          })
        }</View>
      </View>
    )
  }
}


export default SignList as ComponentClass;
