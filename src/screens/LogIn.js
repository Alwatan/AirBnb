import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import colors from "../styles/colors";
import InputField from "../components/forms/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Notification from "../components/Notification";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false
    };
  }
  render() {
    const { formValid } = this.state;
    const showNotification = formValid ? false : true;
    const background = formValid ? colors.green01 : colors.darkOrange;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
      >
        <View style={styles.srollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log in</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton
              handleNextButton={this.handleNextButton}
              color={background}
              disabled={false}
            />
          </View>
          <View>
            <Notification
              type="Error"
              handleCloseNotification={this.handleCloseNotification}
              showNotification={showNotification}
              firstLine="Those credentials don't look right. "
              secondLine="Please try again."
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  handleNextButton = () => {
    alert("Next Button pressed");
  };

  handleCloseNotification = () => {
    this.setState({ formValid: true });
  };
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1
  },
  srollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  loginHeader: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 30
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  nextButton: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  }
});

export default LogIn;
