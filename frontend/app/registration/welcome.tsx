import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function HomeScreen() {
    const router = useRouter();

    const handleNext = () => {
        router.push({
            pathname: '/signup',
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#4CAF50" />

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>FitVis</Text>
                    <Text style={styles.subtitle}>Boost Your Health with FitVis!</Text>
                </View>

                {/* Hero Section */}
                <View style={styles.heroSection}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
                        }}
                        style={styles.heroImage}
                    />
                    <View style={styles.heroOverlay}>
                        <Text style={styles.heroTitle}>
                            Kickstart your wellness journey with FitVis!
                        </Text>
                        <Text style={styles.heroText}>
                            It's your go-to buddy for all things nutrition, exercise, and meal planning!
                        </Text>
                    </View>
                </View>

                {/* Features Grid */}
                <View style={styles.featuresContainer}>
                    <Text style={styles.sectionTitle}>What We Offer</Text>

                    <View style={styles.featuresGrid}>
                        {/* Nutrition Feature */}
                        <View style={styles.featureCard}>
                            <View style={[styles.featureIcon, { backgroundColor: '#E8F5E8' }]}>
                                <Ionicons name="nutrition" size={32} color="#4CAF50" />
                            </View>
                            <Text style={styles.featureTitle}>Nutrition Tracking</Text>
                            <Text style={styles.featureDescription}>
                                Track your calories and macros with our smart food diary
                            </Text>
                        </View>

                        {/* Exercise Feature */}
                        <View style={styles.featureCard}>
                            <View style={[styles.featureIcon, { backgroundColor: '#E3F2FD' }]}>
                                <Ionicons name="fitness" size={32} color="#2196F3" />
                            </View>
                            <Text style={styles.featureTitle}>Workout Plans</Text>
                            <Text style={styles.featureDescription}>
                                Personalized exercise routines for all fitness levels
                            </Text>
                        </View>

                        {/* Meal Planning Feature */}
                        <View style={styles.featureCard}>
                            <View style={[styles.featureIcon, { backgroundColor: '#FFF3E0' }]}>
                                <Ionicons name="restaurant" size={32} color="#FF9800" />
                            </View>
                            <Text style={styles.featureTitle}>Meal Planning</Text>
                            <Text style={styles.featureDescription}>
                                Create delicious meal plans that fit your dietary needs
                            </Text>
                        </View>

                        {/* Progress Feature */}
                        <View style={styles.featureCard}>
                            <View style={[styles.featureIcon, { backgroundColor: '#F3E5F5' }]}>
                                <Ionicons name="trending-up" size={32} color="#9C27B0" />
                            </View>
                            <Text style={styles.featureTitle}>Progress Tracking</Text>
                            <Text style={styles.featureDescription}>
                                Monitor your journey with detailed analytics and insights
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Get Started Button */}
                <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={handleNext} // or your handler
                >
                    <Text style={styles.getStartedText}>Get Started</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                </TouchableOpacity>


                {/* Quick Stats */}
                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>10K+</Text>
                        <Text style={styles.statLabel}>Active Users</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>50+</Text>
                        <Text style={styles.statLabel}>Workout Plans</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>1M+</Text>
                        <Text style={styles.statLabel}>Meals Tracked</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4CAF50',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 4,
    },
    heroSection: {
        margin: 16,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
    },
    heroImage: {
        width: '100%',
        height: 200,
    },
    heroOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        padding: 20,
    },
    heroTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    heroText: {
        fontSize: 14,
        color: '#fff',
        lineHeight: 20,
    },
    featuresContainer: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        textAlign: 'center',
    },
    featuresGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    featureCard: {
        width: '48%',
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
    },
    featureIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 8,
    },
    featureDescription: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        lineHeight: 16,
    },
    getStartedButton: {
        backgroundColor: '#4CAF50',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 25,
        margin: 16,
        marginTop: 8,
    },
    getStartedText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 8,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        marginTop: 16,
        backgroundColor: '#f8f9fa',
        margin: 16,
        borderRadius: 12,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
});