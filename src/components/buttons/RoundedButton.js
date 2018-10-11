import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import propTypes from "prop-types";
import colors from "../../styles/colors";

class RoundedButton extends Component {
  render() {
    const {
      text,
      color,
      backgroundColor,
      handleOnPress,
      icon,
      highlighColor
    } = this.props;
    return (
      <TouchableHighlight
        onPress={handleOnPress}
        underlayColor={highlighColor}
        style={[{ backgroundColor }, styles.wrapper]}
      >
        <View style={styles.buttonTextWrapper}>
          {icon}
          <Text style={[{ color }, styles.buttonText]}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundedButton.propTypes = {
  text: propTypes.string.isRequired,
  color: propTypes.string,
  backgroundColor: propTypes.string,
  icon: propTypes.object,
  handleOnPress: propTypes.func
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center"
  },
  buttonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default RoundedButton;
