const INITIAL_STATE = {
  address: {},
  list: [],
  flag: -1,   // -1表示未提交表单，0表示提交失败，1表示提交成功
  titleList: ['全部','未开始','已打卡','已放弃'],
  curIndex: 0,
  itemList: {},
  lists: [],
  listp: [],
  lista: []
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
      case 'SIGN_LIST':
        return {
          ...state,
          list: action.payload
        }
        case 'SIGN_INDEX':
        return {
          ...state,
          curIndex: action.payload
        }
        case 'SIGN_ITEM':
          return {
            ...state,
            itemList: action.payload
          }
          case 'SIGN_LISTS':
            return {
              ...state,
              lists: action.payload
            }  
            case 'SIGN_LISTP':
              return {
                ...state,
                listp: action.payload
              }  
              case 'SIGN_LISTA':
              return {
                ...state,
                lista: action.payload
              }  
     default:
       return state
  }
}