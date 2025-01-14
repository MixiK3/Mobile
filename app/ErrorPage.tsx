import { Colors } from '@/shared/tokens'

import { StyleSheet, Text, View } from 'react-native'

import Button from '@/shared/Button'

import { router } from 'expo-router'

export default function Unmatched() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Some Unmatched Route</Text>

      <Text style={styles.descriptionText}>Something went wrong</Text>

      <Button
        buttonText="Back to main page"
        onPress={() => router.replace('/')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontFamily: 'Arial-BoldMT',
    fontSize: 24,
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  descriptionText: {
    color: Colors.cloud,
    fontFamily: 'Arial-BoldMT',
    fontSize: 18,
  },
})
