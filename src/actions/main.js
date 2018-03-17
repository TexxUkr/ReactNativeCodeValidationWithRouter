import { Actions } from 'react-native-router-flux'
import { mainScene, locationScene, verifyDigitsScene } from '../sceneNames'
import {
  OPEN_VIEW_LOCATION,
  OPEN_VIEW_VERIFY_DIGITS,
  OPEN_VIEW_MAIN,
  VERIFY_DIGITS_VIEW_IS_OPENED,
  MAIN_VIEW_IS_OPENED,
  LOCATION_VIEW_IS_OPENED,
  DIGIT_CHANGED,
  ADD_DIGIT_INPUT,
} from './types'


const digitChanged = (id, value) => ({
  type: DIGIT_CHANGED,
  payload: { id, value },
})

const openMainSceneView = () => {
  Actions[mainScene]()
  return {
    type: OPEN_VIEW_MAIN,
    payload: {},
  }
}

const openLocationSceneView = () => {
  Actions[locationScene]()
  return {
    type: OPEN_VIEW_LOCATION,
    payload: {},
  }
}

const openVerifyDigitsSceneView = () => {
  console.info('openVerifyNumbersSceneView is here')
  Actions[verifyDigitsScene]()
  return {
    type: OPEN_VIEW_VERIFY_DIGITS,
    payload: {},
  }
}

const mainSceneViewOpened = () => ({
  type: MAIN_VIEW_IS_OPENED,
  payload: mainScene,
})

const locationSceneViewOpened = () => ({
  type: LOCATION_VIEW_IS_OPENED,
  payload: locationScene,
})

const verifyDigitsSceneViewOpened = () => ({
  type: VERIFY_DIGITS_VIEW_IS_OPENED,
  payload: verifyDigitsScene,
})

const addDigitInput = (index, component) => {
  console.info('add digits is here')
  return ({
    type: ADD_DIGIT_INPUT,
    payload: {
      id: index,
      value: component,
    },
  })
}


export {
  openLocationSceneView,
  openMainSceneView,
  openVerifyDigitsSceneView,
  verifyDigitsSceneViewOpened,
  locationSceneViewOpened,
  mainSceneViewOpened,
  digitChanged,
  addDigitInput,
}
