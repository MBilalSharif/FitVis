import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FAQScreen = () => {
  const faqItems = [
    { title: "About Sporter" },
    { title: "Getting Started with Sporter" },
    { title: "How can I share Sporter with my" },
    { title: "How can I reset my password?" },
    { title: "How can I change my email?" },
    { title: "How can I unsubscribe from emails?" },
    { title: "How can I adjust my calendar & notification settings?" },
    { title: "How can I make my profile private?" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>FAQS</Text>
        <View style={styles.emptySpace} />
      </View>

      {/* FAQ List */}
      <ScrollView style={styles.scrollView}>
        {faqItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.faqItem}>
            <Text style={styles.faqText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 40, // Adjust for status bar
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptySpace: {
    width: 24,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  faqItem: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f5f5f5',
  },
  faqText: {
    fontSize: 16,
    color: '#000',
  },
});

export default FAQScreen;