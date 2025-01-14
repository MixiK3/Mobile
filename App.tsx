import Input from '@/shared/Input'
import { Colors } from '@/shared/tokens'
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native'
import Button from '@/shared/Button'

export default function AppMain() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={require('./../assets/images/game.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>GG</Text>
        </View>
        <Input placeholder="Email" isPassword={false} />
        <Input placeholder="Пароль" isPassword={true} />

        <Button buttonText="Войти" />
        <Text style={styles.reset}>Восстановить пароль</Text>
      </View>
    </View>
  )
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.midnight,
    // color: '#E0E0E0',
    flex: 1,
  },

  content: {
    width: width / 1.5,
    alignItems: 'center',
    rowGap: 10,
  },

  header: {
    marginBottom: 30,
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  logo: {
    width: 50,
  },

  reset: {
    marginTop: 10,
    color: Colors.midnight,
  },
})
