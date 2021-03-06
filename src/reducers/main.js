import notesInitState from './mainInitState'

import {
  MAIN_VIEW_IS_OPENED,
  LOCATION_VIEW_IS_OPENED,
  VERIFY_DIGITS_VIEW_IS_OPENED,
  DIGIT_CHANGED,
  ADD_DIGIT_INPUT,
} from '../actions/types'

import { locationScene, mainScene, verifyDigitsScene } from '../sceneNames'


export default (state = { ...notesInitState }, action) => {
  switch (action.type) {
    case MAIN_VIEW_IS_OPENED:
      return ({ ...state, currentScene: mainScene })
    case ADD_DIGIT_INPUT: {
      const newInputs = { ...state.inputs }
      newInputs[action.payload.id] = action.payload.value
      return ({ ...state, currentScene: mainScene, inputs: newInputs })
    }
    case VERIFY_DIGITS_VIEW_IS_OPENED:
      return ({ ...notesInitState, currentScene: verifyDigitsScene })
    case LOCATION_VIEW_IS_OPENED:
      return ({ ...state, currentScene: locationScene })
    case DIGIT_CHANGED: {
      const newDigits = [...state.digits]
      let newFocus = [...state.focus]
      if (action.payload.value !== '') {
        newFocus[action.payload.id] = false
        newFocus[action.payload.id + 1] = true
      }
      
      if (action.payload.value === '') {
        newFocus = [...notesInitState.focus]
        newFocus[0] = false
        newFocus[action.payload.id] = true
      }

      newDigits[action.payload.id] = action.payload.value
      if (newDigits.includes('')) {
        return ({
          ...state, digits: newDigits, ready: false, focus: newFocus,
        })
      }
      return ({
        ...state, digits: newDigits, ready: true, focus: newFocus,
      })
    }
    default:
      return state
  }
}
