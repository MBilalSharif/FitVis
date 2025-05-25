import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../Component/header'; // Adjust the import path as necessary

const SmartWatchScreen = () => {
  const router = useRouter(); // Fix: assign useRouter() to router

  // Connected watch data
  const connectedWatch = {
    name: 'Smart Watch A89',
    status: 'Not Connected',
    battery: '100%',
    metrics: [
      { title: 'Burning Mode', value: '00', unit: 'Kcal' },
      { title: 'Sleep Taken', value: '00', unit: 'hrs' },
      { title: 'Heart rate', value: '00', unit: 'Bpm' }
    ]
  };

  // Available watches data
  const availableWatches = [
    { id: '1', name: 'Watch A89', image: require('@/assets/images/watch.png') },
    { id: '2', name: 'Watch B12', image: require('@/assets/images/watch.png') },
    { id: '3', name: 'Watch C34', image: require('@/assets/images/watch.png') },
    { id: '4', name: 'Watch D56', image: require('@/assets/images/watch.png') },
  ];

  type Watch = {
    id: string;
    name: string;
    image: any;
  };

  const renderWatchCard = ({ item }: { item: Watch }) => (
    <TouchableOpacity style={styles.watchCard}>
      <Image source={item.image} style={styles.watchImage} />
      <Text style={styles.watchName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Header
        userName="John Doe"
        showBackButton={true}
        onBackPress={() => router.back()}
        disableProfile={true} // Set to false if you want clickable profile icon
        showUserName={false} // Hide username if you want just the back button  
      />

      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Connected Watch Section */}
          <View style={styles.connectedWatchContainer}>
            <Text style={styles.connectedWatchName}>{connectedWatch.name}</Text>
            
            <View style={styles.statusContainer}>
              <Text style={[styles.statusText, { color: connectedWatch.status === 'Connected' ? '#4CAF50' : '#F44336' }]}>
                {connectedWatch.status}
              </Text>
              <View style={styles.batteryContainer}>
                <Text style={styles.batteryText}>{connectedWatch.battery}</Text>
                <View style={styles.batteryIcon} />
              </View>
            </View>

            <TouchableOpacity style={styles.connectButton}>
              <Text style={styles.connectButtonText}>Connect Now</Text>
            </TouchableOpacity>
          </View>

          {/* Large Watch Image */}
          <View style={styles.watchImageContainer}>
            <Image 
              source={require('@/assets/images/watch.png')} 
              style={styles.largeWatchImage} 
              resizeMode="contain"
            />
          </View>

          {/* Metrics Row */}
          <View style={styles.metricsContainer}>
            {connectedWatch.metrics.map((metric, index) => (
              <View key={index} style={styles.metricCard}>
                <Text style={styles.metricTitle}>{metric.title}</Text>
                <Text style={styles.metricValue}>{metric.value}</Text>
                <Text style={styles.metricUnit}>{metric.unit}</Text>
              </View>
            ))}
          </View>

          {/* Available Watches Section */}
          <Text style={styles.sectionTitle}>Available Watches</Text>
          <FlatList
            data={availableWatches}
            renderItem={renderWatchCard}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.watchesList}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  connectedWatchContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  connectedWatchName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 20,
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryText: {
    fontSize: 16,
    color: '#4CAF50',
    marginRight: 5,
  },
  batteryIcon: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 2,
    padding: 2,
  },
  connectButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 25,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  watchImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  largeWatchImage: {
    width: 250,
    height: 250,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  metricCard: {
    alignItems: 'center',
    flex: 1,
  },
  metricTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  metricUnit: {
    fontSize: 12,
    color: '#999',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    marginLeft: 8,
  },
  watchesList: {
    paddingHorizontal: 8,
  },
  watchCard: {
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  watchImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  watchName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});

export default SmartWatchScreen;