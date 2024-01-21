import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { image500 } from "../api/moviedb";

const { width, height } = Dimensions.get("window");

const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();

  function handleClick(item) {
    navigation.navigate("Movie", item);
  }

  return (
    <View className="mt-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
        data={data}
        renderItem={(item) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};
const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        // source={require("../assets/moviePoster1.png")}
        source={{ uri: image500(item.item.poster_path) }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
      />
    </TouchableWithoutFeedback>
  );
};
export default TrendingMovies;
