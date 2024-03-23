import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={{ flexDirection: "row", padding: 20, width: 200 }}></View>

      <View
        style={{
          backgroundColor: "white",
          alignContent: "flex-end",
        }}
      >
        <View>
          <Text>My Diary</Text>
        </View>
        <Text> today </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "flex-end",
  },
});
