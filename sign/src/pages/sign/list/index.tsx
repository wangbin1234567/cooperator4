import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form, Icon  } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import {getSignListAction} from '../../../actions/sign'
import All from "./all"
import Initiate from "./initiate"
import Punch from "./punch"
import Abandon from "./abandon"
type PageStateProps = {
  list: Array<{
    [key:string]: any
  }>
  titleList: Array<string>
  curIndex: number
  itemList: {
    [key:string]: any
  }
}
type PageDispatchProps = {
  getSignList: (params) => void
  setcurIndex: (params) => void
  setItem: (params) => void
  setList: (params) => void
  setSList: (params) => void
  setPList: (params) => void
  setAList: (params) => void
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

@connect(state=>{
  return {
    list: state.sign.list,
    titleList: state.sign.titleList,
    curIndex: state.sign.curIndex,
    itemList: state.sign.itemList
  }
}, dispatch=>{
  return {
    getSignList: (params)=>{
      dispatch(getSignListAction(params))
    },
    setcurIndex: (params)=>{
      dispatch({
        type: 'SIGN_INDEX',
        payload: params
      })
    },
    setItem: (params) =>{
      dispatch({
        type: 'SIGN_ITEM',
        payload: params
      })
    },
    setList: (params) =>{
      dispatch({
        type: 'SIGN_LIST',
        payload: params
      })
    },
    setSList: (params) =>{
      dispatch({
        type: 'SIGN_LISTS',
        payload: params
      })
    },
    setPList: (params) =>{
      dispatch({
        type: 'SIGN_LISTP',
        payload: params
      })
    },
    setAList: (params) =>{
      dispatch({
        type: 'SIGN_LISTA',
        payload: params
      })
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

  componentDidMount () {
    let params = {...this.state};
    if (params.status === 2){
      delete params.status;
    }
    this.props.getSignList(params);
  }

  componentDidHide () { }

  setIndex(index){
    this.props.setcurIndex(index)
    if(index===0){
      this.props.setList(this.props.list)
    }
    if(index===1){
      let arr=this.props.list.filter(item=>item.status===1)
      this.props.setSList(arr)
    }
    if(index===2){
      let arr=this.props.list.filter(item=>item.status===2)
      this.props.setPList(arr)
    }
   if(index===3){
     let arr=this.props.list.filter(item=>item.status===0)
     this.props.setAList(arr)
   }
  }
  handleItem(item){
     console.log(item)
       this.props.setItem(item) 
     wx.navigateTo({
      url: '/pages/sign/details/index'
    })
  }
  render () {
    console.log('this.props...111111111', this.props.list,this.props.titleList);
    return (
      <View className='wrap'>
         <View className="box">
          {
            this.props.titleList.map((item,index)=>{
                return <Text key={index} className={this.props.curIndex==index?'active':''}
                onClick={this.setIndex.bind(this, index)}
                >{item}</Text>
            })
          }
         </View>
          {
            this.props.curIndex===0?<All />:''
          }
          {
            this.props.curIndex===1?<Initiate />:''
          }
           {
            this.props.curIndex===2?<Punch />:''
          }
          {
            this.props.curIndex===3?<Abandon />:''
          }
      </View>
    )
  }
}

export default SignList as ComponentClass;