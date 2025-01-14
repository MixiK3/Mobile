import { Pressable, StyleSheet, View } from 'react-native'
import MenuClose from '@/assets/icons/menu/close'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/commonjs/src/types'

export default function CloseDrawer(navigation: DrawerNavigationHelpers) {
  return (
    <Pressable onPress={navigation.closeDrawer}>
      <View style={styles.button}>
        <MenuClose />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    right: 10,
  },
})
