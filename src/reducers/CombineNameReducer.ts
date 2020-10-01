const combineNameInitValues = {
  name: 'sxt',
}
const combineNameReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add-name':
      return { ...state, name: state.name + 'add'}
    case 'cut-name':
      return { ...state, name: state.name + 'cut' }
    case 'reset-name':
      return { ...state, name: 'sxt' }
    default:
      return state
  }
}

export {combineNameInitValues, combineNameReducer}
