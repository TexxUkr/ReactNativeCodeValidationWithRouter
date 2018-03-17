import React from 'react'
import { Icon } from 'react-native-elements'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  button: {
    backgroundColor: '#ace8ff',
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const Button = props => (
  <View>
    <TouchableOpacity
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
    >
      {props.icon ? props.icon() : null}
      <Text >
        {props.children}
      </Text>
    </TouchableOpacity>
  </View>
)

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string,
}

Button.defaultProps = {
  children: '',
}

export { Button }
