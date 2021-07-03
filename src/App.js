/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import "./App.css";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PuzzlePage from "./pages/PuzzlePage";
import BrowsePage from "./pages/BrowsePage";
import CustomPage from "./pages/CustomPage";

import AppBar from "./components/AppBar";

import ImageContext from "./context/ImageContext";

function App() {
	const [imagePath, setImagePath] = useState(
		localStorage.getItem("customImagePath")
	);

	const changeImagePath = (newPath) => {
		setImagePath(newPath);
		localStorage.setItem("customImagePath", newPath);
	};

	const contextState = {
		imagePath,
		changeImagePath,
	};

	return (
		<Router>
			<ImageContext.Provider value={contextState}>
				<AppBar />
				<Switch>
					<Route
						path={`${process.env.PUBLIC_URL}/puzzle`}
						component={PuzzlePage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/browse`}
						component={BrowsePage}
					></Route>
					<Route
						path={`${process.env.PUBLIC_URL}/custom`}
						component={CustomPage}
					/>
					<Route path={`/`} component={LandingPage}></Route>
				</Switch>
			</ImageContext.Provider>
		</Router>
	);
}

export default App;
