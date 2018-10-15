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
import Loader from "../components/Loader";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      emailAddress: "",
      validPassword: false,
      loadingVisible: false
    };
  }
  render() {
    const { formValid, loadingVisible } = this.state;
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
              onChangeText={this.handleEmailChange}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handlePasswordChange}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton
              handleNextButton={this.handleNextButton}
              color={background}
              disabled={this.toggleNextButtonState()}
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
        <Loader animationType={"fade"} visible={loadingVisible} />
      </KeyboardAvoidingView>
    );
  }

  handleNextButton = () => {
    this.setState({ loadingVisible: true });
    setTimeout(() => {
      if (
        this.state.emailAddress === "pugudean@gmail.com" &&
        this.state.validPassword
      ) {
        this.setState({ formValid: true });
      } else {
        this.setState({ formValid: false });
      }
      this.setState({ loadingVisible: false });
    }, 2000);
  };

  handleCloseNotification = () => {
    this.setState({ formValid: true });
  };

  handleEmailChange = email => {
    const emailCheckRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.setState({ emailAddress: email });
    if (!this.state.validEmail) {
      if (email.trim().match(emailCheckRegEx)) {
        this.setState({ validEmail: true });
      }
    } else {
      if (!email.trim().match(emailCheckRegEx)) {
        this.setState({ validEmail: false });
      }
    }
  };

  handlePasswordChange = password => {
    if (!this.state.validPassword) {
      if (password.length > 4) {
        this.setState({ validPassword: true });
      }
    } else if (password.length <= 4) {
      this.setState({ validPassword: false });
    }
  };

  toggleNextButtonState = () => {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
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
