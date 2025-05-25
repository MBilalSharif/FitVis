// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const ProfileScreen = () => {
//   const [isConnected, setIsConnected] = React.useState(true);

//   const menuItems = [
//     { title: 'My Membership', icon: 'card-outline' },
//     { title: 'Goal Preferences', icon: 'flag-outline' },
//     { title: 'Notification Settings', icon: 'notifications-outline' },
//     { title: 'Language Options', icon: 'language-outline' },
//     { title: 'Health Progress', icon: 'stats-chart-outline' },
//     { 
//       title: 'My Device', 
//       icon: 'watch-outline',
//       rightComponent: (
//         <View style={styles.connectionStatus}>
//           <Text style={styles.connectionText}>{isConnected ? 'Connected' : 'Disconnected'}</Text>
//           <Switch
//             value={isConnected}
//             onValueChange={() => setIsConnected(!isConnected)}
//             trackColor={{ false: '#767577', true: '#81b0ff' }}
//             thumbColor={isConnected ? '#2563EB' : '#f4f3f4'}
//           />
//         </View>
//       )
//     },
//     { title: 'FAQs', icon: 'help-circle-outline' },
//     { title: 'Feedback', icon: 'chatbox-ellipses-outline' },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>My Profile</Text>
//         </View>

        
//         {/* Profile Card */}
//         <View style={styles.profileCard}>
//           <View style={styles.avatarContainer}>
//             <Ionicons name="person" size={48} color="#2563EB" />
//           </View>
//           <View style={styles.profileInfo}>
//             <Text style={styles.profileName}>John Doe</Text>
//             <Text style={styles.profileEmail}>john.doe@example.com</Text>
//           </View>
//           <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
//         </View>

//         {/* Go Premium Button */}
//         <TouchableOpacity style={styles.premiumButton}>
//           <Text style={styles.premiumButtonText}>Go Premium</Text>
          
//         </TouchableOpacity>


//         {/* Menu Items */}
//         <View style={styles.menuContainer}>
//           {menuItems.map((item, index) => (
//             <TouchableOpacity 
//               key={index} 
//               style={styles.menuItem}
//               onPress={() => console.log(`${item.title} pressed`)}
//             >
//               <View style={styles.menuItemLeft}>
//                 <Ionicons name={item.icon} size={24} color="#2563EB" />
//                 <Text style={styles.menuItemText}>{item.title}</Text>
//               </View>
//               {item.rightComponent || <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />}
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//   },
//   header: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#111827',
//     textAlign: 'center',
//   },
//   premiumButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2563EB',
//     borderRadius: 25,
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     margin: 16,
//     marginTop: 8,
//   },
//   premiumButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//     marginRight: 8,
//   },
//   profileCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     margin: 16,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   avatarContainer: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#EFF6FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 16,
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 4,
//   },
//   profileEmail: {
//     fontSize: 14,
//     color: '#6B7280',
//   },
//   menuContainer: {
//     marginTop: 8,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     marginHorizontal: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F3F4F6',
//   },
//   menuItemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   menuItemText: {
//     fontSize: 16,
//     color: '#111827',
//     marginLeft: 16,
//   },
//   connectionStatus: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   connectionText: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginRight: 8,
//   },
// });

// export default ProfileScreen;

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const router = useRouter();
  const [isConnected, setIsConnected] = React.useState(true);

  const handleNavigation = (screenName: string) => {
    switch(screenName) {
      case 'My Membership':
        router.push('/profileEdits/membership');
        break;
      case 'Goal Preferences':
        console.log('Navigate to My Membership');
        break;
      case 'Notification Settings':
       router.push('/profileEdits/notification');
        break;
      case 'Language Options':
        router.push('/profileEdits/languages');
        break;
      case 'Health Progress':
        console.log('Navigate to My Membership');
        break;
      case 'My Device':
        console.log('Navigate to My Membership');
        break;
      case 'FAQs':
       router.push('/profileEdits/faqs');
        break;
      case 'Feedback':
       console.log('Navigate to My Membership');
        break;
      default:
        console.log('No screen defined for:', screenName);
    }
  };

  const menuItems = [
    { title: 'My Membership', icon: 'card-outline' },
    { title: 'Goal Preferences', icon: 'flag-outline' },
    { title: 'Notification Settings', icon: 'notifications-outline' },
    { title: 'Language Options', icon: 'language-outline' },
    { title: 'Health Progress', icon: 'stats-chart-outline' },
    { 
      title: 'My Device', 
      icon: 'watch-outline',
      rightComponent: (
        <View style={styles.connectionStatus}>
          <Text style={styles.connectionText}>{isConnected ? 'Connected' : 'Disconnected'}</Text>
          <Switch
            value={isConnected}
            onValueChange={() => setIsConnected(!isConnected)}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isConnected ? '#2563EB' : '#f4f3f4'}
          />
        </View>
      )
    },
    { title: 'FAQs', icon: 'help-circle-outline' },
    { title: 'Feedback', icon: 'chatbox-ellipses-outline' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {/* Profile Card */}
        <TouchableOpacity
          style={styles.profileCard}
          onPress={() => router.push('/profileEdits/profileEdit2')}
        >
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={48} color="#2563EB" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john.doe@example.com</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>

        {/* Go Premium Button */}
        <TouchableOpacity 
          style={styles.premiumButton}
          onPress={() => console.log('Go Premium pressed')}
        >
          <Text style={styles.premiumButtonText}>Go Premium</Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={() => handleNavigation(item.title)}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons name={item.icon as any} size={24} color="#2563EB" />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              {item.rightComponent || <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
  premiumButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 16,
    marginTop: 8,
  },
  premiumButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#6B7280',
  },
  menuContainer: {
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#111827',
    marginLeft: 16,
  },
  connectionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectionText: {
    fontSize: 14,
    color: '#6B7280',
    marginRight: 8,
  },
});


export default ProfileScreen;