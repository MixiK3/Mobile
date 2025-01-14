import { logoutAtom } from '@/entities/auth/model/auth.state'
import { gameAtom, loadGameAtom } from '@/entities/game/model/game.state'
import Button from '@/shared/Button'
import { Colors } from '@/shared/tokens'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import GameItem from '@/entities/layout/components/GameItem/GameItem'
import Input from '@/shared/Input'
import { useState } from 'react'

export default function MyGames() {
  const { isLoading, error, games } = useAtomValue(gameAtom)
  const loadGames = useSetAtom(loadGameAtom)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    console.log('aaaa')
    console.log(games)
    console.log('aaaa')
  }, [])

  const submit = () => {
    loadGames(searchQuery)
    setSearchQuery('')
  }

  return (
    <ScrollView style={styles.container}>
      <Input
        style={{ marginBottom: 20 }}
        placeholder="Введите название игры"
        value={searchQuery}
        onChangeText={(e) => setSearchQuery(e)}
      />
      <Button buttonText="Искать" onPress={submit} />
      <View style={styles.cardList}>
        {games.length == 0 && (
          <Text style={styles.noGames}>Вы пока ничего не искали</Text>
        )}
        {games.results?.map((g: any, i: number) => (
          <GameItem
            name={g.name}
            key={i}
            image={g.background_image}
            rate={g.rating}
            released={g.released}
          />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },

  cardList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    marginTop: 20,
  },

  noGames: {
    color: 'black',
    fontFamily: 'FiraSans',
    fontSize: 18,
  },
})
