import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../theme/Colors";
import { Ionicons } from "@expo/vector-icons";
import Profilelist from "../component/Profilelist";

export default function Profile() {
  const topUp = () => {
    alert("Top-up clicked");
  };
  const handleListClick = (item) => {
    alert(item);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headingText}>PK</Text>
        <Text style={styles.contact}> +91 9324601907</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Text>Current balance :</Text>
            <Text>180</Text>
          </View>
          <View style={styles.row}>
            <Text>Available balance for orders :</Text>
            <Text>180</Text>
          </View>
          <TouchableWithoutFeedback onPress={() => topUp()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Top-up wallet</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{margin:10}} />
        <Profilelist
          display="Personal details"
          icon="person"
          onselect={handleListClick}
          right={false}
          rightDisplay=""
          rightIcon=""
        />
        <Profilelist
          display="Region"
          icon="location"
          onselect={handleListClick}
          right={true}
          rightDisplay="Mumbai"
          rightIcon="location"
        />
        <Profilelist
          display="Statistics"
          icon="stats-chart-sharp"
          onselect={handleListClick}
          right={false}
          rightDisplay=""
          rightIcon=""
        />
        <Profilelist
          display="About"
          icon="information-circle-outline"
          onselect={handleListClick}
          right={false}
          rightDisplay=""
          rightIcon=""
        />
        <Profilelist
          display="Logout"
          icon="log-out"
          type="danger"
          onselect={handleListClick}
          right={false}
          rightDisplay=""
          rightIcon=""
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headingText: {
    fontSize: 38,
    fontWeight: "bold",
  },
  contact: {
    color: Colors.secondaryText,
  },
  card: {
    marginTop: 25,
    marginHorizontal: 10,
    borderRadius: 20,
    elevation: 4,
    backgroundColor: Colors.light,
    padding: 20,
  },
  row: {
    margin: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 15,
    borderColor: Colors.light,
    borderWidth: 1,
    backgroundColor: Colors.primary,
    elevation: 8,
  },
  buttonText: {
    color: Colors.lightText,
    textAlign: "center",
  },
});
