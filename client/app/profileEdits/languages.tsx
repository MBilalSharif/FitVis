import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English (USA)');
  const languages = [
    'English (USA)',
    'English (UK)',
    'Indonesia',
    'Espanol',
    'Francais',
    'Italiano',
    'Chinese',
    'Japanese'
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" style={styles.backIcon} />
        <Text style={styles.headerTitle}>Language Selection</Text>
        <View style={styles.emptySpace} />
      </View>

      {/* Language List */}
      <ScrollView style={styles.scrollContainer}>
        {languages.map((language, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.languageItem}
            onPress={() => setSelectedLanguage(language)}
          >
            <Text style={styles.languageText}>{language}</Text>
            {selectedLanguage === language && (
              <Ionicons name="checkmark" size={20} color="#007AFF" />
            )}
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
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
  },
  backIcon: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  emptySpace: {
    width: 24,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f5f5f5',
    marginBottom: 8,
  },
  languageText: {
    fontSize: 16,
    color: '#000',
  },
});

export default LanguageSelection;