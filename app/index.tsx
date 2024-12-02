import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [post, setPost] = useState<string>();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((get) => {
      setPost(get.data[0].title);
    });
  }, []);
  return (
    <View>
      <Text>{post}</Text>
    </View>
  );
}
