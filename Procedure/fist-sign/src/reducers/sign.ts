
const INITIAL_STATE = {
  address: {}
}

export default function sign (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_ADDRESS':
      return {
        ...state,
        address: action.payload
      }
     default:
       return state
  }
}
