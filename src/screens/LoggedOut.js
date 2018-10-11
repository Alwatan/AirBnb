import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import Icon from "react-native-vector-icons/FontAwesome";

class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image source={require("../img/airbnb.png")} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome to AirBnb</Text>
          <RoundedButton
            handleOnPress={this.onFacebookPress}
            text="Continue with Facebook"
            color={colors.green01}
            highlighColor={colors.green01}
            backgroundColor={colors.white}
            icon={
              <Icon
                name="facebook"
                size={20}
                style={styles.facebookButtonIcon}
              />
            }
          />
          <RoundedButton
            handleOnPress={this.onCreateAccountPress}
            highlighColor={colors.white}
            text="Create Account"
            color={colors.white}
            backgroundColor={colors.green01}
          />
          <TouchableHighlight
            onPress={this.onMoreOptionsPress}
            style={styles.moreOptionsButton}
          >
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableHighlight>
          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Create Account or More
            </Text>
            <Text style={styles.termsText}> options, </Text>
            <Text style={styles.termsText}>I agree to AirBnb's </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Payment terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Nondiscrimination Policy.</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }

  onFacebookPress = () => {
    alert("Facebook pressed");
  };

  onCreateAccountPress = () => {
    alert("Create Account pressed");
  };

  onMoreOptionsPress = () => {
    alert("More Options Pressed");
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.green01
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 30
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  welcomeText: {
    fontSize: 25,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 20
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: "relative",
    left: 20,
    zIndex: 8
  },
  moreOptionsButton: {
    marginTop: 15
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16
  },
  termsText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "400"
  },
  termsAndConditions: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 30
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  }
});

export default LoggedOut;
