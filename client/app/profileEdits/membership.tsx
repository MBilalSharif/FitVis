import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MembershipCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Membership</Text>
      
      <View style={styles.planContainer}>
        <Text style={styles.planTitle}>Yearly plan</Text>
        <View style={styles.trialContainer}>
          <MaterialIcons name="check-circle" size={16} color="#4CAF50" />
          <Text style={styles.trialText}>Free 30 day trial • End March 2024</Text>
        </View>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.afterTrialContainer}>
        <Text style={styles.afterTrialTitle}>Your plan after free trial</Text>
        <Text style={styles.priceText}>$69.00/yr • Begins April 2024</Text>
      </View>
      
      <Text style={styles.infoText}>
        Your membership plan can roll over to your new plan after your trial ends. 
        <Text style={styles.learnMore}> Learn more</Text>
      </Text>
      
      <TouchableOpacity style={styles.manageButton}>
        <Text style={styles.manageButtonText}>Manage Membership</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancel Membership</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    marginTop: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    color: '#333',
  },
  planContainer: {
    marginBottom: 16,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  trialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trialText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 12,
  },
  afterTrialContainer: {
    marginBottom: 16,
  },
  afterTrialTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  learnMore: {
    color: '#1a73e8',
  },
  manageButton: {
    backgroundColor: '#1a73e8',
    padding: 12,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  manageButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  cancelButton: {
    padding: 12,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 8,
    borderColor: '#dadce0',
  },
  cancelButtonText: {
    color: '#1a73e8',
    fontWeight: '500',
  },
});

export default MembershipCard;