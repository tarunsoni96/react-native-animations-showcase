import React, { Component, Fragment } from "react";
import { Text, View, StatusBar, Image, Keyboard } from "react-native";
import { Colors } from "UIProps/Colors";
import { createAppContainer } from "react-navigation";
import { createStackNavigator,TransitionPresets } from "react-navigation-stack";

import Icons from "AppLevelComponents/UI/Icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import "Helpers/global";
import {
  createFluidNavigator,
  Transition as fluidTransition,
  FluidNavigator,
} from "react-navigation-fluid-transitions";
import EStyleSheet from "react-native-extended-stylesheet";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";
import {
  fromLeft,
  fromTop,
  fromRight,
  fromBottom,
  fadeIn,
  fadeout,
  zoomIn,
  zoomOut,
  flipY,
  flipX,
} from "react-navigation-transitions";
import Login from "Screens/Login/Login";
import ForgotPassword from "Screens/ForgotPassword/ForgotPassword";
import ResetPassword from "Screens/ResetPassword/ResetPassword";
import Shopping from "Screens/Shopping/Shopping";
import Summary from "Screens/Summary/Summary";
import DashboardDesign from "Screens/Dashboard/Dashboard";
import OnboardingOTP from "Screens/Onboarding/OnboardingOTP";
import OnboardingUserSelection from "Screens/Onboarding/OnboardingUserSelection";
import CustomText from "AppLevelComponents/UI/CustomText";
import Fonts from "UIProps/Fonts";
import Profile from "Screens/Profile/Profile";
import ButtonAnimations from "Screens/ButtonAnimations";
import FormAnimations from "Screens/FormAnimations";
import ListAnimations from "Screens/ListAnimations";
import ListAnimationHeader from "Screens/ListAnimationHeader";
import ScreenPush1 from "Screens/ScreenPush1";
import ScreenPush2 from "Screens/ScreenPush2";
import ShutterAnim from "Screens/ShutterAnim";
import BubbleAnimation from "Screens/BubbleAnimation";
import ListDeletionAnimation from "Screens/ListDeletionAnimation";
import SharedElementTransition from "Screens/SharedElementTransition";
import SharedElementTransitionDetail from "Screens/SharedElementTransitionDetail";
import { springyFadeIn } from "SpringyAnim";

let transitionSpeed = 650;
let tabIconSize = 27;

let svgSize = 26;
let activeColor = Colors.textPrimary;
let inactiveColor = "#777F9C";
let colors = { dash: { color: activeColor } };

const transitionConfig = {
  duration: 500,
};

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions here..
  if (
    prevScene &&
    prevScene.route.routeName === "DashboardDesign" &&
    nextScene.route.routeName === "ScreenPush1"
  ) {
    return fromBottom(transitionSpeed);
  } else if (
    prevScene &&
    prevScene.route.routeName === "DashboardDesign" &&
    nextScene.route.routeName === "ScreenPush2"
  ) {
    return fromTop(transitionSpeed);
  } 
};

const sharedNav = createSharedElementStackNavigator(
  {
    SharedElementTransition,
    SharedElementTransitionDetail,
  },
  {
    headerMode: "none",
    transitionConfig: (nav) => fadeIn()
  
  }
);

const DashboardStack = createStackNavigator(
  {
    DashboardDesign,
    sharedNav,
    ListDeletionAnimation,
    BubbleAnimation,
    ShutterAnim,
    ListAnimations,
    ButtonAnimations,
    FormAnimations,
    ScreenPush1,
    ScreenPush2,
  },
  {
    headerMode: "none",
    transitionConfig: (nav) => handleCustomTransition(nav),
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile,
  },
  {
    headerMode: "none",
    transitionConfig: (nav) => handleCustomTransition(nav),
  }
);

const ShortlistStack = createStackNavigator(
  {
    ListAnimationHeader,
  },
  {
    headerMode: "none",

    // transitionConfig: (nav) => handleCustomTransition(nav),
  }
);

const InsideApp = createMaterialBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: {
        tabBarLabel: (
          <CustomText
            text="Dash"
            color={colors["dash"]?.color || inactiveColor}
            size={15}
            font={colors["dash"]?.color ? Fonts.bold : Fonts.semiBold}
          />
        ),

        tabBarIcon: ({ focused }) => (
          <View>
            <Icons lib="AntDesign" name={focused ? "heart" : "hearto"} />
          </View>
        ),
      },
    },

    Shortlist: {
      screen: ShortlistStack,
      navigationOptions: {
        tabBarLabel: (
          <CustomText
            text="Shortlists"
            color={colors["shortlist"]?.color || inactiveColor}
            size={15}
            font={colors["shortlist"]?.color ? Fonts.bold : Fonts.semiBold}
          />
        ),
        tabBarIcon: ({ focused }) => (
          <View>
            <Icons lib="AntDesign" name={focused ? "heart" : "hearto"} />
          </View>
        ),
      },
    },

    // Profile: {
    //   screen: ProfileStack,
    //   navigationOptions: {
    //     tabBarLabel: (
    //       <CustomText
    //         text="Profile"
    //         color={colors["profile"]?.color || inactiveColor}
    //         size={15}
    //         font={colors["profile"]?.color ? Fonts.bold : Fonts.semiBold}
    //       />
    //     ),

    //     tabBarIcon: ({ focused }) => (
    //       <View>
    //         <Icons lib="AntDesign" name={focused ? "heart" : "hearto"} />
    //       </View>
    //     ),
    //   },
    // },
  },
  {
    initialRouteName: "Dashboard",
    tabBarOptions: {},
    barStyle: {
      backgroundColor: "#fff",
      paddingVertical: 8,
    },
  }
);

const switcher = createAnimatedSwitchNavigator(
  {
    InsideApp,
    // OnboardingStack,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-top"
          durationMs={500}
          interpolation="easeIn"
        />
        <Transition.In type="slide-top" durationMs={transitionSpeed} />
      </Transition.Together>
    ),
  }
);

const AppContainer = createAppContainer(switcher);

export default class AppRoot extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <AppContainer />
        </View>
      </>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};
