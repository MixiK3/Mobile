import { Link, LinkProps } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { Colors } from "./tokens";

export default function CustomLink({text, ...props }: LinkProps & { text: string }) {
	return <Link {...props}><Text style={styles.linkText}>{text}</Text></Link>
}

const styles = StyleSheet.create({
	linkText: {
		color: Colors.mango,
		fontFamily: 'FiraSans',
		fontSize: 19
	}
})