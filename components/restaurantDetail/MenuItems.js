import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzling gril",
    price: "$19.20",
    image: "https://culinaryginger.com/wp-content/uploads/Grilled-Tandoori-Chicken-Kebabs-4--720x540.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
    price: "14.50",
    image: "https://mexico10.org/wp-content/uploads/2020/12/Chilaquiles-rojos-con-pollo.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "One can never go wrong with a chicken casesar salad. Healthy and refreshing.",
    price: "14.50",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/3/3/0/FNM_040110-W-N-Dinners-015_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371591380107.jpeg",
  },
];

const styles = StyleSheet.create ({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
  descriptionStyle: {
    fontSize: 15,
    fontWeight: "400",
  }
});

const MenuItems = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
        <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
    </ScrollView>
  );
}
   
const FoodInfo = (props) => (
  <View
    style={{
      width: 240,
      justifyContent: "space-evenly",
    }}
  >
    <Text
      style={styles.titleStyle}
    >{props.food.title}</Text>
    <Text
      style={styles.descriptionStyle}
    >{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image source={{uri: props.food.image}}
      style={{width: 100,
        height: 100,
        borderRadius: 8,
      }}
    />
  </View>
);

export default MenuItems;
