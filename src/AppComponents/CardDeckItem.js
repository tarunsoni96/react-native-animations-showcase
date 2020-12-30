import React, { Component } from "react";
import {
  StyleSheet,
  Vibration,
  TouchableOpacity,
  View,
  Animated,
  Image,
} from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import Fonts from "UIProps/Fonts";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";
import HelperMethods from "Helpers/Methods";
import LinearGradient from "react-native-linear-gradient";

import * as Animatable from "react-native-animatable";
import MobxStore from "StorageHelpers/MobxStore";
import { observer } from "mobx-react";

import Constants from "Helpers/Constants";
import { apiFuncGet } from "ServiceProviders/ApiCaller";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import Icons from "AppLevelComponents/UI/Icons";
import { Colors } from "UIProps/Colors";
import { TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native";
import FirstName from "AppLevelComponents/UI/FormInputs/FirstName";
import { ImageBackground } from "react-native";
import CustomRadioButton from "AppLevelComponents/UI/CustomRadioButton";
import CustomButton from "AppLevelComponents/UI/CustomButton";

let borderRadius = 25;

@observer
class CardDeckItem extends Component {
  constructor(props) {
    super(props);
    this.icons = [];
    this.state = {
      data: [],
      isApiCall: false,
      animation: "",
      added: false,
    };
  }

  renderStars() {
    if (this.icons.length == 0) {
      let r = Math.floor(Math.random() * 5);
      if (r) {
        this.icons = new Array(r).fill(
          <Icons
            lib="AntDesign"
            style={{ bottom: 1 }}
            name="star"
            color={Colors.accent}
          />
        );

        for (let i = r; i < 5; i++) {
          this.icons.push(
            <Icons
              lib="AntDesign"
              style={{ bottom: 1 }}
              name="staro"
              color={Colors.accent}
            />
          );
        }
      } else {
        this.icons.push(
          <CustomText text="No ratings yet" color={"#fff"} size={20} />
        );
      }
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: 2,
            left: 0,
            right: 0,
            justifyContent: "space-evenly",
          }}
        >
          {this.icons}
        </View>
      );
    } else {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: 2,
            left: 0,
            right: 0,
            justifyContent: "space-evenly",
          }}
        >
          {this.icons}
        </View>
      );
    }
  }
  handleViewRef = (ref) => (this.view = ref);

  addToShortlist() {
    Vibration.vibrate(30);
    this.setState({ added: !this.state.added });
    this.view
      .wobble(600)
      .then((endState) =>
        console.log(endState.finished ? {} : "bounce cancelled")
      );
  }

  render() {
    let borderRad = 70;
    const { item } = this.props;
    return (
      <Animatable.View
        animation={"slideInUp"}
        duration={600}
        delay={100 * this.props.index}
      >
        <View
          style={{
            width: "90%",
            backgroundColor: "#fff",
            elevation: 14,
            alignSelf: "center",
            shadowColor: "#000",
            marginBottom: 20,
            shadowOffset: { height: 1, width: 0 },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            borderRadius: borderRadius,
          }}
        >
          <View
            style={{
              borderRadius: 10,
            }}
          >
            <View style={{ justifyContent: "flex-end" }}>
              <View style={{ alignItems: "center" }}>
                <ImageBackground
                  source={{
                    uri:
                      "https://cnet2.cbsistatic.com/img/A9sobjTXrgz0s-7vqg0N9dy2M9U=/940x0/2020/01/15/8776e381-47d9-475a-bd6c-b19fc9f3c21d/ferrari.jpg",
                  }}
                  style={{ width: "100%", height: 300, borderRadius }}
                  imageStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  resizeMode="cover"
                >
                  <View
                    style={{
                      flex: 1,
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(0,0,0,0.3)",
                      borderTopLeftRadius: borderRadius,
                      borderTopRightRadius: borderRadius,
                    }}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 15,
                      paddingVertcal: 20,
                    }}
                  >
                    <LinearGradient
                      useAngle={true}
                      angle={180}
                      angleCenter={{ x: 0.25, y: 0.7 }}
                      colors={["#E7CD00",  "#FFE200"]}
                      style={styles.courseFee}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <CustomText
                          text={`${"\u20B9"}2,000`}
                          color={Colors.textPrimary}
                          font={Fonts.bold}
                          size={20}
                        />
                      </View>
                    </LinearGradient>

                    <Animatable.View
                      ref={this.handleViewRef}
                    >
                      <View
                        onPress={() => this.addToShortlist()}
                      >
                        <Icons
                          lib={"AntDesign"}
                          name={this.state.added ? "heart" : "hearto"}
                          color={this.state.added ? Colors.accent : "#fff"}
                        />
                      </View>
                    </Animatable.View>
                  </View>

                  {this.renderStars()}
                </ImageBackground>
              </View>
            </View>
          </View>

          <View style={{ padding: 14, paddingVertical: 13 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.circle}>
                  <Image
                    source={{
                      uri:
                        "https://www.getuppeople.com/upload/photo/users_profile/2419_.jpg",
                    }}
                    style={{ borderRadius: 40, height: 63, width: 63 }}
                    resizeMode="cover"
                  />
                </View>

                <View style={{ paddingHorizontal: 5 }} />

                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ paddingLeft: 6 }}>
                      <CustomText
                        text={"Dummy Text"}
                        color={Colors.textPrimary}
                        font={Fonts.bold}
                        size={21}
                        marginTop={4}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: 4,
                          alignItems: "center",
                        }}
                      >
                        <Icons
                          lib="AntDesign"
                          name={"clockcircleo"}
                          size={16}
                        />
                        <CustomText
                          text={" 15 days"}
                          color={Colors.textPrimary}
                          font={Fonts.semiBold}
                          size={18}
                        />
                      </View>
                      <Animatable.View
                        animation={this.state.animation}
                        ref={this.handleViewRef}
                      >
                        <TouchableOpacity
                          style={{}}
                          onPress={() => this.addToShortlist()}
                        />
                      </Animatable.View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
  },

  courseFee: {
    backgroundColor: Colors.accent,
    padding: 7,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
export default CardDeckItem;
