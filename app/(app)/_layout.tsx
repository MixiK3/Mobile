import { authAtom } from "@/entities/auth/model/auth.state"
import { Redirect } from "expo-router"
import { useAtomValue } from "jotai"
import { Drawer } from 'expo-router/drawer'
import { Colors } from "@/shared/tokens";
import MenuButton from "@/features/layout/ui/MenuButton/MenuButton";
import MyDrawer from '@/entities/layout/ui/Drawer/MyDrawer'

export default function AppLayout() {
	const { access_token } = useAtomValue(authAtom);

	if (!access_token) {
		return <Redirect href="/Login"/>
	}

	return (
			<Drawer 
				drawerContent={(props) => <MyDrawer {...props}/>}
				screenOptions={({ navigation }) => ({
					headerStyle: {
						backgroundColor: Colors.twilight,
						borderBottomWidth: 0
					},
					headerLeft: () => {
						return <MenuButton navigation={navigation}/>
					},
					headerTitleStyle: {
						color: "#FFF",
						fontFamily: 'FiraSans',
						fontSize: 20
					},
					headerTitleAlign: 'center'
			})}>
				<Drawer.Screen name="index" options={{title: 'Мои игры'}}/>
				<Drawer.Screen name="profile" options={{title: 'Мои игры'}}/>
			</Drawer>
	)
}