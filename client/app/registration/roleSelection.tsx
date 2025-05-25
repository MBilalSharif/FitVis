import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

const RoleSelectionScreen = () => {
  const router = useRouter();
  const { name, email, password } = useLocalSearchParams();
  console.log('Received params:', name, email, password);

  // Proper state initialization
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const handleContinue = async () => {
    if (!selectedRole) return;

    console.log('Selected role:', selectedRole);
    try {
      const response = await fetch('http://192.168.176.1:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role: selectedRole }),
      });

      const data = await response.json();
      console.log('Registration response:', data);

      if (response.ok) {
      alert('Registration successful!');
      console.log('Navigating to login...');
      router.push('/registration/login');
      }else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/registration/signUp')} // Navigates to Sign Up screen
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>


      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Let's get to know you better</Text>
        <Text style={styles.subtitle}>Choose your role to customize your experience</Text>

        {/* Role Selection */}
        <View style={styles.roleContainer}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              selectedRole === 'user' && styles.selectedRole
            ]}
            onPress={() => setSelectedRole('user')} // Now properly typed
          >
            <Text style={styles.roleText}>I'm User</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleButton,
              selectedRole === 'trainer' && styles.selectedRole
            ]}
            onPress={() => setSelectedRole('trainer')} // Now properly typed
          >
            <Text style={styles.roleText}>I'm Trainer</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedRole && styles.disabledButton
        ]}
        onPress={handleContinue}
        disabled={!selectedRole}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  backButton: {
    marginTop: 16,
    marginBottom: 24,
    padding: 8,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 24,
    color: '#2563EB',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 48,
  },
  roleContainer: {
    marginBottom: 32,
  },
  roleButton: {
    height: 60,
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
  },
  selectedRole: {
    borderColor: '#2563EB',
    backgroundColor: '#EFF6FF',
  },
  roleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  continueButton: {
    height: 56,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  disabledButton: {
    backgroundColor: '#E5E7EB',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default RoleSelectionScreen;