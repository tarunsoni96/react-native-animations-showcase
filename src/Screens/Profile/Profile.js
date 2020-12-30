import React, { Component } from "react";
import { TouchableOpacity, View, StatusBar, ScrollView } from "react-native";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import Divider from "AppLevelComponents/UI/Divider";
import Header from "AppLevelComponents/UI/Header";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import Fonts from "UIProps/Fonts";
import ProfilePic from "AppLevelComponents/UI/ProfilePic";
import Constants from "Helpers/Constants";
import ProfileLabel from "./components/ProfileLabel";
import HelperMethods from 'Helpers/Methods'
import InfoItem from "./components/InfoItem";
import { Row, Grid, Col } from "react-native-easy-grid";
import Icons from "../../AppLevelComponents/UI/Icons";
import { UserInfoConsumer } from "../../AppLevelComponents/Contexts/CxtUserInfo";

export class Profile extends Component {
  state = {
    selectProfilePicSource: false
  };
  openBS_sourceSelection() {}

  render() {
    return (
      <View />
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  headerContent: {
    width: "100%",
    // height: "100%",
    alignItems: "center"
  },

  infoContainer: {
    flex: 0,
    paddingLeft: 40,
    width: "100%",
    alignItems: "center"
  },

  colRight: {
    paddingLeft: 20,
    paddingRight: 10,
    height: "100%"
  },

  infoRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25
  },

  pencilCircle: {
    width: 29,
    height: 29,
    right: 30,
    position: "absolute",
    borderRadius: 100 / 2,
    backgroundColor: "#f7f7f9",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(112, 112, 112, 0.29)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 19,
    shadowColor: "#000",
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 5
  }
});
export default Profile;
