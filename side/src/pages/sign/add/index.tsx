import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form  } from '@tarojs/components'
import './index.scss'

class AddSign extends Component {
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

  }

  componentDidHide () { }

  formSubmit(e){
    console.log('e...', this.state);

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
            <Text onClick={this.goLocation}></Text>
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
