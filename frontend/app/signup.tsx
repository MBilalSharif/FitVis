import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  SafeAreaView 
} from 'react-native';
import { router } from 'expo-router';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Train smart. Move fast. Stay fit</Text>
        <Text style={styles.subheading}>
          Unlock personalized workouts, AI-powered coaching, 
          and real-time progress tracking.
        </Text>
      </View>

      {/* Login + Signup buttons */}
      <View style={styles.authButtons}>
        <TouchableOpacity 
          style={[styles.button, styles.loginButton]}
          onPress={() => router.push('/registration/login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.signupButton]}
          onPress={() => router.push('/registration/signUp')}
        >
          <Text style={[styles.buttonText, styles.signupButtonText]}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>

      {/* Social login */}
      <View style={styles.socialLogin}>
        <Text style={styles.socialText}>Or continue with</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image 
              // source={require('@/assets/images/Google-icon.png')} 
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image 
              // source={require('@/assets/images/Facebook-icon.png')} 
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // 👈 added so layout fills the screen
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  content: {
    marginTop: 120,
    marginLeft: 10,
    alignItems: 'flex-start', // 👈 replaced baseline
  },
  heading: {
    color: '#111',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 16,
    paddingLeft: 20,
  },
  subheading: {
    color: '#4B5563',
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 24,
    marginBottom: 120,
    paddingLeft: 20,
    paddingRight: 10,
  },
  authButtons: {
    width: '100%',
    marginBottom: 120,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 20,
    width: '70%',
    marginBottom: 12,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: '#2563EB',
  },
  signupButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2563EB',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  signupButtonText: {
    color: '#2563EB',
  },
  socialLogin: {
    alignItems: 'center',
  },
  socialText: {
    color: '#6B7280',
    marginBottom: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    padding: 18,
    marginHorizontal: 8,
    marginBottom: 26,
  },
  socialIcon: {
    width: 40,
    height: 24,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
