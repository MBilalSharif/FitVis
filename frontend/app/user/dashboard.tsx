// app/dashboard/index.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

// ---------------------- TrainerCard Component ----------------------
const TrainerCard = ({ item, index }: { item: any; index: number }) => {
  const cardAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(cardAnim, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.trainerCard,
        {
          opacity: cardAnim,
          transform: [
            {
              translateY: cardAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.trainerCardContent}
        onPress={() => router.push('/user/trainer/trainer')}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.trainerImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.3)']}
            style={styles.imageGradient}
          />
        </View>

        <View style={styles.trainerInfo}>
          <Text style={styles.trainerName}>{item.name}</Text>
          <Text style={styles.trainerRate}>{item.rate}</Text>
          <View style={styles.specialtyBadge}>
            <Text style={styles.trainerSpecialty}>{item.specialty}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

// ---------------------- DashboardScreen ----------------------
const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('All Type');
  const [pressedTab, setPressedTab] = useState<string | null>(null);

  // Animation values
  const fadeAnim = useState(new Animated.Value(0))[0];
  const slideAnim = useState(new Animated.Value(50))[0];
  const scaleAnim = useState(new Animated.Value(0.9))[0];

  // Trainer data
  const trainersData = [
    { id: 1, name: "Brendan Taylor", rate: "$15/hr", specialty: "Gym",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face" },
    { id: 2, name: "Sarah Johnson", rate: "$18/hr", specialty: "Yoga",
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=400&fit=crop&crop=face" },
    { id: 3, name: "Mike Rodriguez", rate: "$20/hr", specialty: "Athletic",
      image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=400&h=400&fit=crop&crop=face" },
    { id: 4, name: "Lisa Chen", rate: "$16/hr", specialty: "Yoga",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=face" },
    { id: 5, name: "David Wilson", rate: "$22/hr", specialty: "Gym",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop&crop=face" },
    { id: 6, name: "Emma Davis", rate: "$19/hr", specialty: "Athletic",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face" },
  ];

  const assignedTrainer = {
    id: 8,
    name: "Rodolfo Goode",
    role: "My Assigned Trainer",
    rate: "$25/hr",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face",
    experience: "5+ years",
    rating: "4.9"
  };

  // Animate header + main sections
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleTabPress = (tabName: string) => {
    setPressedTab(tabName);

    // little scale animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      setPressedTab(null);
      setActiveTab(tabName);
    }, 150);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Animated.View 
        style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
      >
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.date}>Monday, 26 May</Text>
            <Text style={styles.greeting}>Good Afternoon! 👋</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Assigned Trainer */}
      <Animated.View
        style={[
          styles.assignedTrainerCard,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }, { scale: scaleAnim }] },
        ]}
      >
        <LinearGradient colors={['#667eea', '#764ba2']} style={styles.trainerGradient}>
          <View style={styles.assignedTrainerContent}>
            <View style={styles.assignedTrainerInfo}>
              <Text style={styles.assignedTrainerRole}>{assignedTrainer.role}</Text>
              <Text style={styles.assignedTrainerName}>{assignedTrainer.name}</Text>
              <View style={styles.trainerStats}>
                <View style={styles.stat}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.statText}>{assignedTrainer.rating}</Text>
                </View>
                <View style={styles.stat}>
                  <Ionicons name="time" size={16} color="#fff" />
                  <Text style={styles.statText}>{assignedTrainer.experience}</Text>
                </View>
              </View>
              <Text style={styles.assignedTrainerRate}>{assignedTrainer.rate}</Text>
              <TouchableOpacity
                style={styles.profileButton}
                onPress={() => router.push('/user/trainer/trainer')}
              >
                <Text style={styles.profileButtonText}>View Profile</Text>
                <Ionicons name="arrow-forward" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.assignedTrainerImageContainer}>
              <Image source={{ uri: assignedTrainer.image }} style={styles.assignedTrainerImage} />
              <View style={styles.onlineIndicator} />
            </View>
          </View>
        </LinearGradient>
      </Animated.View>

      {/* Trainers Section */}
      <Animated.View
        style={[styles.trainersSection, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
      >
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Available Trainers</Text>
            <Text style={styles.sectionSubtitle}>Find your perfect fitness coach</Text>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsLink}>View All</Text>
            <Ionicons name="chevron-forward" size={16} color="#007AFF" />
          </TouchableOpacity>
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterTabs}>
          {['All Type', 'Gym', 'Yoga', 'Athletic'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab, pressedTab === tab && styles.pressedTab]}
              onPress={() => handleTabPress(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput style={styles.searchInput} placeholder="Search trainers..." placeholderTextColor="#999" />
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Trainers Grid */}
        <FlatList
          data={trainersData}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.trainersGrid}
          renderItem={({ item, index }) => <TrainerCard item={item} index={index} />}
          contentContainerStyle={styles.trainersList}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </View>
  );
};

