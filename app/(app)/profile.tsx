import { Colors } from "@/shared/tokens";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
	return (<View style={styles.container}>
				<Text style={styles.text}>ПРОФИЛЬ</Text>
			</View>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.twilight
	},

	text: {
		fontSize: 16,
		fontFamily: 'FiraSans',
		color: '#FFF'
	}
})