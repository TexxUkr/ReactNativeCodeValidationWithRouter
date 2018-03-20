import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import { Button } from '../common/index'

const locationIcon = require('../assets/circle-location.png');

const IconOne = () => (<Icon name="cancel" color="red" size={30} />)
const IconTwo = () => (<Icon name="check-circle" color="green" size={30} />)


const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window')
const height = deviceHeight * 0.5
const width = deviceWidth * 0.9

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000099',
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
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
})

const LocationView = props => (
  <View style={styles.container}>
    <View style={styles.view}>
      <Image
        style={{
          width: 70, height: 70, position: 'relative', top: -60, alignSelf: 'center',
        }}
        source={locationIcon}
      />
      <View style={styles.message}>
        <Text style={styles.title}>Location sharing</Text>
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
