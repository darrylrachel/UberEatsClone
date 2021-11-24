import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGhhaSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  categories: [
    {title: "Thai"},
    {title: "Comfort Food"},
  ],
};

const {name, image, price, reviews, rating, categories} = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories}`

const image = "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGhhaSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60";

const title = "Farmhouse Kitchen Thai Cuisine";

const description = "Thai • Comfort Food • $$ • (2913+)"; // Add ticket and star emoji

const About = (props) => {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = (props) => {
  return (
    <Image source={{uri: props.image}}
    style={{
      width: "100%",
      height: 180,
    }}
  />
  );
}

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}>{props.title}</Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}>{props.description}</Text>
)

export default About;
