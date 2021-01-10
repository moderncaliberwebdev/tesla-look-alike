import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const activateSidebarReducer = (state = { open: false }, action) => {
  switch (action.type) {
    case 'ACTIVATE_SIDEBAR':
      return { open: action.payload }
    default:
      return state
  }
}

const reducer = combineReducers({
  activateSidebar: activateSidebarReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
