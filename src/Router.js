import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Router, Scene, Lightbox } from 'react-native-router-flux'
import PropTypes from 'prop-types'

import {
  mainScene,
  locationScene,
  verifyDigitsScene,
} from './sceneNames'

import { verifyDigitsSceneViewOpened, mainSceneViewOpened, openMainSceneView } from './actions/index'

import ViewMainScene from './components/mianView/MainView'
import ViewLocationScene from './components/locationView/LocationView'
import ViewVerifyDigitsScene from './components/verifyDigitsView/VerifyDigitsView'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
})

const RouterComponent = props => (
  <View style={styles.main}>
    <Router style={{ flex: 1, backgroundColor: 'white' }} >
      <Lightbox>
        <Scene
          key="root"
        >
          <Scene
            title="MAIN"
            key={mainScene}
            component={ViewMainScene}
            onLeft={() => null}
            leftTitle=""
            type="reset"
            onEnter={() => {
              props.mainSceneViewOpened()
            }}
          />
          <Scene
            title="Verify your number"
            leftTitle=""
            key={verifyDigitsScene}
            component={ViewVerifyDigitsScene}
            onEnter={() => {
              props.verifyDigitsSceneViewOpened()
            }}
          />
        </Scene>
        <Scene
          title="Location"
          key={locationScene}
          component={() => (
            <ViewLocationScene
              onCancel={() => props.openMainSceneView()}
              onConfirm={() => props.openMainSceneView()}
            />)}
        />
      </Lightbox>
    </Router>
  </View>
)

RouterComponent.propTypes = {
  verifyDigitsSceneViewOpened: PropTypes.func.isRequired,
  mainSceneViewOpened: PropTypes.func.isRequired,
  openMainSceneView: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  verifyDigitsSceneViewOpened: () => dispatch(verifyDigitsSceneViewOpened()),
  mainSceneViewOpened: () => dispatch(mainSceneViewOpened()),
  openMainSceneView: () => dispatch(openMainSceneView()),
})

export default connect(null, mapDispatchToProps)(RouterComponent)

