/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";

import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<main>
			<h2>Sliding puzzles for everyone - beginner od advanced.</h2>
			<div>
				<Link to="/browse">Browse puzzles</Link>
				<Link to="/custom">Create custom puzzle</Link>
			</div>
		</main>
	);
};

export default LandingPage;
