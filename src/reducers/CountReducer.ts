const countInitValues = {
  count: 0,
}
const countReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload.incrementNum }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'reset':
      return { ...state, count: 0 }
    default:
      return state
  }
}

export { countInitValues, countReducer }
