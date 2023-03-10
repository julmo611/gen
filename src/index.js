import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<CookiesProvider>
				<App />
			</CookiesProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
