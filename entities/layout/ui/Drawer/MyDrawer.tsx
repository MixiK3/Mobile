import { logoutAtom } from '@/entities/auth/model/auth.state'
import { loadProfileAtom } from '@/entities/user/model/user.state'
import UserProfile from '@/entities/user/UI/UserProfile'
import CloseDrawer from '@/features/layout/ui/CloseDrawer/CloseDrawer'
import CustomLink from '@/shared/CustomLink'
import { Colors } from '@/shared/tokens'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { useAtom, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import MenuItem from '../MenuItem/MenuItem'

export default function MyDrawer(props: DrawerContentComponentProps) {
  const logout = useSetAtom(logoutAtom)
  const [profile, loadProfile] = useAtom(loadProfileAtom)

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.scrollView}
    >
      <View style={styles.content}>
        <UserProfile user={profile.profile} />
        <View style={styles.menuList}>
          <MenuItem
            icon="profile"
            text="Профиль"
            path="profile"
            navigation={props}
          />
          <MenuItem icon="list" text="Игры" path="index" navigation={props} />
        </View>
      </View>

      <View style={styles.footer}>
        <CustomLink href={'/Login'} text="Выход" onPress={() => logout()} />
        <View style={styles.logo}>
          <Image
            source={require('./../../../../assets/images/game.png')}
            resizeMode="contain"
            style={{ width: 64, height: 64 }}
          />

          <Text style={styles.logoText}>GameHUB</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.twilight,
  },

  content: {
    flex: 1,
  },

  footer: {
    gap: 40,
    alignItems: 'center',
    paddingBottom: 20,
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },

  logoText: {
    color: '#FFF',
    fontSize: 27,
    fontFamily: 'FiraSansSemiBold',
    marginTop: 5,
  },

  menuList: {
    gap: 12,
  },
})
