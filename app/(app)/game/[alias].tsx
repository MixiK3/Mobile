import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function GamePage() {
	const { alias } = useLocalSearchParams();

	return (
		<View><Text style={{color: '#fff'}}>{alias}</Text></View>
	);
}