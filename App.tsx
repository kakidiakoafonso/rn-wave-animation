import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <MaterialCommunityIcons name="bell-ring" size={40} color="black" />
      {[...Array(3).keys()].map((value, index) => (
        <MotiView
          key={index}
          style={styles.circles}
          from={{ opacity: 0.7, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 4,
          }}
          transition={{
            type: "timing",
            duration: 2000,
            easing: Easing.out(Easing.ease),
            loop: true,
            delay: index * 400,
            repeatReverse: false,
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circles: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
    position: "absolute",
    elevation: -1,
  },
});
