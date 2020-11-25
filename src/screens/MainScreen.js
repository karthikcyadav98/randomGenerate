import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Header from '../common/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import PickerModal from './PickerModal';
import Grid from './Grid';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const MainScreen = () => {
	const [picker, setPicker] = useState('select');
	const [pickerModal, setPickerModal] = useState(false);
	const [isDisabled, setDisabled] = useState(false);
	const [randomnum, setRandomnum] = useState(0);
	const [randArr, setRandArr] = useState([]);
	const [doneMoves, setDoneMoves] = useState(false);

	const handlePicker = () => {
		setPickerModal(true);
		setDisabled(false);
		setRandomnum(0);
		setRandArr([]);
		setDoneMoves(false);
	};

	const onModalClose = () => {
		setPickerModal(false);
	};

	const handleSelect = item => {
		setPicker(item.value);
		setPickerModal(false);
	};

	const handleGenerate = () => {
		setDisabled(true);
		randomNumber(1, picker * picker);
	};

	const handleDisable = () => {
		setDisabled(false);
	};

	const randomNumber = (min, max) => {
		const random = Math.random() * (max + 1 - min) + min;
		const prevData = randArr;
		console.log(prevData.length);
		if (prevData.length !== max) {
			if (prevData.includes(parseInt(random))) {
				randomNumber(1, picker * picker);
			} else {
				setRandomnum(parseInt(random));
				prevData.push(parseInt(random));
				setRandArr(prevData);
			}
		} else {
			setDoneMoves(true);
		}
		return;
	};

	return (
		<View style={{flex: 1}}>
			<Header />

			<View style={styles.pickerView}>
				<TouchableOpacity style={styles.picker} onPress={() => handlePicker()}>
					<Text style={styles.pickerText}>{picker}</Text>
					<Icon color="#000" size={18} name="caretdown" />
				</TouchableOpacity>
			</View>

			{picker !== 'select' && <Grid picker={picker} random={randomnum} handleDisable={handleDisable} />}

			{picker !== 'select' &&
			!doneMoves && (
				<View style={styles.btnView}>
					{isDisabled ? (
						<View style={[styles.btnLayout, {backgroundColor: '#BBBBBB'}]}>
							<Text style={[styles.btnText, {color: 'grey'}]}>Generate</Text>
						</View>
					) : (
						<TouchableOpacity
							style={[styles.btnLayout, {backgroundColor: '#33DA88'}]}
							onPress={() => {
								handleGenerate();
							}}
						>
							<Text style={[styles.btnText, {color: 'black'}]}>Generate</Text>
						</TouchableOpacity>
					)}
				</View>
			)}

			{doneMoves && <Text style={styles.infoText}>You have exhausted with your moves</Text>}

			{picker === 'select' && (
				<Text style={styles.infoText}>Please Select from the Dropdown to Display the Grid</Text>
			)}

			<PickerModal onModalClose={onModalClose} modalVisible={pickerModal} handleSelect={handleSelect} />
		</View>
	);
};

export default MainScreen;

const styles = StyleSheet.create({
	pickerView: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	picker: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#CCCCCC',
		width: SCREEN_WIDTH * 0.9,
		padding: 10,
		margin: 10,
		borderRadius: 10
	},
	pickerText: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 18
	},
	btnView: {
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnLayout: {
		borderRadius: 20,
		padding: 15,
		margin: 15
	},
	btnText: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	infoText: {
		textAlign: 'center',
		margin: 20,
		fontSize: 18,
		fontWeight: 'bold'
	}
});
