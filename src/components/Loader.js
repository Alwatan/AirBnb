import React, { Component } from "react";
import colors from "../styles/colors";
import propTypes from "prop-types";
import { View, Image, Modal, StyleSheet } from "react-native";

class Loader extends Component {
  render() {
    const { animationType, visible } = this.props;
    return (
      <Modal
        visible={visible}
        animationType={animationType}
        transparent={true}
        onRequestClose={() => {}}
      >
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <Image
              style={styles.loaderImage}
              source={require("../img/loading.gif")}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: propTypes.string.isRequired,
  visible: propTypes.bool.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  loaderImage: {
    width: 90,
    height: 90,
    backgroundColor: colors.white,
    borderRadius: 15
  },
  loaderContainer: {
    width: 90,
    height: 90,
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: -45,
    marginTop: -45
  }
});

export default Loader;
