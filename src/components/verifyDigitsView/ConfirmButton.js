import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const readyColor = '#ffff29'
const notReadyColor = '#dadad8'

const styles = {
  button: {
    backgroundColor: '#dadad8',
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const ConfirmButton = props => (
  <View>
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: props.ready ? readyColor : notReadyColor }}
      onPress={props.ready ? props.onPress : () => null}
    >
      <Text >
        {props.children}
      </Text>
    </TouchableOpacity>
  </View>
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
