import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const profile = () => {
  const stats = [
    { label: "Watched", value: "127" },
    { label: "Favorites", value: "45" },
    { label: "Reviews", value: "23" },
  ];

  const menuItems = [
    { icon: icons.save, label: "Saved Movies", action: "saved" },
    { icon: icons.person, label: "Edit Profile", action: "edit" },
    { icon: icons.search, label: "Watch History", action: "history" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full h-full z-0"
        resizeMode="cover"
      />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="items-center mt-10 px-5">
          <Image source={icons.logo} className="w-12 h-10 mb-8" />

          {/* Profile Picture */}
          <View className="relative">
            <View className="w-28 h-28 rounded-full bg-dark-100 items-center justify-center border-4 border-accent">
              <Image
                source={icons.person}
                className="w-16 h-16"
                tintColor="#A8B5DB"
              />
            </View>
            <View className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-accent items-center justify-center border-2 border-primary">
              <Text className="text-white text-xs font-bold">✓</Text>
            </View>
          </View>

          {/* User Info */}
          <Text className="text-white text-2xl font-bold mt-4">
            Example User
          </Text>
          <Text className="text-light-200 text-sm mt-1">
            @ExampleUser
          </Text>
          <Text className="text-light-300 text-center text-xs mt-3 px-8">
            Movie enthusiast | Binge watcher | Popcorn lover 🍿
          </Text>
        </View>

        {/* Stats */}
        <View className="flex-row justify-around mt-8 mx-5 bg-dark-100 rounded-2xl py-5 px-3">
          {stats.map((stat, index) => (
            <View key={index} className="items-center flex-1">
              <Text className="text-white text-2xl font-bold">
                {stat.value}
              </Text>
              <Text className="text-light-200 text-xs mt-1">{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Menu Items */}
        <View className="mt-8 mx-5">
          <Text className="text-white text-lg font-bold mb-4">Settings</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between bg-dark-100 rounded-xl px-5 py-4 mb-3"
              activeOpacity={0.7}
            >
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-full bg-primary items-center justify-center">
                  <Image
                    source={item.icon}
                    className="w-5 h-5"
                    tintColor="#A8B5DB"
                  />
                </View>
                <Text className="text-white text-base font-semibold ml-4">
                  {item.label}
                </Text>
              </View>
              <Image
                source={icons.arrow}
                className="w-5 h-5"
                tintColor="#A8B5DB"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Additional Options */}
        <View className="mt-6 mx-5">
          <Text className="text-white text-lg font-bold mb-4">More</Text>
          
          <TouchableOpacity
            className="bg-dark-100 rounded-xl px-5 py-4 mb-3"
            activeOpacity={0.7}
          >
            <Text className="text-white text-base font-semibold">
              Notifications
            </Text>
            <Text className="text-light-300 text-xs mt-1">
              Manage your notification preferences
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-dark-100 rounded-xl px-5 py-4 mb-3"
            activeOpacity={0.7}
          >
            <Text className="text-white text-base font-semibold">
              Privacy & Security
            </Text>
            <Text className="text-light-300 text-xs mt-1">
              Control your privacy settings
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-dark-100 rounded-xl px-5 py-4 mb-3"
            activeOpacity={0.7}
          >
            <Text className="text-white text-base font-semibold">About</Text>
            <Text className="text-light-300 text-xs mt-1">
              App version 1.0.0
            </Text>
          </TouchableOpacity>

          {/* Logout Button */}
          <TouchableOpacity
            className="bg-accent rounded-xl px-5 py-4 mt-4 items-center"
            activeOpacity={0.8}
          >
            <Text className="text-white text-base font-bold">Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;