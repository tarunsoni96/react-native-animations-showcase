import React, { Component } from "react";
import { Keyboard,View, TouchableWithoutFeedback } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "react-native-elements";
import "Helpers/global";

import HelperMethods from "Helpers/Methods";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Loader from "./Loader";
import Icons from "./Icons";

export default class CustomButton extends Component {
  state = {
    animation: "",
  };
  onPress() {
    let { press } = this.props;
    Keyboard.dismiss();
    this.setState({animation: this.props.animation},()=>{
    })
    if (!press) {
      // alert("Provide onpress prop");
      return;
    }
    press();
  }

  componentWillReceiveProps(nextProps) {
    const { isApiCall } = nextProps;
    this.setState({ animation: isApiCall == "failed" ? "shake" : "" });
  }


  renderNormal() {
    let { text, containerStyle,round,icon, btnStyle,iconColor, half, isApiCall } = this.props;
    return (
      <Animatable.View
        animation={this.state.animation}
        useNativeDriver={true}
        duration={600}
      
        onAnimationEnd={()=>this.setState({animation:''})}
        style={[
          {
            ...containerStyle,
          },
          half && {  alignSelf: "flex-end",borderRadius:10 },
        ]}
      >
        <TouchableWithoutFeedback onPress={() => this.onPress()}>
          <View
            style={[round ?  styles.rountBtn : styles.btn,btnStyle]}
          >
            {isApiCall ? (
              <Loader  color={"#fff"} />
            ) : <>

            {round ? 
            
            <Icons lib={icon == 'check' ? 'Feather' : 'Entypo' }  name={icon || 'chevron-thin-right'} color={iconColor || '#D1E3E4'} {...this.props} />
            
            :
              <CustomText
                font={Fonts.semiBold}
                text={text || "Button"}
                size={17}
                color="#fff"
              />
            }
              </>
            }
          </View>
        </TouchableWithoutFeedback>
      </Animatable.View>
    );
  }
  render() {
    let { showGradient } = this.props;
    return <>{this.renderNormal()}</>;
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  button: {
    height: "54rem",
    justifyContent: "center",
    borderRadius: 10,
  },

  btn: {
    borderRadius: 12,
    alignItems:'center',
    backgroundColor:Colors.buttonBG,
    padding:12,
    borderRadius:100
  },

  rountBtn:{
      width:  50,
      height: 50,
      elevation:5,
      borderRadius: 100 / 2,
      backgroundColor: "#040714",
      alignItems: "center",
      justifyContent: "center"
  }
});
