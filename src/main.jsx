import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.scss'
import './assets/styles/index.scss'
import Router from './components/ui/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
)