import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

 const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Please fill in all fields');
    return;
  }

  try {
    setLoading(true);
    const response = await axios.post('http://192.168.176.1:5000/api/auth/login', {
      email,
      password
    });

    console.log('Login response:', response.data);

    router.push('/(tabs)');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      Alert.alert('Error', error.response?.data?.message || 'Network error. Please try again.');
      console.log(error)
    } else {
      Alert.alert('Error', 'An unexpected error occurred');
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image 
            source={require('@/assets/images/backIcon.png')} 
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Login to continue using the app</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity 
          style={[styles.loginButton, loading && styles.disabledButton]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'Logging in...' : 'Login'}
          </Text>
        </TouchableOpacity>

        
        <TouchableOpacity 
          onPress={() => router.push('/registration/forgotPass')}
          style={styles.forgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 10,
    paddingBottom: 24,
  },
  backIcon: {
    marginLeft: 10,
    width: 34,
    height: 54,
    marginBottom: 30,
  },
  content: {
    justifyContent: 'center',
    padding:38,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    height: 56,
    width: '90%',
    borderWidth: 1,
    margin: 10,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#F9FAFB',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 20,
    marginTop: 16,
  },
  disabledButton: {
    backgroundColor: '#93C5FD',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  forgotPassword: {
    alignSelf: 'center',
    marginTop: 12,
  },
  forgotPasswordText: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LoginScreen;