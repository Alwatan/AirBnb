import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import propTypes from "prop-types";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput:
        this.props.inputType === "text" || this.props.inputType === "email"
          ? false
          : true
    };
  }
  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
      onChangeText
    } = this.props;
    const fontSize = labelTextSize || 14;
    const color = labelColor || colors.white;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || colors.white;
    const { secureInput } = this.state;
    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text style={[{ fontSize, color }, styles.label]}>{labelText}</Text>
        {inputType === "password" ? (
          <TouchableOpacity
            style={styles.showButton}
            onPress={this.toggleShowPassword}
          >
            <Text style={styles.showButtonText}>
              {secureInput ? "Show" : "Hide"}
            </Text>
          </TouchableOpacity>
        ) : null}
        <TextInput
          autoCorrect={false}
          style={[
            { color: inputColor, borderBottomColor: borderBottom },
            styles.inputField
          ]}
          secureTextEntry={secureInput}
          onChangeText={onChangeText}
        />
      </View>
    );
  }

  toggleShowPassword = () => {
    this.setState({ secureInput: !this.state.secureInput });
  };
}

InputField.propTypes = {
  labelText: propTypes.string.isRequired,
  labelTextSize: propTypes.number,
  labelColor: propTypes.string,
  textColor: propTypes.string,
  borderBottomColor: propTypes.string,
  inputType: propTypes.string.isRequired,
  customStyle: propTypes.object,
  onChangeText: propTypes.func
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  label: {
    fontWeight: "700",
    marginBottom: 20
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  showButton: {
    position: "absolute",
    right: 0
  },
  showButtonText: {
    color: colors.white,
    fontWeight: "700"
  }
});

export default InputField;
