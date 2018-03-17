import React from 'react'
// import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
// import PropTypes from 'prop-types'

import {
  mainScene,
  locationScene,
  verifyDigitsScene,
} from './sceneNames'

import ViewMainScene from './components/mianView/MainView'
import ViewLocationScene from './components/locationView/LocationView'
import ViewVerifyDigitsScene from './components/verifyDigitsView/VerifyDigitsView'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
})

const RouterComponent = () => (
  <View style={styles.main}>
    <Router style={{ flex: 1, backgroundColor: 'white' }} >
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
        />
        <Scene
          title="Verify your number"
          leftTitle=""
          key={verifyDigitsScene}
          component={ViewVerifyDigitsScene}
        />
        <Scene
          title="Location"
          key={locationScene}
          component={ViewLocationScene}
        />
      </Scene>
    </Router>
  </View>
)

/*
RouterComponent.propTypes = {
  noteChanged: PropTypes.func.isRequired,
  notesListFlagEditToggle: PropTypes.func.isRequired,
  notesListFlagEditSet: PropTypes.func.isRequired,
  currentSceneNameSet: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  noteChanged: note => dispatch(noteChanged(note)),
  notesListFlagEditToggle: () => dispatch(notesListFlagEditToggle()),
  notesListFlagEditSet: bool => dispatch(notesListFlagEditSet(bool)),
  currentSceneNameSet: name => dispatch(currentSceneNameSet(name)),
})

export default connect(null, mapDispatchToProps)(RouterComponent)
*/

export default RouterComponent
