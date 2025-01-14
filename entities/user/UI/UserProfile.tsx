import { Image, StyleSheet, Text, View } from "react-native";
import { currUser } from "../model/user.model";
import { useEffect } from "react";
import Profile from "@/assets/icons/user/Profile";

export default function UserProfile({ user }: { user: currUser | null }) {

	useEffect(() => {
		console.log(user)
	}, [])

  if (!user) {
    return null; 
  }

  return (
    <View style={styles.container}>
      {user.image ? (
        <Image
          style={styles.image}
          source={{
            uri: user.image
          }}
        />
      ) : (
        <Profile/>
      )}
      <Text style={styles.username}>{`${user.firstName} ${user.lastName}`}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
		width: 100, 
		height: 100,
		borderRadius: 50, 
		
  },

  container: {
		alignItems: "center", 
		justifyContent: "center",
		padding: 20,
		gap: 20
  },

	username: {
		color: '#FFF',
		fontSize: 18,
		fontFamily: 'FiraSans'
	}
});
