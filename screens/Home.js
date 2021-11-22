import React, { useEffect } from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = "CJFksLXtYgTbmHc7qZbyZD453fNChoaa5Rsyt_Sq7Av2_LChOhPikElsvSTaVEfkTcIEPCtzTqflVdD5tk3muWMrHv0j3F-u3IL9ect2tBGM1U7VCt47IfmcUvKbYXYx";

export const Home = (props) => {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Bakersfield";
  
  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
  }}

  return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then(json => setRestaurantData(json.businesses));
};

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);


  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
