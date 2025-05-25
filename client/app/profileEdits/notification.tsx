import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const NotificationSettings = () => {

interface NotificationItem {
    id: number;
    title: string;
    description: string;
    enabled: boolean;
}

const [notifications, setNotifications] = useState<NotificationItem[]>([
    { id: 1, title: "News", description: "Receive notification for news", enabled: true },
    { id: 2, title: "Promotion", description: "Receive notification for promotion", enabled: true },
    { id: 3, title: "Community", description: "Receive notification for community", enabled: false },
    { id: 4, title: "Telegram", description: "Get notified from Telegram chat", enabled: true },
    { id: 5, title: "Email", description: "Get notified from Email", enabled: false },
    { id: 6, title: "Whatsapp", description: "Get notified from Whatsapp", enabled: true },
]);

const toggleSwitch = (id: number): void => {
    setNotifications(notifications.map(item => 
        item.id === id ? { ...item, enabled: !item.enabled } : item
    ));
};

  return (
    <View style={styles.container}>
      {/* Simple header with back icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {notifications.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
            <Switch
              value={item.enabled}
              onValueChange={() => toggleSwitch(item.id)}
              trackColor={{ false: "#767577", true: "#34C759" }}
              thumbColor={item.enabled ? "#f4f3f4" : "#f4f3f4"}
            />
          </View>
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
    marginTop: 50, // Adjust for status bar
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backIcon: {
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default NotificationSettings;