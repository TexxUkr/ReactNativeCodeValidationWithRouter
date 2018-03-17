import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Button } from '../common/index'

const notReadyColor = '#dadad8'

const styles = {
  button: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const ConfirmButton = props => (
  <Button
    style={props.ready ? { ...styles.button } : { ...styles.button, backgroundColor: notReadyColor }}
    onPress={props.ready ? props.onPress : () => null}
  >
    {props.children}
  </Button>
)

ConfirmButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  ready: PropTypes.bool.isRequired,
  children: PropTypes.string,
}

ConfirmButton.defaultProps = {
  children: '',
}

export default ConfirmButton
