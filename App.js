import React from 'react';
import ErrorBoundary from './src/ErrorHandling/ErrorBoundary';
import MainScreen from './src/screens/MainScreen';

const App = () => {
	return (
		<ErrorBoundary>
			<MainScreen />
		</ErrorBoundary>
	);
};

export default App;
