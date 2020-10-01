import { combineCountReducer, combineCountInitValues} from '../reducers/CombineCountReducer'
import { combineNameReducer, combineNameInitValues } from './CombineNameReducer'

// https://codesandbox.io/s/replacing-redux-with-react-hooks-store-context-forked-mjnsn?file=/src/combineReducers.js

const combineReducers = (reducers: any) => (state: any, action: any) => {
  const result: any = {}
  const stateArr = Object.keys(state)
  Object.keys(reducers).forEach((item, index) => {
    result[stateArr[index]] = reducers[item](state[stateArr[index]], action)
  })
  return result
}
const mainReducer = combineReducers({
  combineCountReducer,
  combineNameReducer,
})

const initValues = {
  combineCountInitValues,
  combineNameInitValues,
}
export { mainReducer, initValues }
