/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PuzzlePage from "./pages/PuzzlePage";
import BrowsePage from "./pages/BrowsePage";

import AppBar from "./components/AppBar";

function App() {
	return (
		<Router>
			<AppBar />
			<Switch>
				<Route path="/puzzle/:id/:size([3-5])" component={PuzzlePage} />
				<Route path="/browse" component={BrowsePage}></Route>
				<Route path="#" component={LandingPage}></Route>
			</Switch>
		</Router>
	);
}

export default App;
