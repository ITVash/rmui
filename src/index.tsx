import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import {
	createTheme,
	responsiveFontSizes,
	Theme,
	ThemeProvider,
} from "@material-ui/core"

let dark: Theme = createTheme({
	palette: {
		primary: {
			main: "#FFF",
		},
		secondary: {
			main: "#FFB800",
		},
		text: {
			primary: "#000",
		},
		background: {
			paper: "#1B1B1B",
			default: "#FFB800",
		},
	},
	typography: {
		h1: {
			fontFamily: '"Roboto Condensed", "Helvetica", "Arial", sans-serif',
			fontWeight: 300,
		},
		h2: {
			fontFamily: '"Roboto Condensed", "Helvetica", "Arial", sans-serif',
			fontWeight: 300,
		},
		h3: {
			fontFamily: '"Roboto Condensed", "Helvetica", "Arial", sans-serif',
			fontWeight: 400,
		},
		h4: {
			fontFamily: '"Roboto Condensed", "Helvetica", "Arial", sans-serif',
			fontWeight: 400,
		},
		h5: {
			fontFamily: '"Roboto Condensed", "Helvetica", "Arial", sans-serif',
			fontWeight: 400,
		},
		h6: {
			fontFamily: '"Roboto Condensed", "Helvetica", "Arial", sans-serif',
			fontWeight: 500,
		},
		subtitle2: {
			color: "#FFF",
			fontFamily: '"Roboto Condensed", "Helvetica", "Arial", sans-serif',
		},
		subtitle1: {
			color: "#FFF",
			fontFamily: '"Roboto Condensed", "Helvetica", "Arial", sans-serif',
			fontSize: "0.875rem",
			fontWeight: 500,
			lineHeight: "1.57",
			letterSpacing: "0.00714em",
		},
	},
})
dark = responsiveFontSizes(dark)

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={dark}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
