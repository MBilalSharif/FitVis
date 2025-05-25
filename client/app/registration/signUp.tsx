// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
// import { useRouter } from 'expo-router';


// const SignUpScreen = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });


//   const handleInputChange = (name: string, value: string) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

// const handleSignUp = () => {
//   const { firstName, lastName, email, password, confirmPassword } = formData;

//   if (password !== confirmPassword) {
//     alert('Passwords do not match');
//     return;
//   }

//   const name = `${firstName} ${lastName}`;

//   router.push({
//     pathname: '/registration/roleSelection',
//     params: { name, email, password }, // pass form data
//   });
// };



//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header with Back Button */}
//       <TouchableOpacity 
//         style={styles.backButton} 
//         onPress={() => router.push('/registration/registration1')} // Navigates to Registration screen
//       >
//         <Text style={styles.backButtonText}>←</Text>
//       </TouchableOpacity>

//       {/* Main Content */}
//       <View style={styles.content}>
//         <Text style={styles.title}>Register</Text>
//         <Text style={styles.subtitle}>Get started by entering your Personal Information</Text>

//         {/* Name Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Name</Text>
          
//           <View style={styles.nameContainer}>
//             <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
//               <Text style={styles.inputLabel}>First name</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.firstName}
//                 onChangeText={(text) => handleInputChange('firstName', text)}
//                 placeholder="First name"
//                 placeholderTextColor="#9CA3AF"
//               />
//             </View>
            
//             <View style={[styles.inputContainer, { flex: 1, marginLeft: 8 }]}>
//               <Text style={styles.inputLabel}>Last name</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.lastName}
//                 onChangeText={(text) => handleInputChange('lastName', text)}
//                 placeholder="Last name"
//                 placeholderTextColor="#9CA3AF"
//               />
//             </View>
//           </View>
//         </View>

//         {/* Email Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Email</Text>
//           <TextInput
//             style={styles.input}
//             value={formData.email}
//             onChangeText={(text) => handleInputChange('email', text)}
//             placeholder="Enter email"
//             placeholderTextColor="#9CA3AF"
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//         {/* Password Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Password</Text>
//           <TextInput
//             style={styles.input}
//             value={formData.password}
//             onChangeText={(text) => handleInputChange('password', text)}
//             placeholder="Enter password"
//             placeholderTextColor="#9CA3AF"
//             secureTextEntry={true}
//           />
//         </View>

//         {/* Confirm Password Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Confirm Password</Text>
//           <TextInput
//             style={styles.input}
//             value={formData.confirmPassword}
//             onChangeText={(text) => handleInputChange('confirmPassword', text)}
//             placeholder="Renter password"
//             placeholderTextColor="#9CA3AF"
//             secureTextEntry={true}
//           />
//         </View>

//         {/* Sign Up Button */}
//         <TouchableOpacity 
//           style={styles.signUpButton}
//           onPress={handleSignUp} // Example destination
//         >
//           <Text style={styles.signUpButtonText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
    
//     // flex: 1,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 24,
//   },
//   backButton: {
//     marginTop: 16,
//     marginBottom: 2,
//     padding: 8,
//     alignSelf: 'flex-start',
//   },
//   backButtonText: {
//     fontSize: 24,
//     color: '#2563EB',
//   },
//   content: {
//     // flex: 1,
//     padding: 18,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 6,
//   },
//   subtitle: {
//     fontWeight:"bold",
//     fontSize: 16,
//     color: '#6B7280',
//     marginBottom: 32,
//   },
//   section: {
//     marginBottom: 24,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#374151',
//     marginBottom: 8,
//   },
//   nameContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   inputContainer: {
//     marginBottom: 16,
//   },
//   inputLabel: {
//     fontSize: 12,
//     color: '#6B7280',
//     marginBottom: 4,
//   },
//   input: {
//     height: 56,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     fontSize: 16,
//     color: '#111827',
//     backgroundColor: '#F9FAFB',
//   },
//   signUpButton: {
//     height: 56,
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: '#2563EB',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
    
    
//   },
//   signUpButtonText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
// });

// export default SignUpScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const SignUpScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    // Validate required fields
    if (!firstName.trim()) {
      Alert.alert('Validation Error', 'First name is required');
      return;
    }

    if (!lastName.trim()) {
      Alert.alert('Validation Error', 'Last name is required');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      Alert.alert('Validation Error', 'Email is required');
      return;
    } else if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    // Validate password
    if (!password) {
      Alert.alert('Validation Error', 'Password is required');
      return;
    } else if (password.length < 8) {
      Alert.alert('Validation Error', 'Password must be at least 8 characters long');
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match');
      return;
    }

    const name = `${firstName} ${lastName}`;

    router.push({
      pathname: '/registration/roleSelection',
      params: { name, email, password },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.push('/registration/registration1')}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Get started by entering your Personal Information</Text>

        {/* Name Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Name</Text>
          
          <View style={styles.nameContainer}>
            <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.inputLabel}>First name</Text>
              <TextInput
                style={styles.input}
                value={formData.firstName}
                onChangeText={(text) => handleInputChange('firstName', text)}
                placeholder="First name"
                placeholderTextColor="#9CA3AF"
              />
            </View>
            
            <View style={[styles.inputContainer, { flex: 1, marginLeft: 8 }]}>
              <Text style={styles.inputLabel}>Last name</Text>
              <TextInput
                style={styles.input}
                value={formData.lastName}
                onChangeText={(text) => handleInputChange('lastName', text)}
                placeholder="Last name"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
        </View>

        {/* Email Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Email</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Enter email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Password</Text>
          <TextInput
            style={styles.input}
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
            placeholder="Enter password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={true}
          />
        </View>

        {/* Confirm Password Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={formData.confirmPassword}
            onChangeText={(text) => handleInputChange('confirmPassword', text)}
            placeholder="Renter password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={true}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={handleSignUp}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  backButton: {
    marginTop: 16,
    marginBottom: 2,
    padding: 8,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 24,
    color: '#2563EB',
  },
  content: {
    padding: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#F9FAFB',
  },
  signUpButton: {
    height: 56,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default SignUpScreen;