import React, { Component } from "react";
import { Animated, View, Text } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import Container from "AppLevelComponents/UI/Container";
import CustomTextInput from "AppLevelComponents/UI/FormInputs/CustomTextInput";
import * as Animatable from "react-native-animatable";

let animDur = 300;
export default class SharedElementTransitionDetail extends Component {
  state = {
    data: [
      { name: "Dummy Text" },
      { name: "Dummy Text" },
      { name: "Dummy Text" },
      { name: "Dummy Text" },
      { name: "Dummy Text" },
      { name: "Dummy Text" },
      { name: "Dummy Text" },
      { name: "Dummy Text" },
      { name: "Dummy Text" },
    ],
    loadList: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadList: true });
    }, 400);
  }

  renderItem = ({ item, index }) => {
    //0 * 200
    //1 * 200 = 200
    return (
      <Animatable.View
        style={{
          padding: 10,
          marginBottom: 10,
          backgroundColor: "red",
          margin: 5,
          flex: 1,
        }}
        duration={animDur}
        delay={index * 50}
        animation="fadeInLeft"
      >
        <Text style={{ fontSize: 19, color: "white" }}>{item.name}</Text>
      </Animatable.View>
    );
  };

  render() {
    return (
      <Container headerTitle="Detail">
        <SharedElement id={this.props.navigation.state.params.index}>
          <View
            style={{
              height: 400,
              width: "100%",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { height: 1, width: 0 },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              elevation: 10,
              justifyContent: "center",
              marginTop: 30,
              backgroundColor: "red",
            }}
          >
            <Text style={{ color: "white", fontSize: 30 }}>Dummy Text</Text>
          </View>
        </SharedElement>
      </Container>
    );
  }
}

SharedElementTransitionDetail.sharedElements = (route, otherRoute, showing) => [
  { id: route.state.params.index, animation: "fade" },
];
