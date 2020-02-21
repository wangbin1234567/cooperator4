import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form  } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import {submitSign} from '../../../actions/sign'


type PageStateProps = {
  address: {
    [key:string]: any
  },
  flag: number
}

type PageDispatchProps = {
  submit: (payload:{})=>void,
  resetSubmit: ()=>void
}

type PageOwnProps = {}

type PageState = {}

type Addrops = PageStateProps & PageDispatchProps & PageOwnProps

interface AddSign {
  props: Addrops;
}
const mapStateToProps = state=>{
  return {
    address: state.sign.address,
    flag: state.sign.flag
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    submit: payload=>{
      dispatch(submitSign(payload))
    },
    resetSubmit: ()=>{
      dispatch({
        type: 'SUBMIT_SIGN',
        payload: -1
      })
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps)=>{
  return Object.assign({}, ownProps, stateProps, dispatchProps)
}

const options = {
  pure: true  // 默认为true，会对组件执行shouldComonentUpdate的对比
}

@connect(mapStateToProps, mapDispatchToProps)
class AddSign extends Component<PageState> {
  config: Config = {
    navigationBarTitleText: '添加面试'
  }

  state={
    company: '',
    phone: '',
    time: '',
    address: '',
    info: ''
  }

  componentDidShow () {
    console.log('this.props...', this.props.address);
  }

  componentDidHide () { }

  formSubmit(e){
    console.log('e...', this.state);
    this.props.submit({
      company: this.state.company,
      phone: this.state.phone,
      form_id: '',
      address: this.props.address.addr,
      latitude: this.props.address.latitude,
      longitude: this.props.address.longitude,
      start_time: +new Date(),
      description: this.state.info
    })
  }

  formReset(){
    this.setState({
      company: '',
      phone: '',
      address: '',
      time: '',
      info: ''
    })
  }

  goLocation(){
    wx.navigateTo({
      url: '/pages/sign/location/index'
    })
  }

  render () {
    if (this.props.flag === 0){
      wx.showToast({
        title: '添加面试失败',
        icon: 'none'
      })
      this.props.resetSubmit();
    }else if(this.props.flag === 1){
      wx.showToast({
        title: '添加面试成功',
        icon: 'none'
      })
      this.props.resetSubmit();
    }


    console.log('this.props...', this.props.address, this.props.address.addr);
    let {addr} = this.props.address;
    return (
      <View className='wrap'>
         <Form onSubmit={this.formSubmit.bind(this)} onReset={this.formReset.bind(this)}>
          <View>
            <Text>公司名称</Text>
            <Input placeholder="公司名称" value={this.state.company} onInput={e=>this.setState({company:e.detail.value})}></Input>
          </View>
          <View>
            <Text>公司电话</Text>
            <Input placeholder="公司电话" value={this.state.phone} onInput={e=>this.setState({phone:e.detail.value})}></Input>
          </View>
          <View>
            <Text>面试时间</Text>
            <Input placeholder="面试时间" value={this.state.time} onInput={e=>this.setState({time:e.detail.value})}></Input>
          </View>
          <View>
            <Text>面试地址</Text>
            <Text onClick={this.goLocation}>{addr}</Text>
          </View>
          <View>
            <Text>备注</Text>
            <Input placeholder="备注" value={this.state.info} onInput={e=>this.setState({info:e.detail.value})}></Input>
          </View>
          <Button form-type="submit">确认</Button>
          <Button form-type="reset">重置</Button>
         </Form>
      </View>
    )
  }
}


export default AddSign as ComponentClass;