// ---------------------- Styles ----------------------
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc', paddingHorizontal: 20 },
  header: { marginTop: 60, marginBottom: 20 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  date: { fontSize: 14, color: '#666' },
  greeting: { fontSize: 28, fontWeight: 'bold', marginTop: 4, color: '#1a202c' },
  notificationButton: { padding: 8, position: 'relative' },
  notificationDot: { position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: 4, backgroundColor: '#ff4757' },
  assignedTrainerCard: { borderRadius: 20, marginBottom: 24, elevation: 10 },
  trainerGradient: { borderRadius: 20, padding: 20 },
  assignedTrainerContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  assignedTrainerInfo: { flex: 1 },
  assignedTrainerRole: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: 4 },
  assignedTrainerName: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 12 },
  trainerStats: { flexDirection: 'row', marginBottom: 12 },
  stat: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  statText: { color: '#fff', marginLeft: 4, fontSize: 12 },
  assignedTrainerRate: { fontSize: 18, fontWeight: '600', color: '#fff', marginBottom: 16 },
  assignedTrainerImageContainer: { position: 'relative' },
  assignedTrainerImage: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: 'rgba(255,255,255,0.3)' },
  onlineIndicator: { position: 'absolute', bottom: 8, right: 8, width: 16, height: 16, borderRadius: 8, backgroundColor: '#4ade80', borderWidth: 2, borderColor: '#fff' },
  profileButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, alignSelf: 'flex-start' },
  profileButtonText: { color: '#fff', fontWeight: '500', marginRight: 4 },
  trainersSection: { flex: 1 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#1a202c' },
  sectionSubtitle: { fontSize: 14, color: '#666', marginTop: 4 },
  detailsButton: { flexDirection: 'row', alignItems: 'center' },
  detailsLink: { color: '#007AFF', fontWeight: '500', marginRight: 2 },
  filterTabs: { flexDirection: 'row', marginBottom: 20, backgroundColor: '#fff', borderRadius: 12, padding: 4, elevation: 2 },
  tab: { flex: 1, paddingVertical: 10, paddingHorizontal: 8, borderRadius: 10, alignItems: 'center' },
  activeTab: { backgroundColor: '#007AFF' },
  pressedTab: { backgroundColor: '#e3f2fd', transform: [{ scale: 0.95 }] },
  tabText: { color: '#666', fontWeight: '500', fontSize: 12 },
  activeTabText: { color: '#fff', fontWeight: '600' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, marginBottom: 20, elevation: 2 },
  searchInput: { flex: 1, marginLeft: 12, fontSize: 16, color: '#333' },
  filterButton: { padding: 4 },
  trainersList: { paddingBottom: 30 },
  trainersGrid: { justifyContent: 'space-between', marginBottom: 16 },
  trainerCard: { width: '48%', borderRadius: 16, backgroundColor: '#fff', elevation: 4, marginBottom: 16 },
  trainerCardContent: { borderRadius: 16, overflow: 'hidden' },
  imageContainer: { position: 'relative', height: 140 },
  trainerImage: { width: '100%', height: '100%' },
  imageGradient: { position: 'absolute', left: 0, right: 0, bottom: 0, height: '50%' },
  trainerInfo: { padding: 12 },
  trainerName: { fontSize: 14, fontWeight: 'bold', color: '#1a202c', marginBottom: 4 },
  trainerRate: { fontSize: 16, fontWeight: '600', color: '#007AFF', marginBottom: 8 },
  specialtyBadge: { backgroundColor: '#f1f5f9', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, alignSelf: 'flex-start' },
  trainerSpecialty: { fontSize: 10, color: '#475569', fontWeight: '500' },
});

export default DashboardScreen;
