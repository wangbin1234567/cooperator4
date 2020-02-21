import {addSign, getSignList} from '../services/index'

// 选择面试地址
export const changeAddress = (address) => {
  return {
    type: 'CHANGE_ADDRESS',
    payload: address
  }
}

// 提交面试表单
export const submitSign = (payload) => {
  return dispatch=>{
    addSign(payload).then(res=>{
      dispatch({
        type: 'SUBMIT_SIGN',
        payload: res.code===0?1:0
      })
    })
  }
}

// 获取面试列表
export const getSignListAction = (payload) => {
  return dispatch=>{
    getSignList(payload).then(res=>{
      dispatch({
        type: 'SIGN_LIST',
        payload: res.data
      })
    })
  }
}
