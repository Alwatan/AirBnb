import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Easing,
  Animated
} from "react-native";
import propTypes from "prop-types";
import colors from "../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionValue: new Animated.Value(60)
    };
  }
  render() {
    const {
      type,
      firstLine,
      secondLine,
      handleCloseNotification,
      showNotification
    } = this.props;
    const { positionValue } = this.state;
    showNotification
      ? this.animateNotification(0)
      : this.animateNotification(60);
    return (
      <Animated.View
        style={[{ transform: [{ translateY: positionValue }] }, styles.wrapper]}
      >
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}>{type}</Text>
          <Text style={styles.errorMessage}>{firstLine}</Text>
          <Text style={styles.errorMessage}>{secondLine}</Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={handleCloseNotification}
        >
          <Icon name="times" size={20} color={colors.lightGrey} />
        </TouchableOpacity>
      </Animated.View>
    );
  }

  animateNotification = value => {
    const { positionValue } = this.state;
    Animated.timing(positionValue, {
      toValue: value,
      duration: 400,
      velocity: 3,
      tension: 2,
      friction: 8,
      easing: Easing.easeOutBack
    }).start();
  };
}

Notification.propTypes = {
  type: propTypes.string.isRequired,
  firstLine: propTypes.string,
  secondLine: propTypes.string,
  handleCloseNotification: propTypes.func,
  showNotification: propTypes.bool.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    width: "100%",
    padding: 10,
    paddingRight: 30
  },
  notificationContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2
  },
  errorMessage: {
    marginBottom: 2,
    fontSize: 14
  },
  closeButton: {}
});

export default Notification;
