import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { 
  View, Text, TouchableOpacity, StyleSheet,
  TextInput, Modal 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter, useLocalSearchParams } from 'expo-router';

const CompleteProfileScreen = () => {
  const router = useRouter();
  const { name, email, password, role } = useLocalSearchParams();

  const [dateOfBirth, setDateOfBirth] = useState('');
  const [workoutActivity, setWorkoutActivity] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [showGenderPicker, setShowGenderPicker] = useState(false);

  const handleNext = () => {
    if (!gender || !dateOfBirth || !weight || !height || !workoutActivity) return;

    router.push({
      pathname: '/registration/goalSelection',
      params: {
        name,
        email,
        password,
        role,
        gender,
        dateOfBirth,
        weight,
        height,
        workoutActivity,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Let's complete your profile</Text>
        
        {/* Gender Dropdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Gender</Text>
          <TouchableOpacity 
            style={styles.dropdownButton}
            onPress={() => setShowGenderPicker(true)}
          >
            <Text style={gender ? styles.dropdownButtonText : styles.dropdownPlaceholder}>
              {gender || 'Select gender'}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>

          <Modal visible={showGenderPicker} transparent animationType="slide">
            <View style={styles.modalOverlay}>
              <View style={styles.pickerContainer}>
                <TouchableOpacity 
                  style={styles.doneButton}
                  onPress={() => setShowGenderPicker(false)}
                >
                  <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
                <Picker
                  selectedValue={gender}
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  onValueChange={(itemValue) => setGender(itemValue)}
                >
                  <Picker.Item label="Select gender" value="" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Other" value="Other" />
                  <Picker.Item label="Prefer not to say" value="Prefer not to say" />
                </Picker>
              </View>
            </View>
          </Modal>
        </View>

        {/* DOB */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/DD/YYYY"
            placeholderTextColor="#9CA3AF"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />
        </View>

        {/* Workout Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Workout Activity</Text>
          <TextInput
            style={styles.input}
            placeholder="Select your activity level"
            placeholderTextColor="#9CA3AF"
            value={workoutActivity}
            onChangeText={setWorkoutActivity}
          />
        </View>

        {/* Weight */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weight</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter weight (kg)"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </View>

        {/* Height */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Height</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter height (cm)"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
        </View>
      </View>

      {/* Next */}
      <TouchableOpacity 
        style={[
          styles.nextButton,
          (!gender || !dateOfBirth || !workoutActivity || !weight || !height) && styles.disabledButton
        ]} 
        disabled={!gender || !dateOfBirth || !workoutActivity || !weight || !height}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 24 },
  backButton: { marginTop: 6, marginBottom: 4, padding: 8, alignSelf: 'flex-start' },
  backButtonText: { fontSize: 24, color: '#2563EB' },
  content: { marginLeft: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#111827', marginBottom: 22 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 12 },
  dropdownButton: {
    height: 56, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12,
    paddingHorizontal: 16, justifyContent: 'center', backgroundColor: '#F9FAFB',
    flexDirection: 'row', alignItems: 'center',
  },
  dropdownButtonText: { flex: 1, fontSize: 16, color: '#111827' },
  dropdownPlaceholder: { flex: 1, fontSize: 16, color: '#9CA3AF' },
  dropdownArrow: { fontSize: 12, color: '#6B7280' },
  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  pickerContainer: { backgroundColor: 'white', borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingBottom: 20 },
  doneButton: { padding: 16, alignItems: 'flex-end' },
  doneButtonText: { color: '#2563EB', fontSize: 16, fontWeight: '600' },
  picker: { width: '100%' },
  pickerItem: { fontSize: 18, color: '#111827' },
  input: {
    height: 56, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 20,
    paddingHorizontal: 16, fontSize: 16, color: '#111827', backgroundColor: '#F9FAFB',
  },
  nextButton: {
    height: 56, width: '90%', alignSelf: 'center', backgroundColor: '#2563EB',
    borderRadius: 22, justifyContent: 'center', alignItems: 'center', marginBottom: 40,
  },
  disabledButton: { backgroundColor: '#E5E7EB' },
  nextButtonText: { fontSize: 16, fontWeight: '600', color: '#FFFFFF' },
});

export default CompleteProfileScreen;
