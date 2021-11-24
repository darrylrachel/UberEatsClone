import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';

const RestaurantDetail = (props) => {
  return (
    <View>
      <About />
      <Divider width={1.8}
        style={{
          marginVertical: 20,
        }} 
      />
      <MenuItems />
    </View>
  );
};

export default RestaurantDetail;
