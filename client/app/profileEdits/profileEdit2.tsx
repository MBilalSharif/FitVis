import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditableProfileScreen = () => {
  // Profile data state
  const [profileData, setProfileData] = useState({
    fullName: 'John Mobby',
    email: 'john@example.com',
    phone: '+658069702',
    username: 'John001',
    location: 'New York, USA',
    birthday: 'March 23, 1996',
    height: '183.0 cm',
    weight: '73.0 kg',
    gender: 'Male'
  });

  // Editing state
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState('');

  // Handle edit button press
  const handleEditPress = (field: string) => {
    setEditingField(field);
    setTempValue(profileData[field as keyof typeof profileData]);
  };

  // Save edited value
  const handleSave = () => {
    if (editingField) {
      setProfileData(prev => ({
        ...prev,
        [editingField]: tempValue
      }));
      setEditingField(null);
    }
  };

  // Profile info item component
  const ProfileInfoItem = ({ label, field }: { label: string, field: keyof typeof profileData }) => (
    <TouchableOpacity 
      style={styles.infoItem}
      onPress={() => handleEditPress(field)}
    >
      <View>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{profileData[field]}</Text>
      </View>
      <Ionicons name="create-outline" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {/* Profile Photo Section */}
        <View style={styles.photoSection}>
          <TouchableOpacity style={styles.avatarContainer}>
            <Ionicons name="person" size={80} color="#2563EB" />
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Information */}
        <View style={styles.infoContainer}>
          <ProfileInfoItem label="Full Name" field="fullName" />
          <ProfileInfoItem label="Email" field="email" />
          <ProfileInfoItem label="Phone number" field="phone" />
          <ProfileInfoItem label="Username" field="username" />
          <ProfileInfoItem label="Location" field="location" />
          <ProfileInfoItem label="Birthday" field="birthday" />
          <ProfileInfoItem label="Height" field="height" />
          <ProfileInfoItem label="Weight" field="weight" />
          <ProfileInfoItem label="Gender" field="gender" />
          
          {/* Password Section */}
          <TouchableOpacity style={styles.passwordSection}>
            <Text style={styles.passwordLabel}>Password</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Edit Modal */}
      <Modal
        visible={!!editingField}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit {editingField}</Text>
            <TextInput
              style={styles.modalInput}
              value={tempValue}
              onChangeText={setTempValue}
              autoFocus={true}
            />
            <View style={styles.modalButtons}>
              <Pressable 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setEditingField(null)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
              <Pressable 
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleSave}
              >
                <Text style={styles.buttonText}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
  },
  photoSection: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  avatarContainer: {
    alignItems: 'center',
  },
  changePhotoText: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
  },
  infoContainer: {
    paddingHorizontal: 16,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  infoLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  passwordSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  passwordLabel: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: '#E5E7EB',
  },
  saveButton: {
    backgroundColor: '#2563EB',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
});

export default EditableProfileScreen;