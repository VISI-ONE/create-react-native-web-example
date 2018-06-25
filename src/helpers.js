import { Platform } from 'react-native';

export const isWeb = Platform.OS === 'web';
export const isNative = !isWeb;
export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isDev = process.env.NODE_ENV !== 'production';
export const isDesktop = isWeb && typeof matchMedia !== 'undefined' && matchMedia('(min-width: 768px)').matches;

export const shadow = Platform.select({
  ios: {
    shadowColor: '#CCCCCC',
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: { height: 1, width: 1 },
  },
  web: {
    shadowColor: '#CCCCCC',
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: { height: 1, width: 1 },
  },
  android: {
    elevation: 3,
  },
});
