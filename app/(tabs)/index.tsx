import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";

import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrendingCard from "@/components/TrendingCard";

const Index = () => {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  // Header component for the FlatList
  const ListHeaderComponent = () => (
    <>
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

      <View className="flex-1 mt-5">
        <SearchBar
          onPress={() => {
            router.push("/search");
          }}
          placeholder="Search for a movie"
        />

        {trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : trendingError ? (
          <Text className="text-white">Error: {trendingError?.message}</Text>
        ) : trendingMovies && trendingMovies.length > 0 ? (
          <View className="mt-10">
            <Text className="text-lg text-white font-bold mb-3">
              Trending Movies
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-4 mt-3"
              data={trendingMovies}
              contentContainerStyle={{
                gap: 26,
              }}
              renderItem={({ item, index }) => (
                <TrendingCard movie={item} index={index} />
              )}
              keyExtractor={(item, index) =>
                `trending-${item.movie_id}-${index}`
              }
              ItemSeparatorComponent={() => <View className="w-4" />}
            />
          </View>
        ) : null}

        <Text className="text-lg text-white font-bold mt-5 mb-3">
          Latest Movies
        </Text>
      </View>
    </>
  );

  // Show loading state for movies
  if (moviesLoading) {
    return (
      <View className="flex-1 bg-primary items-center justify-center">
        <Image
          source={images.bg}
          className="absolute w-full z-0"
          resizeMode="cover"
        />
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Show error state for movies
  if (moviesError) {
    return (
      <View className="flex-1 bg-primary items-center justify-center px-5">
        <Image
          source={images.bg}
          className="absolute w-full z-0"
          resizeMode="cover"
        />
        <Text className="text-white text-center">
          Error loading movies: {moviesError.message}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies || []}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item, index) => `movie-${item.id}-${index}`}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 100,
        }}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Index;