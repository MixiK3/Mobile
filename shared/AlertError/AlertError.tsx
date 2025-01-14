import { Animated, StyleSheet, Text, View } from "react-native"
import { AlertErrorProps } from "./AlertError.props"
import { Colors } from "../tokens"
import { useEffect, useRef } from "react";

export default function AlertError(props: AlertErrorProps) {
	const animatedValue = useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
		Animated.timing(animatedValue, {
			toValue: 60,
			duration: 1000,
			useNativeDriver: true
		}).start()
	}

	const fadeOut = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: true
		}).start()
	}

	useEffect(() => {
		if (props.isActive) {
			fadeIn();
		} else {
			fadeOut();
		}
	}, [props.isActive]);

	if (!props.isActive) {
		return <></>
	}

	return (<Animated.View style={{...styles.alertBody, transform: [{translateY: animatedValue}]}}>
			  		<Text style={styles.alertText}>{props.isActive}</Text>
			  </Animated.View>)
}

const styles = StyleSheet.create({
	alertBody: {
		position: 'absolute',
		backgroundColor: Colors.mango,
		top: -60,
		width: '100%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},

	alertText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500'
	}
})