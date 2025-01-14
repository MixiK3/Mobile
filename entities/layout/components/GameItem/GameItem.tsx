import { Colors } from '@/shared/tokens';
import { Image, StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';

export default function GameItem(props: { name: string, image: string, rate: string, released: string }) {
	const formatedReleasedDate = new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	}).format(new Date(props.released));

	return (
		<View style={styles.card}>
			<Image style={styles.image} source={{
         	uri: props.image,
         }}/>
			<Text style={styles.cardTitle}>{props.name}</Text>
			
			<View style={styles.cardInfo}>
				<Text style={styles.infoItem}>Рейтинг: {props.rate}</Text>
				<Text style={styles.infoItem}>Дата выхода: {formatedReleasedDate}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		width: '100%',
		backgroundColor: Colors.midnight,
		padding: 10,
		paddingBottom: 30,
		borderRadius: 12,
		gap: 20
	},

	image: {
		width: '60%',
		aspectRatio: 1,
		alignSelf: 'center',
		borderRadius: 10
	},

	cardTitle: {
		fontFamily: 'FiraSansSemiBold',
		color: '#FFF',
		fontSize: 20,
		textAlign: 'center'
	},

	cardInfo: {
		paddingLeft: 10
	},

	infoItem: {
		color: '#FFF',
		fontSize: 16,
		fontFamily: 'FiraSans'
	}
})