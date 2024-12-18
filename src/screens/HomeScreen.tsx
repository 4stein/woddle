import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import TopBar from '../components/TopBar';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import CallToAction from '../components/CallToAction';
import Milestone from '../components/Milestone';
import {API} from '../utils/api';

// Main interface that defines the structure of data received from the backend
// Contains all necessary information for rendering the home screen components
interface IHomeScreenResponse {
  topBar: {
    logo: string; // App logo text
    avatar: number; // Reference to user's avatar image
  };
  slider: Array<{
    id: number; // Unique identifier for child profile
    name: string; // Child's full name
    age: string; // Child's age in "Xy Zm" format
    image: number; // Child's profile image reference
    icon: number; // Status or category icon reference
  }>;
  cards: Array<{
    id: string; // UUID for the card
    title: string; // Card type (Weight, Diaper, Feeding, Sleep)
    description1: string; // Primary measurement or status
    description2: string; // Secondary measurement or details
    isBigDescription1: boolean; // UI styling flag for description1
    isBigDescription2: boolean; // UI styling flag for description2
    bottomText: string; // Timestamp in relative or absolute format
    color: string; // Card's background color in HEX
  }>;
  callToAction: {
    image: number; // Marketing or feature highlight image
  };
  milestone: {
    title: string; // Section title
    description: string; // Current milestone period
    image: number; // Milestone illustration
    imageArrow: number; // Navigation arrow asset
  };
}

const HomeScreen = () => {
  // State for storing API response data
  const [data, setData] = useState<IHomeScreenResponse | null>(null);
  // Loading state for handling API request lifecycle
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetches initial data when component mounts
    const fetchData = async () => {
      // Makes GET request to local JSON Server
      // JSON Server is used as a mock backend for development
      const response = await API('/data');
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  // Main render with all child components
  return (
    <>
      {data && (
        <SafeAreaView style={styles.bg}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}>
            <TopBar data={data.topBar} />
            <Slider data={data.slider} />
            <Cards data={data.cards} />
            <CallToAction data={data.callToAction} />
            <Milestone data={data.milestone} />
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

// Styles for layout and container configuration
const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
