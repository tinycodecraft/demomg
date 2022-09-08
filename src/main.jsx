import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { StytchProvider, initStytch } from "@stytch/stytch-react"

const isProd = import.meta.env.VITE_MODE == 'production'
const stytch = initStytch(isProd ? import.meta.env.VITE_STYTCH_API : 'public-token-test-c7b7f1ce-2fcd-4171-9e23-1e522baa6522')

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StytchProvider stytch={stytch}>
			<Router>
				<App />
			</Router>
		</StytchProvider>
	</React.StrictMode>
)