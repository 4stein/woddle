import {Platform} from 'react-native';

// Platform-specific API URL configuration
// - iOS: Uses localhost since iOS simulator runs on the same machine
// - Android: Uses 10.0.2.2 which is the special alias to reach host machine's localhost
// - Default: Fallback to localhost for other platforms
export const API_URL = Platform.select({
  ios: 'http://localhost:3001', // Direct localhost access for iOS simulator
  android: 'http://10.0.2.2:3001', // Special Android emulator alias for host's localhost
  default: 'http://localhost:3001', // Default fallback URL
});
