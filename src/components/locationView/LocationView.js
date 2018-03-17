import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native'

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window')
const height = deviceHeight * 0.5
const width = deviceWidth * 0.9

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})

const LocationView = props => (
  <View style={styles.container}>
    <View style={styles.view}>
      <Text>Location sharing</Text>
      <Text>Info on location sharing</Text>
      <Button title="Got it" onPress={props.onConfirm} />
      <Button title="Cancel" onPress={props.onCancel} />
    </View>
  </View>
)

LocationView.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

export default LocationView
