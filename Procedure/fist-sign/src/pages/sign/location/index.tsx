import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form, Icon  } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import QQMapWX from '../../../utils/map'
import {changeAddress} from '../../../actions/sign'

const key = 'ZVUBZ-J46CU-7IPVI-2N6M4-2EIRV-V7FCM';
var qqmapsdk = new QQMapWX({
  key
});

interface TipType{
  title: string
  id: string
  addr: string
  city: string
  district: string
  latitude: number,
  longitude: number
}

type PageStateProps = {
  address: string
}
type PageDispatchProps = {
  updateAddress: (address:{}) => void
}

type PageOwnProps = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface LocationSign {
  props: IProps;
}

@connect(state=>{
  return {
    address: state.sign.address
  }
}, dispatch=>{
  return {
    updateAddress: (address)=>{
      dispatch(changeAddress(address))
    }
  }
})
class LocationSign extends Component<{}, {keyword: string, list: TipType[]}> {
  config: Config = {
    navigationBarTitleText: '面试地址'
  }

  state={
    keyword: '',
    list: []
  }

  componentDidShow () {

  }

  componentDidHide () { }

  changeKeyWord(e){
    this.setState({
      keyword: e.detail.value
    }, ()=>{
      qqmapsdk.getSuggestion({
        //获取输入框值并设置keyword参数
        keyword: e.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
        //region:'北京', //设置城市名，限制关键词所示的地域范围，非必填参数
        success: (res)=>{//搜索成功后的回调
          console.log(res);
          var sug: TipType[] = [];
          for (var i = 0; i < res.data.length; i++) {
            // console.log('sug...', sug);
            sug.push({ // 获取返回结果，放到sug数组中
              title: res.data[i].title,
              id: res.data[i].id,
              addr: res.data[i].address,
              city: res.data[i].city,
              district: res.data[i].district,
              latitude: res.data[i].location.lat,
              longitude: res.data[i].location.lng
            });
          }
          this.setState({
            list: sug
          })
        }
      })
    })
  }

  selectAddress(item){
    this.props.updateAddress(item);
    wx.navigateBack();
  }

  render () {
    return (
      <View className='wrap'>
        <Form>
          <Text>北京</Text>
          <Input value={this.state.keyword} onInput={(e)=>this.changeKeyWord(e)}/>
        </Form>{
          this.state.list.map((item:any, index)=>{
            return <View key={index} onClick={this.selectAddress.bind(this, item)}>
              <Icon type='info'></Icon>
              <View>
                <Text>{item.title}</Text>
                <Text>{item.address}</Text>
              </View>
            </View>
          })
        }
      </View>
    )
  }
}


export default LocationSign as ComponentClass;
