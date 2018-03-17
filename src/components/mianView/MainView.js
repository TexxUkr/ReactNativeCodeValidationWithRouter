import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { openVerifyDigitsSceneView } from '../../actions/main'


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
  },
}

const MainView = (props) => {
  console.info('main view is here ')
  return (
    <View style={styles.container}>
      <Text> Main View </Text>
      <Button
        title="Open Verify Digits"
        onPress={() => (props.openVerifyDigitsSceneView())}
      />
    </View>
  )
}

MainView.propTypes = {
  openVerifyDigitsSceneView: PropTypes.func.isRequired,
}


const mapDispatchToProps = dispatch => ({
  openVerifyDigitsSceneView: () => dispatch(openVerifyDigitsSceneView()),
})

export default connect(null, mapDispatchToProps)(MainView)
