import React from 'react';
import {Appbar} from 'react-native-paper';

const Header = () => {
	return (
		<Appbar.Header style={{backgroundColor: '#33DA88'}}>
			<Appbar.Content title="Generate Random Number" />
		</Appbar.Header>
	);
};

export default Header;
