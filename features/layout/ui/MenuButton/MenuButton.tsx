import MenuIcon from "@/assets/icons/menu/open";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import { useState } from "react";
import { Colors } from "@/shared/tokens";


export default function Button({navigation, ...props}: PressableProps & { navigation: any}) {
	const [clicked, setClicked] = useState<boolean>(false)

	return ( 
				<Pressable 
					{...props} 
					onPressIn={() => {setClicked(true)}} 
					onPressOut={() => setClicked(false)} 
					onPress={() => {navigation.toggleDrawer()}}>
					<View style={{...styles.button, 
										  backgroundColor: clicked ? Colors.cloud : 'transparent'}}>
						<MenuIcon/>
					</View>
				</Pressable> 
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 20
	}
})