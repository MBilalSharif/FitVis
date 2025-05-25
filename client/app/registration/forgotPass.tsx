import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>
          Don't worry if correct. Please note the email address is okay with your account.
        </Text>
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Divider
      <View style={styles.divider} /> */}

      {/* Action Buttons */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Send Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Cancel</Text>
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
  header: {
    marginTop: 140,
    marginBottom: 32,

    padding: 26,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    
  },
  inputContainer: {
    marginBottom: 24,
    padding:26,
  },
  inputLabel: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  input: {
    height: 56,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgb(28, 41, 67)',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#F9FAFB',
  },
//   divider: {
//     height: 1,
//     backgroundColor: '#E5E7EB',
//     marginVertical: 24,
//   },
  primaryButton: {
    marginTop: 24,
    height: 56,
    alignSelf: 'center',
    width: '80%',

    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secondaryButton: {
    height: 56,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'rgba(81, 129, 232, 0.1)',
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2563EB',
  },
});

export default ForgotPasswordScreen;