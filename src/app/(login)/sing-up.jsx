import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Singup() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          value={user}
          onChangeText={setUser}
          style={styles.input}
          placeholder="Nome de usuário:"
          placeholderTextColor="#aaa"
        />
        <MaterialCommunityIcons
          name={"account"}
          size={24}
          color="#aaa"
          style={styles.icon}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Senha:"
          placeholderTextColor="#aaa"
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 70,
    margin: 40,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 8,
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    color: "#333",
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
  heading: {
    alignItems: "center",
    fontSize: 20,
    color: "green",
    marginBottom: 20,
  },
});
