import React, { Component } from "react";
import propTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight, StyleSheet } from "react-native";
import colors from "../../styles/colors";

class NextArrowButton extends Component {
  render() {
    const { disabled, handleNextButton, color } = this.props;
    const opacityStyle = disabled
      ? { backgroundColor: "rgba(255,255,255,0.2)" }
      : { backgroundColor: "rgba(255,255,255,0.6)" };
    return (
      <TouchableHighlight
        onPress={handleNextButton}
        style={[opacityStyle, styles.button]}
        disabled={disabled}
      >
        <Icon name="angle-right" color={color} size={32} style={styles.icon} />
      </TouchableHighlight>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: propTypes.bool,
  handleNextButton: propTypes.func
};

const styles = StyleSheet.create({
  icon: {
    marginRight: -2,
    marginTop: -2
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default NextArrowButton;
