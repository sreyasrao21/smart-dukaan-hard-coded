import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function homescreen({ navigation, route }: any) {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await getProducts(route.params.shopKeeperId);
      if (response.success) {
        setProducts(response.products);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 24,
          backgroundColor: "gray",
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 18,
            }}
          >
            SDukaan
          </Text>
        </View>
      </View>
      <ScrollView>
        {products.map((item: any) => (
          <View
            key={item._id}
            style={{
              backgroundColor: "yellow",
              margin: 10,
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text>{item.icon}</Text>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.stock}</Text>
          </View>
        ))}
      </ScrollView>
      <View>
        <Text>This is the footer</Text>
      </View>
    </View>
  );
}
