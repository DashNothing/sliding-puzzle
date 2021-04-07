/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

import eyeIcon from "../img/icons/eye.svg";

const RefrenceButton = ({ imagePath }) => {
	const Container = styled.div`
		position: relative;
		display: grid;
		place-items: center;
		width: 35px;
		height: 35px;
		border-radius: 100%;
		background-color: #65ccda;
		justify-self: end;

		img {
			width: 20px;
			height: 20px;
		}

		::after {
			content: "";
			position: absolute;
			bottom: -210px;
			right: -180px;
			width: 200px;
			height: 200px;
			background-image: url("${imagePath}");
			background-size: cover;
			background-color: #fff;
			background-position: center;
			border: 4px solid #fff;
			box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.25);
			transform-origin: top left;
			transform: scale(0);
			transition: all 0.2s ease;
			z-index: 5;
		}

		:hover::after {
			transform: scale(1);
		}
	`;

	return (
		<Container>
			<img src={eyeIcon} />
		</Container>
	);
};

export default RefrenceButton;
