import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import cars from "../cars";

const CarList = (props) => {
    const renderItem = ({ item }) => (
        <View>
            <Image source={{uri: item.image}} style={{ width: 175, height: 100 }} />
            <Text>{item.name}</Text>
            <Text>{item.price}€ par jour</Text>
        </View>
    )
    return (
        <View>
            <FlatList data={cars} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </View>
    )
}

export default CarList