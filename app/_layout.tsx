import { Colors } from '@/shared/tokens'
import { Stack } from 'expo-router'
import { Platform } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar'
import { StatusBar } from 'expo-status-bar'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'

export default function RootLayout() {
  const insets = useSafeAreaInsets()

  if (Platform.OS === 'android') {
    NavigationBar.setBackgroundColorAsync(Colors.sapphire)
  }

  const [loaded] = useFonts({
    FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
    FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarBackgroundColor: Colors.crimson,
          contentStyle: {
            backgroundColor: Colors.crimson,
            paddingTop: insets.top,
          },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="Login" />
        <Stack.Screen name="restore" />
      </Stack>
    </SafeAreaProvider>
  )
}
