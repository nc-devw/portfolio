import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
	<ToastProvider
		autoDismiss
		autoDismissTimeout={3000}
	>
		<App />
	</ToastProvider>,
	document.getElementById('root')
);