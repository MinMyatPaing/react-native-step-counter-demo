import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type StatComponentContainerProps = {
  label: string;
  value: string;
};

const StatComponentContainer = ({
  label,
  value,
}: StatComponentContainerProps) => {
  return (
    <View style={styles.valueContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Worlds!</Text>

      <View style={{ flexDirection: "row" }}>
        <StatComponentContainer label="Steps" value="1219" />
        <StatComponentContainer label="Flights Climbed" value="12" />
      </View>

      <StatComponentContainer label="Distance" value="0,75 km" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 12,
  },
  valueContainer: {
    marginRight: 50,
    marginVertical: 10,
  },
  label: {
    color: "white",
    fontSize: 20,
  },
  value: {
    fontSize: 35,
    color: "#AFB3BE",
    fontWeight: "500",
  },
});
