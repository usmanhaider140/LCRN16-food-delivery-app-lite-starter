import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MainLayout } from "../screens";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();
const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView scrollEnabled contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1, padding: SIZES.radius }}>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{ height: 35, width: 35, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
          }}
          onPress={() => navigation.navigate("MainLayout")}
        >
          <Image
            source={dummyData.myProfile.profile_image}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <View style={{ marginLeft: SIZES.radius }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {dummyData.myProfile.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
const CustomDrawer = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          return <CustomDrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});

export default CustomDrawer;
