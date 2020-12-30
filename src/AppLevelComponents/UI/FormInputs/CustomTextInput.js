import React, { Component } from "react";
import { Image, TextInput, StyleSheet, View } from "react-native";

import { Colors } from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import {
  inputStyle,
  inputErrorStyle,
  labelStyle,
  inputContainerStyle,
} from "UIProps/Styles";
import InputIcon from "./InputIcon";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import CustomText from "../CustomText";
import Fonts from "UIProps/Fonts";
import Icons from "../Icons";
import { TouchableWithoutFeedback } from "react-native";
import { Platform } from "react-native";

var FloatingLabel = require("react-native-floating-labels");

export default class CustomTextInput extends Component {
  state = {
    error: "",
    wantToEdit: undefined,
    text: "",
  };

  componentDidMount(){
    if(this.props.setRef)
    this.props.setRef(this.inputRef)
  }
  setText(text) {
    if (this.props.inputValueGetter == undefined) {
      alert("Please provide input value getter function to this component");
      return;
    }

    this.setState({ text, wantToEdit: true });
    InputValidations.validatePhone(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();

      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props.inputValueGetter(text);
      }
    });
  }

  render() {
    let {
      value,
      keyboardType,
      style,
      placeholder,
      onSubmit,
      limit,
    } = this.props;
    return (
      <View style={[{shadowColor: "#000",
          shadowOffset: { height: 1, width: 0 },
          shadowOpacity: 0.15,
          shadowRadius: 2,marginBottom:20,}]}>
        <View
          style={[
            inputContainerStyle,
            { flexDirection: "row", alignItems: "center", elevation:4},
            ]}
        >
          <TextInput
            ref={(ref) => (this.inputRef = ref)}
            placeholder={placeholder || "Mobile number"}
            style={[
              inputContainerStyle,
              { fontFamily:Fonts.semiBold},
            ]}
            placeholderTextColor="#898989"
            maxLength={limit}
            onChangeText={(text) => this.setText(text)}
            value={this.state.wantToEdit ? this.state.text : value}
            returnKeyType="done"
            onSubmitEditing={onSubmit}
            keyboardType={keyboardType || "default"}
            {...this.props}
          />
          {this.state.text ? (
            <TouchableWithoutFeedback
              onPress={() => {
                this.setState({ text: "" });
                this.inputRef.focus();
              }}
            >
              <Image
                source={require("assets/img/clear.png")}
                style={{ width: 25, height: 25, marginRight: 10 }}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
          ) : null}
        </View>

        {/* {forceErr ? (
          <CustomText
            size={14}
            font={Fonts.regular}
            style={inputErrorStyle}
            text={forceErr}
            color="red"
          />
        ) : null}

        {this.state.error && this.state.text ? (
          <CustomText
            size={14}
            font={Fonts.regular}
            text={err || this.state.error}
            color="red"
          />
        ) : null} */}
      </View>
    );
  }
}
