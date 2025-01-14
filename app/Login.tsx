import Input from '@/shared/Input'
import { Colors } from '@/shared/tokens'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import Button from '@/shared/Button'
import AlertError from '@/shared/AlertError/AlertError'
import { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'
import { useAtom } from 'jotai'
import { loginAtom } from '@/entities/auth/model/auth.state'

export default function Login() {
  const [isAlertActive, setIsAlertActive] = useState<string | undefined>()
  const [inputData, setInputData] = useState({ username: '', password: '' })
  const [{ access_token, isLoading, error }, login] = useAtom(loginAtom)

  const showAndHideAlert = (text: string) => {
    setIsAlertActive(text)
    setTimeout(() => {
      setIsAlertActive(undefined)
    }, 2000)
  }

  const submit = () => {
    if (!inputData.password) {
      showAndHideAlert('Не введен пароль')
    }
    if (!inputData.username) {
      showAndHideAlert('Не введен email')
    }
    if (!inputData.username && !inputData.password){
      showAndHideAlert('Не введены данные пользователя')
    }
    login(inputData)
  }

  useEffect(() => {
    if (access_token) {
      router.replace('/')
    }
  }, [access_token])

  return (
    <View style={customStyles.container}>
      <AlertError isActive={isAlertActive} />
      <View style={customStyles.content}>
        <View style={customStyles.header}>
          <Image
            source={require('./../assets/images/game.png')}
            style={customStyles.logo}
            resizeMode="contain"
          />
          <Text style={customStyles.title}>GameHUB</Text>
        </View>
        <Input
          style={customStyles.input}
          value={inputData.username}
          placeholder="Email"
          isPassword={false}
          onChangeText={(e) =>
            setInputData((prev) => ({ ...prev, username: e }))
          }
        />
        <Input
          value={inputData.password}
          placeholder="Пароль"
          isPassword={true}
          onChangeText={(e) =>
            setInputData((prev) => ({ ...prev, password: e }))
          }
        />
        <Button
          buttonText="Войти"
          onPress={submit}
          isLoading={isLoading}
          style={customStyles.button}
        />
        <Link href={'/hjgkjhg'} style={customStyles.passwordReset}>
          <Text>Восстановить пароль</Text>
        </Link>
      </View>
    </View>
  )
}

const dimensions = Dimensions.get('window')

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  input: {
    color: Colors.white,
  },
  content: {
    width: dimensions.width * 0.85,
    gap: 15,
    alignItems: 'stretch',
  },
  button: {
    backgroundColor: Colors.plum,
    borderRadius: '10px',
  },
  header: {
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  title: {
    color: Colors.white,
    fontSize: 30,
    fontFamily: 'Arial-BoldMT',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  passwordReset: {
    marginTop: 15,
    color: Colors.white,
    textAlign: 'center',
  },
})
