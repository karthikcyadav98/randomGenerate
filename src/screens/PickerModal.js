import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const PickerModal = ({onModalClose, modalVisible, handleSelect}) => {
	const numberArr = [
		{id: 2, value: '2'},
		{id: 3, value: '3'},
		{id: 4, value: '4'},
		{id: 5, value: '5'},
		{id: 6, value: '6'},
		{id: 7, value: '7'},
		{id: 8, value: '8'},
		{id: 9, value: '9'}
	];

	return (
		<Modal
			onBackdropPress={() => onModalClose()}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			isVisible={modalVisible}
		>
			<View style={styles.viewStyle}>
				<Text style={{color: 'green', textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>
					Select a Number
				</Text>
				<FlatList
					style={{marginTop: 20}}
					keyExtractor={item => item.id}
					data={numberArr}
					renderItem={({item}) => (
						<TouchableOpacity
							style={{
								margin: 2,
								paddingTop: 15,
								paddingLeft: 10,
								paddingRight: 15,
								paddingBottom: 10,
								borderBottomWidth: 0.3,
								borderColor: 'black',
								flexDirection: 'row',
								justifyContent: 'space-between'
							}}
							onPress={() => handleSelect(item)}
						>
							<Text style={{fontSize: 16, color: 'black'}}>{item.value}</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		</Modal>
	);
};

export default PickerModal;

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#FFF',
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		height: SCREEN_HEIGHT * 0.5,
		bottom: 0,
		borderRadius: 12,
		borderWidth: 1
	}
});
