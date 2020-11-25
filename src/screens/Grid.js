import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const Grid = ({picker, random, handleDisable}) => {
	const gridNumber = picker * picker;
	const [gridData, setGridData] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [number, setNumber] = useState('');

	useEffect(
		() => {
			generateGrid();
		},
		[picker]
	);

	useEffect(
		() => {
			setNumber(random);
		},
		[random]
	);

	const generateGrid = () => {
		setLoading(true);
		const prevData = [];
		for (let i = 1; i <= gridNumber; i++) {
			const item = {
				id: i,
				value: i.toString()
			};
			prevData.push(item);
		}
		setGridData(prevData);
		setLoading(false);
	};

	return (
		<View style={styles.gridView}>
			{isLoading ? (
				<ActivityIndicator color="#33DA88" />
			) : (
				<FlatList
					key={picker}
					keyExtractor={item => item.id.toString()}
					numColumns={picker}
					data={gridData}
					renderItem={({item}) => (
						<TouchableOpacity
							onPress={() => {
								if (number === item.id) {
									handleDisable();
								}
							}}
							style={[
								styles.itemView,
								{padding: 70 / picker, backgroundColor: number === item.id ? 'yellow' : '#fff'}
							]}
						>
							{number !== item.id ? (
								<Text style={{width: 200 / picker, textAlign: 'center'}}>{item.value}</Text>
							) : (
								<Text style={{width: 200 / picker, textAlign: 'center'}}>{item.value}</Text>
							)}
						</TouchableOpacity>
					)}
				/>
			)}
		</View>
	);
};

export default Grid;
const styles = StyleSheet.create({
	gridView: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
	itemView: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#000'
	}
});
