/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export const Wrapper = styled.div`
	max-width: 1280px;
	padding: 0 60px;
	margin: 0 auto;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	row-gap: 40px;
	align-items: center;
	padding: 40px 0;
`;

export const Heading = styled.h2`
	text-align: center;
	color: #000;
`;

export const NewPuzzleButton = styled(Link)`
	background: linear-gradient(to right, var(--orange), var(--yellow));
	border-bottom: 4px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

	display: flex;
	flex-direction: row;
	column-gap: 20px;
	align-items: center;
	justify-content: center;
	padding: 10px 35px;
	color: #fff;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 1rem;

	& img {
		height: 20px;
	}
`;

export const ReplayButton = styled.button`
	background: linear-gradient(to right, var(--blue), var(--green));
	border-bottom: 4px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);

	display: flex;
	flex-direction: row;
	column-gap: 20px;
	align-items: center;
	justify-content: center;
	padding: 10px 35px;
	color: #fff;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 1rem;

	& img {
		height: 20px;
	}
`;
