/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

import { Link } from "react-router-dom";

import { Wrapper } from "./EmotionComponents";

const AppBar = () => {
	return (
		<Header>
			<Wrapper>
				<Navigation>
					<Link to={`${process.env.PUBLIC_URL}`}>
						<h1>Sliding puzzles</h1>
					</Link>

					<ul>
						<li>
							<Link to={`${process.env.PUBLIC_URL}/browse`}>Browse</Link>
						</li>
						<li>
							<Link to={`${process.env.PUBLIC_URL}/custom`}>
								Create custom puzzle
							</Link>
						</li>
					</ul>
				</Navigation>
			</Wrapper>
		</Header>
	);
};

const Header = styled.header`
	width: 100%;
	padding: 15px 0px;
	background-color: #fff;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
	border-bottom: 3px solid var(--main-gradient);
`;

const Navigation = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	h1 {
		font-size: 1.2rem;
	}

	ul {
		display: flex;
		column-gap: 40px;
	}
`;

export default AppBar;
