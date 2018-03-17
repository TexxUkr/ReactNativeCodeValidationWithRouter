import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ConfirmButton from './ConfirmButton'
import { digitChanged } from '../../actions/main'
import DigitInput from './DigitInput'

const phone = '+14158185122'
// const message = 'We sent 6 digit code to' + '\n' + phone + '\n' + 'Please enter this code below'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxHeight: 300,
    flex: 1,
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  digits: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  digit: {
    fontSize: 20,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    minWidth: 15,
    textAlign: 'center',
  },
  bottomMessage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
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

const VerifyDigitsView = (props) => {
  console.info('verify digits here ')
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text> We sent 6 digit code to </Text>
        <Text> {phone} </Text>
        <Text> Please enter this code below. </Text>
      </View>
      <View style={styles.digits}>
        {props.digits.map((value, index) => (
          <DigitInput
            key={`digit#${index}`}
            index={index}
            value={props.digits[index]}
            focus={props.focus[index]}
            digitChanged={props.digitChanged}
          />))}
      </View>
      <View style={styles.bottomMessage}>
        <Text> Haven&apos;t received code yet? </Text>
        <Text> Resend Code </Text>
      </View>
      <View>
        <ConfirmButton
          onPress={() => null}
          ready={props.ready}
        >
          Confirm
        </ConfirmButton>
      </View>
    </View>
  )
}

VerifyDigitsView.propTypes = {
  digits: PropTypes.arrayOf(PropTypes.string).isRequired,
  focus: PropTypes.arrayOf(PropTypes.bool).isRequired,
  ready: PropTypes.bool.isRequired,
  digitChanged: PropTypes.func.isRequired,
}


const mapDispatchToProps = dispatch => ({
  digitChanged: (id, value) => dispatch(digitChanged(id, value)),
})

const mapStateToProps = state => ({
  digits: state.main.digits,
  ready: state.main.ready,
  focus: state.main.focus,
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyDigitsView)

