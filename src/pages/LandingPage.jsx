/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { Wrapper, Main } from "../components/EmotionComponents";

const LandingPage = () => {
	return (
		<Wrapper>
			<Main>
				<h2>Sliding puzzles for everyone - beginner to advanced.</h2>
				<div>
					<Link to="/browse">Browse puzzles</Link>
					<Link to="/custom">Create custom puzzle</Link>
				</div>
			</Main>
		</Wrapper>
	);
};

export default LandingPage;
