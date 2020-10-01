import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import UseStateExample from './hooks/UseStateExample'

// import UseEffectExample from './hooks/UseEffectExample'
// import UseEffectUseObjExample from './hooks/UseEffectUseObjExample'
// import UseEffectUnmountExample from './hooks/UseEffectUnmountExample'
// import UseEffectWithChildExample from './hooks/UseEffectWithChildExample'
// import UseEffectWithFuncExample from './hooks/UseEffectWithFuncExample'
//
// import UseRefExample from './hooks/UseRefExample'
import UseRefWithVisibleExample from './hooks/UseRefWithVisibleExample'
// import UseRefStoreFuncExample from './hooks/UseRefStoreFuncExample'

// import UseLayoutEffectExample from './hooks/UseLayoutEffectExample'

// import UseCallbackExample from './hooks/UseCallbackExample'

// import UseReducerExample from './hooks/UseReducerExample'
//
// import UseContextExample from './hooks/UseContextExample'
//
// import UseContextAndReducerExample from './hooks/UseContextAndReducerExample'

// import CombineStoreReducerExample from './hooks/CombineStoreReducerExample'

// import UseMemoExample from './hooks/UseMemoExample'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<UseRefWithVisibleExample />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
