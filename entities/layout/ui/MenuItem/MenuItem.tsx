import MenuList from '../../../../assets/icons/menu/list/MenuList';
import Profile from "../../../../assets/icons/user/Profile";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, usePathname } from 'expo-router';
import { DrawerContentComponentProps, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/commonjs/src/types';
import { Colors } from '@/shared/tokens';



export default function MenuItem(props: { icon: string, text: string, navigation: DrawerContentComponentProps, path: string }) {
	const isActive = props.navigation.state.routes[props.navigation.state.index].name === props.path;

	return (
		<Pressable style={{...styles.container, borderRightWidth: isActive ? 4 : 0, borderColor: Colors.cloud}} onPress={() => props.navigation.navigation.navigate(props.path)}>
			{props.icon == 'profile' ?
				<Profile/> :
				<MenuList/>}
				<Link href={'/'}><Text style={styles.text}>{props.text}</Text></Link>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontFamily: 'FiraSans',
		color: Colors.white
	},

	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		paddingBlock: 10,
		paddingHorizontal: 10,
	}
})