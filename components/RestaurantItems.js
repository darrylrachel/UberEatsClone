import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVi_3_m96wc1UmI55913bLkPei7t8ezLEUA&usqp=CAU",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXO3W0JXGET939wVbUMZ3vRr557j8AbahVQ&usqp=CAU",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6tK284oicG_6o_KwPCtsJBHET1xQz6VS9g&usqp=CAU",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.5,
  },
  {
    name: "Mcdonalds",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBo2Bjd7jsPiMhUg-0r0a3MEjFDaWmVuIPw&usqp=CAU",
    categories: ["Cafe", "Fast Food"],
    price: "$$",
    reviews: 1244,
    rating: 4.2,
  },
];

const RestaurantItems = (props) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {/* loop starts here */}
      {props.restaurantData.map((restaurant, index) => (
        <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
      {/* loop ends here */}
    </TouchableOpacity> 
  );
};

const RestaurantImage = (props) => (
  <>
    <Image 
    source={{
      uri: props.image,
    }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color={"#fff"} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View 
    style={{
      flexDirection: "row", 
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
  <View>
    <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
    <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
  </View>
    <View 
      style={{ 
        backgroundColor: "#eee", 
        height: 30, 
        width: 30, 
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    > 
      <Text>{props.rating}</Text>
    </View>  
  </View>
)

export default RestaurantItems;
