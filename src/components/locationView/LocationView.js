import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { Button } from '../common/index'

const IconOne = () => (<Icon name="cancel" color="red" size={30} />)
const IconTwo = () => (<Icon name="check-circle" color="green" size={30} />)


const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window')
const height = deviceHeight * 0.3
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
    flexDirection: 'column',
    width,
    height,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  buttonsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center',
  },
})

const LocationView = props => (
  <View style={styles.container}>
    <View style={styles.view}>
      <View style={styles.message}>
        <Text style={styles.text}>This application uses a loaction sharing</Text>
        <Text style={styles.text}>Please confirm location info sharing</Text>
      </View>
      <View style={styles.buttonsBar}>
        <Button style={{ backgroundColor: 'white' }} onPress={props.onConfirm} icon={IconOne} />
        <Button style={{ backgroundColor: 'white' }} onPress={props.onCancel} icon={IconTwo} />
      </View>
    </View>
  </View>
)

LocationView.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

export default LocationView
