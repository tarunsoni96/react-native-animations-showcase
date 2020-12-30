import React, { Component } from "react";
import Container from "AppLevelComponents/UI/Container";
import "Helpers/global";
import { observer } from "mobx-react";
import "Helpers/global";
import CustomButton from "AppLevelComponents/UI/CustomButton";

@observer
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.inputValObj = {};
    this.state = {
      isApiCall: false,
      showWhiteInput: true,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Container hideBack headerTitle="Animations Showcase Techugo">
        <CustomButton
          text="Button Animations >"
          press={() => this.props.navigation.navigate("ButtonAnimations")}
          btnStyle={{ flex: 1, marginTop: 20 }}
        />

        <CustomButton
          text="Form Animations >"
          press={() => this.props.navigation.navigate("FormAnimations")}
          btnStyle={{ flex: 1, marginTop: 20 }}
        />

        <CustomButton
          text="List Animation >"
          press={() => this.props.navigation.navigate("ListAnimations")}
          btnStyle={{ flex: 1, marginTop: 20 }}
        />

        <CustomButton
          text="Screen Push Animation 1 >"
          press={() => this.props.navigation.navigate("ScreenPush1")}
          btnStyle={{ flex: 1, marginTop: 20 }}
        />

        <CustomButton
          text="Screen Push Animation 2 >"
          press={() => this.props.navigation.navigate("ScreenPush2")}
          btnStyle={{ flex: 1, marginTop: 20 }}
        />

        <CustomButton
          text="Shutter animation >"
          press={() => this.props.navigation.navigate("ShutterAnim")}
          btnStyle={{ flex: 1, marginTop: 20 }}
        />

        <CustomButton
          text="Bubbles animation >"
          press={() => this.props.navigation.navigate("BubbleAnimation")}
          btnStyle={{ flex: 1, marginTop: 20 }}
        />

        <CustomButton
          text="List deletion animation >"
          press={() => this.props.navigation.navigate("ListDeletionAnimation")}
          btnStyle={{ flex: 1, marginTop: 20 }}
        />

<CustomButton
          text="Shared element transition >"
          press={() => this.props.navigation.navigate("sharedNav")}
          btnStyle={{ flex: 1, marginTop: 20 }}
        />


      </Container>
    );
  }
}

export default Dashboard;
