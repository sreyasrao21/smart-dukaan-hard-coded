import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { login, signup } from "../services/api";

const whiteText = { color: "white" };
const registerStyle = {
  width: 250,
  height: 45,
  borderRadius: 10,
  borderWidth: 1,
  paddingLeft: 10,
  borderBlockColor: "gray",
  borderColor: "white",
  color: "gray",
  margin: 10,
};

export default function AuthScreen({ navigation }: any) {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const registerInputs = [
    { placeholder: "Full Name", key: "fullName", val: name, setFunc: setName },
    {
      placeholder: "Email Address",
      key: "emailAddress",
      val: email,
      setFunc: setEmail,
    },
    {
      placeholder: "Phone Number",
      key: "phoneNumber",
      val: phoneNumber,
      setFunc: setPhoneNumber,
    },
    {
      placeholder: "Username",
      key: "username",
      val: username,
      setFunc: setUsername,
    },
    {
      placeholder: "Password",
      key: "password",
      val: password,
      setFunc: setPassword,
    },
  ];
  return !isSignup ? (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#101828",
          // justifyContent: "center",
          alignItems: "center",
          padding: 50,
        }}
      >
        <Image
          source={require("../smartdukaanlogo.jpeg")}
          style={{
            width: 80,
            height: 80,
            borderRadius: 15,
          }}
        />
        <Text
          style={[
            whiteText,
            {
              alignContent: "center",
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 25,
            },
          ]}
        >
          Welcome Back
        </Text>
        <Text
          style={[
            whiteText,
            {
              alignContent: "center",
              fontWeight: "bold",
              fontSize: 25,
            },
          ]}
        >
          Shopkeeper
        </Text>
        <Text style={whiteText}>Manage your shop with ease</Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 10,
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "white",
            width: 250,
            height: 45,
            borderRadius: 10,
          }}
        >
          <Pressable onPress={() => setIsSignup(false)} style={{}}>
            <Text style={whiteText}>Login</Text>
          </Pressable>
          <Pressable onPress={() => setIsSignup(true)}>
            <Text style={whiteText}>Register</Text>
          </Pressable>
        </View>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          style={{
            marginTop: 30,
            width: 250,
            height: 45,
            borderRadius: 10,
            borderWidth: 1,
            paddingLeft: 10,
            borderBlockColor: "gray",
            borderColor: "white",
            color: "gray",
          }}
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder="Password"
          style={{
            marginTop: 20,
            width: 250,
            height: 45,
            borderRadius: 10,
            paddingLeft: 10,
            borderWidth: 1,
            borderBlockColor: "gray",
            borderColor: "white",
            color: "gray",
          }}
        />
        <Pressable
          style={{
            marginTop: 20,
            backgroundColor: "white",
            height: 45,
            width: 250,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            paddingBottom: 5,
          }}
          onPress={async () => {
            try {
              const response = await login({
                username,
                password,
              });

              if (response.success) {
                navigation.navigate("Home", { shopKeeperId: response.user });
              } else {
                alert("Invalid Login");
              }
            } catch (err) {
              alert("Invalid Credentials");
              console.log(err);
            }
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            Login Now
          </Text>
        </Pressable>
        <Text
          style={[
            whiteText,
            {
              marginTop: 30,
              marginBottom: 20,
            },
          ]}
        >
          OR LOGIN USING
        </Text>
        <Pressable
          style={{
            width: 250,
            height: 45,
            backgroundColor: "#101828",
            alignItems: "center",
            justifyContent: "center",
            borderBlockColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "white",
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              alignContent: "center",
              color: "white",
            }}
          >
            Sign in with Google
          </Text>
        </Pressable>
        <Text style={whiteText}>
          By logging in, you agree to SmartDukaan's Terms and Conditions.
        </Text>
      </View>
    </ScrollView>
  ) : (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#101828",
          // justifyContent: "center",
          alignItems: "center",
          padding: 50,
        }}
      >
        <Image
          source={require("../smartdukaanlogo.jpeg")}
          style={{
            width: 80,
            height: 80,
            borderRadius: 15,
          }}
        />
        <Text
          style={[
            whiteText,
            {
              alignContent: "center",
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 25,
            },
          ]}
        >
          Join as a
        </Text>
        <Text
          style={[
            whiteText,
            {
              alignContent: "center",
              fontWeight: "bold",
              fontSize: 25,
            },
          ]}
        >
          Shop Owner
        </Text>
        <Text style={whiteText}>Manage your shop with ease</Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 10,
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "white",
            width: 250,
            height: 45,
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <Pressable onPress={() => setIsSignup(false)} style={{}}>
            <Text style={whiteText}>Login</Text>
          </Pressable>
          <Pressable onPress={() => setIsSignup(true)}>
            <Text style={whiteText}>Register</Text>
          </Pressable>
        </View>
        <View>
          {registerInputs.map((item) => (
            <TextInput
              value={item.val}
              onChangeText={item.setFunc}
              key={item.key}
              placeholder={item.placeholder}
              style={registerStyle}
            />
          ))}
        </View>
        <Pressable
          style={{
            marginTop: 20,
            backgroundColor: "white",
            height: 45,
            width: 250,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            paddingBottom: 5,
          }}
          onPress={async () => {
            await signup({
              name,
              email,
              username,
              phoneNumber,
              password,
            });
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            Create Account
          </Text>
        </Pressable>
        <Text
          style={[
            whiteText,
            {
              marginTop: 30,
              marginBottom: 20,
            },
          ]}
        >
          OR LOGIN USING
        </Text>
        <Pressable
          style={{
            width: 250,
            height: 45,
            backgroundColor: "#101828",
            alignItems: "center",
            justifyContent: "center",
            borderBlockColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "white",
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              alignContent: "center",
              color: "white",
            }}
          >
            Sign in with Google
          </Text>
        </Pressable>
        <Text style={whiteText}>
          By logging in, you agree to SmartDukaan's Terms and Conditions.
        </Text>
      </View>
    </ScrollView>
  );
}
