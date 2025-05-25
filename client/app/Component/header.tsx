import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type HeaderProps = {
  userName: string;
  onProfilePress?: () => void;
  onNotificationPress?: () => void;
  onMenuPress?: () => void;
  disableProfile?: boolean;
  showBackButton?: boolean;
  onBackPress?: () => void;
  showUserName?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  userName,
  onProfilePress,
  onNotificationPress,
  onMenuPress,
  disableProfile = false,
  showBackButton = false,
  onBackPress,
  showUserName = true // New prop to control username visibility
}) => {
  return (
    <View style={styles.header}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        {showBackButton ? (
          <>
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            {!disableProfile && (
              <Image 
                source={require('@/assets/images/user-icon.png')}
                style={[styles.profileIcon, { marginLeft: 12 }]}
              />
            )}
          </>
        ) : disableProfile ? (
          <Image 
            source={require('@/assets/images/user-icon.png')}
            style={styles.profileIcon}
          />
        ) : (
          <TouchableOpacity 
            style={styles.profileSection}
            onPress={onProfilePress}
            activeOpacity={0.7}
          >
            <Image 
              source={require('@/assets/images/user-icon.png')}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Center Text - Always show unless explicitly hidden */}
      {showUserName && (
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      )}

      {/* Right Icons */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity 
          onPress={onNotificationPress}
          style={styles.iconButton}
          activeOpacity={0.7}
        >
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={onMenuPress}
          style={styles.iconButton}
          activeOpacity={0.7}
        >
          <Ionicons name="menu-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 40,
  },
  backButton: {
    marginRight: 0,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  welcomeText: {
    fontSize: 14,
    color: '#666',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
});

export default Header;