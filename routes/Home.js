import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home(props) {
    return (
        <View style={styles.container}>
                <StatusBar style="light" />
                <TouchableOpacity onPress={() => props.navigation.navigate("CarList")}>
                    <Image style={styles.homeImage} source={require("../assets/hero.jpg")} />
                    <Text style={styles.homeText}>8 Véhicules à découvrir</Text>
                </TouchableOpacity>

            </View>
    )
}

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: vw,
        height: vw / 1.5,
    },
    homeImage: {
        width: vw - 20,
        height: 200,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 15,
        position: "absolute"
    },
    homeText: {
        position: "relative",
        fontSize: 20,
        color: "white",
        left: 25,
        top: 175
    }
})