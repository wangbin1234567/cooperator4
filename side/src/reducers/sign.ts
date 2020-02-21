
const INITIAL_STATE = {
  address: {},
  flag: -1,   // -1表示未提交表单，0表示提交失败，1表示提交成功
}

export default function sign (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_ADDRESS':
      return {
        ...state,
        address: action.payload
      }
    case 'SUBMIT_SIGN':
      return {
        ...state,
        flag: action.payload
      }
     default:
       return state
  }
}
